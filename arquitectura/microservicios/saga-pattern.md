# Patrón SAGA
Armar una arquitectura de microservicios siguiendo el patrón SAGA nos permite crear, de la manera correcta, un sistema transaccional distribuido.
En este patrón, cada microservicio es responsable de la ejecución de un paso en la transacción y, además, es responsable de deshacer el mismo en caso de que se detecte una falla en cualquier microservicio involucrado.

# Caso de uso real
Supongamos que reservamos asientos para una película en el cine. Nuestra aplicación deberá: ofrecernos una película y horario, registrar la reserva para que nadie ocupe nuestros asientos, ofrecernos snacks/bebidas y finalmente solicitarnos el pago.

En este escenario, si nuestro pago falla ( por ejemplo, por saldo insuficiente ) debemos realizar la cancelación de la reserva y la compensación del stock de los snacks.

# Orquestacion vs Coreografia
Existen dos formas de aplicar este patrón.
 
### **Orquestación:**
Este enfoque involucra un microservicio "coordinador" u "orquestador" quien es el responsable de efectuar los llamados a los microservicios y procesar sus respuestas. El coordinador, además.  es el responsable de realizar el rollback en caso de fallar la operación.

### Ventajas
- Es más fácil conocer el flujo de la transacción.
- Fácil de monitorear ya que el coordinador controla el flujo.
- En caso de falla, es más fácil realizar el rollback de la transacción.
 
### Desventajas
- Los servicios tienen dependencia entre sí.
- Es más difícil escalar ya que depende del coordinador.
- Incrementa el tamaño de la aplicación.

Podemos aplicar este enfoque cuando la respuesta de un microservicio sea necesaria para la ejecución del próximo.
 
Por ejemplo, un hotel spa necesita permitir a sus clientes reservar habitaciones y servicios ( baños, masajes, tratamientos). Cada hotel tiene personal permanente y temporal para reducir costos. Entonces...
 
- Nuestro primer microservicio nos dará la información del hotel
- El segundo, nos dirá que personal necesitamos convocar para cubrir lo que el cliente solicita.
- El tercero nos dirá si el personal está disponible o no para los horarios solicitados.

### **Coreografiado:**
En este enfoque no existe un coordinador, los servicios se comunican entre sí por eventos o mensajes. Cada servicio sigue siendo responsable de ejecutar un paso en la transacción pero además deben enviar un evento o mensaje en caso de que fallen para que todos los demás servicios hagan su operación de rollback.

### Ventajas:
- Un evento puede ser escuchado por más de un microservicio.
- Menos acoplamiento ya que utiliza eventos en lugar de un proceso coordinador.
- Puede ejecutar varios microservicios de manera asíncrona.

### Desventajas
- Requiere una herramienta de eventos o mensajes.
- Conocer los microservicios que se ejecutan no es tan claro como en el modelo orquestado.
- Es más difícil conocer el flujo y orden de ejecución.

Podemos aplicar este enfoque cuando necesitemos una solución en la cual, la respuesta de cada  microservicio no sea requerida para ejecutar otros microservicios.

Por ejemplo, tenemos una plataformas de compras online que nos permite utilizar más de una tarjeta para pagar una compra.
Cuando se confirma la compra debemos: reservar el stock, reservar el flete para el envío, realizar los pagos con todas las tarjetas. Todos estos pasos se realizan de manera asincrónica y en caso de que falle cualquiera de ellos debemos poder realizar la cancelación de los demás.