Básicamente hemos repasado casi todos los puntos principales sobre TDD ( o al menos los más importantes ), si crees que me he olvidado de alguno te aliento que me propongas un pull request y luego de analizarlo lo incluiré en este documento ( y además te mencionare en los agradecimientos ).
 
Consideraciones finales a tener en cuenta:

## TDD es una metodología que "guía" el desarrollo de tu código.
No son pruebas que puedes añadir a tu proyecto legacy si no que tu proyecto debe nacer con esta metodología de desarrollo de software para que sea efectiva.

## No pierdas tiempo buscando un 100% de code coverage.
Es más importante cubrir casos de uso reales, dejar que TDD guíe la arquitectura de tu proyecto a que pierdas el tiempo con el constructor de una clase porque "no hay ningún test que lo pruebe".

## Recuerda también refactorizar tus test unitarios.
Tus test unitarios también son parte de tu proyecto, cuando hayas terminado un trabajo revisalos y verifica que también sean performantes y claros. Recuerda que los test unitarios son parte de la documentación técnica!

## Involucra a los analistas en la redacción de los test unitarios.
Y dios dijo "usad pseudocódigo para explicar código a los no iniciados". Puedes utilizar pseudocódigo para explicar a una persona que no entienda de software ( o a un colega de otro stack tecnológico ) para pedir opiniones y validaciones. Por ejemplo, podrías compartir esto por email.

Validación de un cliente invalido
```
// Preparación
Preparó un cliente con un número de CUIT invalido.
 
// Ejecución
Envío el cliente invalido al servicio.
 
// Validación
Analizó la respuesta, debo esperar un error que me indique que el número de CUIT no es váli
```


Validación de un cliente válido
```
// Preparación
Preparó un cliente con un número de CUIT válido.
 
// Ejecución
Envío el cliente válido al servicio.
 
// Validación
Analizó la respuesta, debo recibir un OK del servicio.
```
