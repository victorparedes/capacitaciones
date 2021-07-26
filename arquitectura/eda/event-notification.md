# Event Notification
Este patron de arquitectura se caracteriza por utilizar mensajes cortos ( casi sin informacion ), y por que al productor del evento no le interesa conocer la respuesta del evento que informa. 
La informacion se centraliza segun cada dominio ( por ejemplo, un componente que maneja usuarios solo tiene los datos de usuarios ).
Los consumidores, al recibir un evento, deben buscar en otros componentes los datos necesarios para realizar su trabajo.

## Ejemplo de uso
```
Yo como administrador del sitio necesito que se envie un email de bienvenida con cada nuevo usuario creado para darle la bienvenida a los nuevos usuarios.
```

Si pensamos en componentes, al menos tenemos 2. Componente de usuarios que maneja la informacion de los usuarios y un componente que envia emails.

Tomando como base el ejemplo mencionado podemos detectar los siguientes actores.

### Actores
- **Productor:** Los productores son los responsables de detectar los cambios en el estado y reportarlo mediante un evento. Su comunicacion es unidireccional y no espera ni le interesa una respuesta. Tomando el ejemplo presentado, cuando el servicio de usuarios crea un nuevo usuario envia un evento diciendo "se ha creado el usuario 1".

- **Mensaje:** Es el contenido del evento, en este caso es un mensaje muy corto y simple. Siguiendo el ejemplo del servicio de usuarios, es el contenido del evento ( "se ha creado el usuario 1" )

- **Bus de eventos:** Es quien recibe todos los eventos y los canaliza a quienes hacia los procesos ( consumidores ) que se encuentran interesados en esos cambios de estado. 

- **Consumidores:** Se suscriben a los eventos mediante el bus de eventos. Estos procesos/servicios son los que actuan cuando se detecta un evento que les interesa. Por ejemplo, cuando se crea un usuario y se envia el evento "se ha creado el usuario 1" no interesa que un consumidor atienda el evento y envie un mail de bienvenida. Es responsabilidad del consumidor ir a buscar los datos que necesita para el proceso ( por ejemplo, nombre, apellido y direccion de email. ).

## Forma de trabajo
- Los productores detectan cambios en su dominio y lo informan al bus de mensajes. Por ejemplo, la creacion de un usuario se notificara con "se creo el usuario 1".
- Los consumidores escuchan estos eventos y realizan su trabajo. Por ejemplo, solicita al servicio de usuarios nombre, apellido y email del usuario 1 y envia el mail.

## Condiciones
 - Los productores son los responsables de detectar cambios en su dominio.
 - Los mensajes deben ser pequeños. Por ejemplo "se creo el usuario 1" no incluye ningun tipo de informacion adicional.
 - Los productores emiten el mensaje sin esperar ninguna respuesta.
 - Toda la comunicacion se realiza mediante el bus de mensajes.

 Ejemplo: un registro de usuario en un sistema. Se crea un usuario nuevo, el componente que lo creo envia el mensaje de que se creo un nuevo usuario con el ID 1234. 
 El componente de usuarios ya no se preocupa por la respuesta. El componente de mails escucha que hubo un alta de usuario con el id 1234 y pide al componente de usuarios
 los datos del usuario nuevo y envia el mail.

## Beneficios:
 - Bajo acoplamiento.
 - Repositorio de datos centralizado por dominio ( por ejemplo, el componente de usuarios tendra los datos de usuarios )

## Contras:
 - Aun que tiene baja complejidad, tiene dependencia para obtener los datos necesarios para trabajar.
 - Alta latencia y trafico ya que cada consumidor debe buscar los datos necesarios para su trabajo

