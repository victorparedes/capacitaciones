# Arquitectura basada en microservicios
 
Los microservicios son un enfoque arquitectónico y organizativo para el desarrollo de software. A diferencia de una aplicación monolítica ( frontend, backend, datos ), la arquitectura de microservicios se basa en tener un conjunto de servicios que cumplen con diferentes responsabilidades de una aplicación.
 
Estos servicios, los cuales llamaremos microservicios, funcionan de manera independiente y autónoma. Cada uno de ellos solo se encarga de implementar una funcionalidad completa del negocio. Por ejemplo: Si pensamos en un editor de textos podremos tener un microservicio que controle la gramática, otro que trabaje con archivos, otro podría trabajar con la impresora y así hasta completar toda la funcionalidad completa de nuestro editor de textos.

Existen varios patrones de diseño para los microservicios.

- Event driven: En este patrón un microservicio publica un evento y otro microservicio lo consumirá.

- Aggregator o Proxy: Un cliente web necesita información que está en varios microservicios. En este caso se invoca a un microservicio que agrega las llamadas a otros microservicios para obtener la respuesta.

- Chained: En este caso se realizan llamadas consecutivas para componer la información.

- Asynchronous messaging: Con un patrón de llamadas REST, las peticiones y llamadas son asíncronas (se pueden hacer implementaciones para llegar a asíncronas); por lo que provoca que en muchas ocasiones se utilice un servicio de mensajería asíncrona como Kafka para enviar información.
Patrón Saga: El Patrón Saga es una secuencia de transacciones locales donde cada transacción actualiza información dentro de un servicio.



# Ventajas
- Posibilita la diversidad tecnológica: Es posible utilizar diferentes lenguajes y herramientas para cada microservicio.
 
- Fáciles de escalar: Al ser aplicaciones muy pequeñas son más fáciles de crear, mantener y de desplegar en diferentes entornos.

# Desventajas
- Mayor tiempo de diseño: Se requiere una mayor inversión en la planificación para asegurarnos que no exista acoplamiento de servicios.
 
- Registro de logs y monitoreo: Cada servicio debe ser monitoreado y registrado correctamente para asegurarnos que nuestra aplicación funciona como corresponde.