


Patrones de Arquitectura basda a eventos
Cuatro componentes. 
Un productor de mensajes quien es el que detecta un evento y genera un evento.
Un bus de mensajes quien es el que recibe los eventos y lo informa a los consumidores suscriptos.
Un evento ( o mensaje ).
Un consumidor que es quien atiende los eventos y luego actua en consecuencia.


Event notification:
Se caracteriza por mensajes cortos ( casi sin informacion ), y por que al productor del evento no le interesa conocer la respuesta del evento que lanzo. 
La informacion se centraliza segun cada dominio ( por ejemplo, el componente de usuarios solo tiene los datos de usuarios ).
Los consumidores, al recibir un evento con solo un id, deben buscar en otros componentes los datos necesarios para realizar su trabajo.

Forma de trabajo:
- Los productores detectan cambios en su dominio y lo informan al bus de mensajes. Por ejemplo, la creacion de un usuario se notificara con "se creo el usuario 1".
- Los consumidores escuchan estos eventos y realizan su trabajo. Por ejemplo, solicita al servicio de usuarios nombre, apellido y email del usuario 1 y envia el mail.

Condiciones
 - Los productores son los responsables de detectar cambios en su dominio.
 - Los mensajes deben ser pequeños. Por ejemplo "se creo el usuario 1" no incluye ningun tipo de informacion adicional.
 - Los productores emiten el mensaje sin esperar ninguna respuesta.
 - Toda la comunicacion se realiza mediante el bus de mensajes.

 Ejemplo: un registro de usuario en un sistema. Se crea un usuario nuevo, el componente que lo creo envia el mensaje de que se creo un nuevo usuario con el ID 1234. 
 El componente de usuarios ya no se preocupa por la respuesta. El componente de mails escucha que hubo un alta de usuario con el id 1234 y pide al componente de usuarios
 los datos del usuario nuevo y envia el mail.

Beneficios:
 - Bajo acoplamiento.
 - Repositorio de datos centralizado por dominio ( por ejemplo, el componente de usuarios tendra los datos de usuarios )

Contras:
 - Aun que tiene baja complejidad, tiene dependencia para obtener los datos necesarios para trabajar.
 - Alta latencia y trafico ya que cada consumidor debe buscar los datos necesarios para su trabajo




Event-carried state transfer
Trabaja de forma similar a "event notificacion" pero con cada evento envia una copia completa y actualizada de los datos del dominio. Cada consumidor guarda una copia 
del mensaje recibido que es utilizado para no tener necesidad de buscar datos externos.

Forma de trabajo
- Los productores detectan cambios en su dominio y lo informan al bus de mensajes con los datos completos ( es decir nombre, apellido, mail, etc ).
- Los consumidores escuchan estos eventos, guardan una copia de los datos que necesitan y realizan su trabajo. Ya no requiere de consultar a otros componentes para realizar su trabajo.

Condiciones:
 - Extiende a Event notification.
 - Los evento viajan con una copia completa y actualizada de los datos del dominio.
 - Cada suscriptor tiene una copia de los datos para utilizar la cual debe tener persistida.
 - Los consumidores tienen como responsabilidad, ademas de realizae su trabajo, mantener actualizado sus datos locales.

 - Actualiza a los consumidores evitando preguntas a sistemas de origen.
 - Los consumidores mantienen copias de datos que se actualizan a travez de eventos.
 - Se mantienen multiples copias de los datos de manera distribuida

Beneficios 
 - Mejora la resistencia a errores ( cuando el sistema que envia los emails ya tiene los datos y no necesita consultar ) 
 - Mejora la latencia ya que el consumidor tiene una copia de los datos.

 Contras: 
  - Mas complejidad ya que ahora el consumidor debe, ademas, mantener una copia de los datos.

 Ejemplo: Se registra un usuario que requiere una tarjeta de credito.
 - Se genera un usuario, el productor genera un mensaje con toda la informacion del usuario. 
 - El consumidor ( quien crea la tarheta ) recibe el mensaje, genera la tarheta de credito y se queda con una copia de los datos que necesita ( no utiliza todos ).
 - Si un usuario es modificado, el productor genera un nuevo mensaje y los consumidores actualizan sus datos.
 - Luego, un usuario ya existente quiere crear una tarjeta de credito nueva. Solicita al productor de tarjetas de credito la creacion de una tarjeta y este puede hacerlo 
   ya que tiene una copia de los datos del usuario que necesita ( se evita el llamado al servicio de usuarios )


Event sourcing
- Existe un repositorio de eventos<donde son registrados de manera persistente.
- Cada cambio en el dominio de un componente ( alguna actualizacion ) dispara un evento con los cambios realizados.
- Se puede recomponer el estado de los datos leyendo los registros grabados de los eventos.
- Los componentes no necesariamente deben trabajar contra el repositorio de eventos.
- Se trabaja generalmente con los cambios minimos o snapshots de los datos.
- Requiere mas complejidad ya que se registran los cambios.

Condiciones:
 - El bus de eventos es quien tiene el estado actual de los registros.
 - Cada dominio debe ser el unico responsable de actualizar la informacion para evitar conflictos ( por ejemplo, solo el servicio de usuarios envia eventos de actualizacion de datos )
 - Existen dos tipos de eventos. Los eventos de "hecho" que son cuando algo sucede y los eventos "comandos" que son los que se usan para actualizar la informacion.
 - Los eventos de tipo comando no deben reprocesarse en caso de restauracion de los datos.


Beneficios:
 - Es posible reconstruir o deshacer la informacion utilizando el bus de datos.
 - Los consumidores no necesitan reconstruir los datos ya que pueden mantener su copia local
 - Para prevenir reprocesar datos desde cero se utilizan "snapshots" que son "fotos" del estado de un dato en un momento.

Contras:
 - Es MUY IMPORTANTE la persistencia de los eventos para no perder integridad de datos. ( si pierdo un evento mis datos quedan inconsistentes )
 - Alta complejidad para sistemas que tienen muchas actualizaciones de datos.
 - Complejidad alta para retro compatibilidad ( por ejemplo, un evento del año 2017 puede no correr en mi aplicacion actual )


Productor

Mensajes

Mediador - 
Broker   - 


Procesador



CQRS: Command Query Responsability Segregation

Basicamente consiste en unificar quien es el que dispara un evento. Por ejemplo.

Para actualizar los datos de un usuario tengo dos puntos. Un CRM y un servicio web. Ninguno de los dos envia eventos si no que llaman a un commander que envia el evento 
para que ambos ( servicio web y CRM ) actualicen sus datos.





Event sourcing



Microservicios
Como hago comunicacion interprocesos
Como se comunica un servicio con otro
Que pasa cuando un microservicio se bloquea
Como hago un circuit breaker
Como hago un localizador de servicios


Microservicios es una buena solucion para escalar aplicaciones monoliticas ya funcionando.

