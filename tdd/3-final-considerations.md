Basicamente hemos repasado casi todos los puntos principales sobre TDD ( o al menos los mas importantes ), si crees que me he olvidado de alguno te aliento que me propongas un pull request y luego de analizarlo lo incluire en este documento ( y ademas te mencionare en los agradecimientos ).

Consideraciones finales a tener en cuenta:

## TDD es una metodologia que "guia" el desarrollo de tu codigo. 
No son pruebas que puedes añiadir a tu proyecto legacy si no que tu proyecto debe nacer con esta metodologia de desarrollo de software para que sea efectiva

## No pierdas tiempo buscando un 100% de code coverage.
Es mas importante cubrir casos de uso reales, dejar que TDD guie la arquitectura de tu proyecto a que pierdas el tiempo con el constructor de una clase por que "no hay ningun test que lo pruebe".

## Recuerda tambien refactorizar tus test unitarios
Tus test unitarios tambien son parte de tu proyecto, cuando hayas terminado un trabajo revisalos y verifica que tambien sean performantes y claros. Recuerda que los test unitarios son parte de la documentacion tecnica!

## Involucra a los analistas en la redaccion de los test unitarios.
Y dios dijo "usad pseudocodigo para explicar codigo a los no iniciados". Puedes utilizar pseudocodigo para explicar a una persona que no entienda de software ( o a un colega de otro stack tecnologico ) para pedir opiniones y validaciones. Por ejemplo, podrias compartir esto por email.


```
// Preparacion
Preparo un cliente con un numero de CUIT invalido para enviar al servicio de validaciones.

// Ejecucion
Envio el cliente invalido.

// Validacion
Analizo la respuesta, debo esperar un error que me indique que el numero de CUIT no es valido.

```