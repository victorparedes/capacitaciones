# Arquitecto de software

El arquitecto de software es el rol que define la forma del software que se esta construyendo. No se especializa en el negocio, se especializa en dfeiniciones tecnicas de gran escala aplicando patrones de arquitectura ( microservicios, EDA, N capas, Cliente/Servidor, peer to peer, etc ) 

Tomando como ejemplo la construccion de una casa, el rol del arquitecto es el que decide donde se ubicaran los ambientes, como se comunicara la cocina con el living. Donde estaran los dormitorios y como deberia verse la fachada de la casa. Luego, con esas definiciones, cada equipo ( albañiles, plomeros, electricistas, pintores ) realizan los trabajos necesarios para completar esa vision.

# Patrones de Diseño

Asi como existen patrones de diseño de software ( de creacion, de comportamiento y de comunicacion ) la arquitectura de software tambien tiene sus patrones de diseño.

## Microservicios

La idea de los microservicios es desacomplar lo maximo posible los componentes que nuestra aplicacion necesita. 



## Arquitectura por eventos ( EDA o Event-drive Architecture )

La arquitectura guiada por eventos promueve la division de componentes ( al igual que los microservicios ) pero promoviendo la produccion, deteccion, consumo y reaccion de eventos entre ellos.

Por ejemplo: Si existiera un componente de usuarios y se creara un nuevo usuario, este deberia lanzar un evento "se ha creado el usuario X" para que otros componentes ( como un componente que envia un mail de bienvenida ) puedan actuar en consecuencia de ese mensaje.