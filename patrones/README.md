# Patrones de diseño

En el año 1994 cuatro amigos ( Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides ) publicaron un libro llamado Design Patterns que estaba orientado a ayudar a resolver los problemas mas comunes en el desarrollo de software. Estos amigos, llamados "Gang of Four", establecieron las bases fundamentales de los patrones de diseño ( especificamente 23 patrones de diseño ).

## Tipos de patrones de diseño
Existen tres tipos de patrones de diseño, estos tipos representan cada una de las interacciones que realizamos en el software. Creacion de clases, comportamiento de las mismas y comunicacion entre ellas.

## Patrones creacionales
Los patrones creacionales son todos aquellos que nos resuelven problemas con la creacion de clases en los escenarios mas comunes.

- Object Pool: Crea un conjunto de objetos inicializados preparados para su uso, en vez de crearlos bajo demanda. Es útil cuando la creación de estos objetos es costosa (por ejemplo, al crear un objeto que gestiona una conexión con una base de datos).

- Abstract Factory: permite trabajar con objetos de distintas familias de manera que las familias no se mezclen entre sí y haciendo transparente el tipo de familia concreta que se esté usando. El problema a solucionar por este patrón es el de crear diferentes familias de objetos, como por ejemplo, la creación de interfaces gráficas de distintos tipos (ventana, menú, botón, etc.).
- Builder: abstrae el proceso de creación de un objeto complejo, centralizando dicho proceso en un único punto.

- [Factory Method:](creational-design-patterns/factory-method.md) Centraliza la construccion de una clase en otra clase. Esto nos permite no tener que crear un objeto con todas sus dependencias una y otra ves.

- Prototype: crea nuevos objetos clonándolos de una instancia ya existente.

- Singleton: Garantiza que exista una unica instancia de la clase, que la misma sea global y que no se puedan crear instancias por fuera de este patron.

- Model View Controller: Modelo Vista Controlador. Es un patrón de arquitectura de software que separa los datos y la lógica de negocio de una aplicación de la interfaz de usuario y el módulo encargado de gestionar los eventos y las comunicaciones. Este patrón plantea la separación del problema en tres capas: la capa model, que representa la realidad; la capa controller , que conoce los métodos y atributos del modelo, recibe y realiza lo que el usuario quiere hacer; y la capa vista, que muestra un aspecto del modelo y es utilizada por la capa anterior para interactuar con el usuario.


## Patrones estructurales

Los patrones estructurales nos permiten solucionar problemas comunes durante la composicion de objetos. De esta forma poder crear componentes que puedan ser reutilizados.

- Adapter o Wrapper: Adapta una interfaz para que pueda ser utilizada por una clase que de otro modo no podría utilizarla.
- Bridge: Desacopla una abstracción de su implementación.
- Composite: Permite tratar objetos compuestos como si de uno simple se tratase.
- Decorator: Añade funcionalidad a una clase dinámicamente.
- Facade: Provee de una interfaz unificada simple para acceder a una interfaz o grupo de interfaces de un subsistema.
- Flyweight: Reduce la redundancia cuando gran cantidad de objetos poseen idéntica información.
- Proxy: Proporciona un intermediario de un objeto para controlar su acceso.
- Module: Agrupa varios elementos relacionados, como clases, singletons, y métodos, utilizados globalmente, en una entidad única.


## Patrones de comportamiento

Por ultimo, estos patrones son los que nos permiten establecer el comportamiento y la comunicacion entre objetos evitando el acoplamiento y la dependencia entre ellos.

- Chain of Responsibility: Permite establecer la línea que deben llevar los mensajes para que los objetos realicen la tarea indicada.
- Command: Encapsula una operación en un objeto, permitiendo ejecutar dicha operación sin necesidad de conocer el contenido de la misma.
- Interpreter: Dado un lenguaje, define una gramática para dicho lenguaje, así como las herramientas necesarias para interpretarlo.
- Iterator: Permite realizar recorridos sobre objetos compuestos independientemente de la implementación de estos.
- Mediator: Define un objeto que coordine la comunicación entre objetos de distintas clases, pero que funcionan como un conjunto.
- Memento: Permite volver a estados anteriores del sistema.
- Observer: Define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambie de estado se notifique y actualicen automáticamente todos los objetos que dependen de él.
- State: Permite que un objeto modifique su comportamiento cada vez que cambie su estado interno.
- Strategy: Permite disponer de varios métodos para resolver un problema y elegir cuál utilizar en tiempo de ejecución.
- Template Method: Define en una operación el esqueleto de un algoritmo, delegando en las subclases algunos de sus pasos, esto permite que las subclases redefinan ciertos pasos de un algoritmo sin cambiar su estructura.
- Visitor: Permite definir nuevas operaciones sobre una jerarquía de clases sin modificar las clases sobre las que opera.