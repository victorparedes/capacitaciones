




Reduce el tamaño de nuestra aplicacion y por ende la cantidad de codigo a mantener. Esto tambien implica, al tener menos lineas de codigo, que hay menos espacio para la aparicion de bugs.

Incrementa la documentacion de nuestro proyecto. Cada prueba unitaria escrita es un caso de uso con ejemplos de parametros de entrada y valores de salida. En un escenario ideal, cada criterio de aceptacion de una historia puede ser representado por una prueba unitaria.

Reduce la curva de aprendizaje para nuevos integrantes en el equipo. Debido a que las pruebas unitarias deben ser utilizadas como documentacion, los nuevos miembros del equipo pueden involucrarse facilmente en cualquier componente del proyecto.

Permite realizar mejoras en el codigo de manera mas segura. Tener una bateria de pruebas unitarias por componente reduce drasticamente los bugs inesperados producidos por refactorizar componentes.

Recude la complejidad, cada 

El uso correcto de esta metodologia implica que nuestra aplicacion solo tendra las lineas de codigo que son necesarias... ni una mas, ni una menos. Esto se traduce a menos codigo que mantener y adcionalmente menos codigo donde puedan existir bugs.














Un test debe respetar con algunos criterios importantes representados por este el principio [FIRST](https://www.paradigmadigital.com/dev/principio-first-aumentar-la-calidad-tests-unitarios/):

- **F** ast: Debe ser rapido.
- **I** ndependient: No depender de otros test.
- **R** epeteable: Siempre debe devolver el mismo resultado.
- **S** elf-validating: Deben devolver verde o rojo.
- **T** imely: Debem ser escritos en el momento oportuno.


## Como debo escribir un test

Un test tiene tres secciones muy bien identificadas. ***Arrange*** es la preparacion de lo necesario para nuestro test. ***Act*** es el momento de la ejecucion del mismo ***Assert*** es el momento en el cual verificamos que las expectativas se cumplan.










Veamos algunos ejemplos suponiendo que estamos desarrollando una calculadora:

"Al sumar 1 + 1 debo retornar 2."

Es una expectativa clara, recibe 1 + 1 y debe devolver 2. El minimo codigo para cumplir con esta expectativa seria "return 2". Genial! hemos cumplido dos de los tres pasos del ciclo de vida de un test ( pasamos de RED a GREEN) pero tener una calculadora que solo nos de como resultado 2 cuando pasamos 1 + 1 no es muy util... asi que cambiemos algunas cosas.

"Al enviar dos enteros positivos debo devolver la suma de ambos."

Ahora, cumplir con esta expectativa es un poco mas dificil. Ya tenemos una prueba que nos valida que 1+1 debe ser 2 con lo cual ya tenemos un punto de partida.


Otros casos que podria validar son los negativos o las validaciones esperadas cuando suceda algo que no retorne el valor esperado.

Al sumar numeros con decimales debo retornar un error.
Al cualquier valor por cero debo devolver un error.



Como aplicar TDD 

Aplicar TDD implica cumplir con 3 pasos por cada prueba unitaria escrita:

Red: El primer paso consiste en crear una prueba unitaria que describa el caso que necesitamos desarrollar. Al no existir ninguna linea de codigo esta prueba unitaria dara como resultado un ROJO.

Green: Ya teniendo el primer paso cumplido, pasamos a escribir el codigo necesario para que se cumplan las espectativas de la prueba unitaria. En esta primer instancia se busca solamente que se cumpla con esa expectativa de la manera mas facil posible.

Refactor: Ya teniendo una prueba unitaria y el codigo necesario para cumplir con la misma es tiempo de mejorar nuestro codigo para hacerlo mas claro y performante. Cada mejora que hagamos debera ser validada por la prueba unitaria.



Cuales son los principios a seguir





Beneficios y contras


Antipatrones



Conclusion