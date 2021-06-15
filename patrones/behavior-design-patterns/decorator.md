# Decorator
<p align="center">
  <img src="../imgs/mamushka.jpg">
</p> 

## Definición
La mejor forma de entender el patrón decorator es pensar en las [muñecas mamushka](https://es.wikipedia.org/wiki/Matrioshka). Las muñecas mamushkas son figuras que dentro contiene una figura similar pero más pequeña, que luego nuevamente contiene otra mas mas pequeña y así sucesivamente hasta llegar a una muñequita muy chiquita. Imaginemos que cada mamushka tiene una palabra escrita, al comenzar a abrir las muñecas anotamos esa palabra y las continuamos abriendo. Al llegar a la última muñeca ( y si anotamos todas las palabras ) tendremos una frase escrita :)

En nuestro código, cada "muñeca" es una clase que se encuentra dentro de la otra. Cada una de las "palabras" es lógica de código que se ejecuta. Esto significa que, cada clase ejecutará código propio y llamará al método de la clase que tiene en su interior ( al igual que las mamushkas! ).

Entonces, mientras que la herencia es estática ( es decir, no puedo cambiar que una clase herede de otra en tiempo de ejecución ) el uso del patrón decorator permite una herencia dinámica ( eso se conoce como agregación ). Veamos un ejemplo en la vida real:

"Estamos anotando personas interesadas en comprar el nuevo y último teléfono inteligente, los clientes llegan y se anotan para recibir notificaciones de cuando el teléfono estará disponible. Algunos quieren ser notificados por email, otros por whatsapp, otras personas por SMS, otros por Telegram  y otros tantos quieren recibir la notificación por diferentes combinaciones de todos los medios de contacto."

La forma de resolver este problema sin caer en un IF condicional anidado para ver que componente de notificación se usará es aplicar el patrón decorator.

```
Notificador
    Notificador Whatsapp
        Notificador Mail
           Notificador Insagram


Notificador
    Notificador Telegram
        Notificador SMS
           Notificador Facebook
```

## Componentes principales
Si bien podemos encontrar varias formas de implementar el patrón decorator ( con más o menos componentes ) prefiero utilizar esta forma ya que es funcional y fácil de entender.

**InterfaceComponent:** Es la interfaz que todos los decoradores deben aplicar para participar en el patrón.

**Decorator:** Este componente implementa InterfaceComponent y es la clase que extiende la funcionalidad del componente. Esta clase puede contener dentro de sí misma otro decorator más para continuar extendiendo la funcionalidad.

**ComponentAbstract:** Es el componente básico que todos los decoradores deben ejecutar. Es la mamushka más chiquita en el centro.

## Beneficios
- Usar la agregación en lugar de la herencia hace más flexible modificar y agregar funcionalidad.
- Evita que las clases tengan estén llenas de comportamiento haciendo que cada uno de los decoradores aplique una pequeña funcionalidad.

## Desventajas
- Genera una gran cantidad de objetos pequeños
- Puede ocasionar problemas con la identidad de los objetos ya que un decorador termina siendo una clase que envuelve a otra.

## Ejemplos prácticos
Supongamos que tenemos que hacer una aplicación que calcule los precios de una computadora con tres componentes. Mother, Micro y CPU.

```csharp
    public class Ejemplo
    {
        public void Ejemplo1()
        {
            IDecorator cpu = new CpuHigh(new DecoratorAbstract());
            IDecorator memoria = new MotherboardHigh(cpu);
            IDecorator mother = new MemoryHigh(memoria);
            IDecorator computadoraCara = new Computadora(mother);

            int precioComputadoraCara = computadoraCara.ObtenerPrecio(); // 4560
        }

        public void Ejemplo2()
        {
            IDecorator cpu = new CpuLow(new DecoratorAbstract());
            IDecorator memoria = new MotherboardLow(cpu);
            IDecorator mother = new MemoryLow(memoria);
            IDecorator computadoraCara = new Computadora(mother);

            int precioComputadoraBarata = computadoraCara.ObtenerPrecio(); // 2130
        }

        public void Ejemplo3()
        {
            IDecorator cpu = new CpuHigh(new DecoratorAbstract());
            IDecorator memoria = new MotherboardLow(cpu);
            IDecorator mother = new MemoryHigh(memoria);
            IDecorator computadoraCara = new Computadora(mother);

            int precioComputadoraBarata = computadoraCara.ObtenerPrecio(); // 2560
        }
    }


    // Eso es la interface del componente interface.
    public interface IDecorator
    {
        int ObtenerPrecio();
    }

    // Clase inicial llamada "Componente" que es la que entrega un producto terminado.
    // En nuestro caso nos va a devolver una computadora
    public class Computadora : IDecorator
    {
        private IDecorator _decorator;
        public Cafe(IDecorator decorator) 
        {
            this._decorator = decorator;
        }

        public  v ObtenerPrecio() 
        { 
            return this._decorator.ObtenerPrecio(); 
        }            
    }

    // A partir de aqui, son todos componentes. CPU, Mother, Memoria.
    // Solo veremos un ejemplo expandido y el resto estaran en una linea.
    public class CpuLow : IDecorator
    {
        private IDecorator _decorator;
        public CpuLow(IDecorator decorator) 
        {
            this._decorator = decorator;
        }

        public int ObtenerPrecio() 
        { 
            return 100 + this._decorator.ObtenerPrecio(); 
        }            
    }            

    public class CpuHigh : IDecorator
    {
        private IDecorator _decorator;
        public CpuHigh(IDecorator decorator) { this._decorator = decorator; }
        public int ObtenerPrecio() { return 500 + this._decorator.ObtenerPrecio(); }    
    }

    public class MotherboardLow : IDecorator
    {
        private IDecorator _decorator;
        public MotherboardLow(IDecorator decorator) { this._decorator = decorator; }
        public int ObtenerPrecio() { return 2000 + this._decorator.ObtenerPrecio(); }    
    }

    public class MotherboardHigh : IDecorator
    {
        private IDecorator _decorator;
        public MotherboardHigh(IDecorator decorator) { this._decorator = decorator; }
        public int ObtenerPrecio() { return 4000 + this._decorator.ObtenerPrecio(); }    
    }

    public class MemoryLow : IDecorator
    {
        private IDecorator _decorator;
        public MemoryLow(IDecorator decorator) { this._decorator = decorator; }
        public int ObtenerPrecio() { return 30 + this._decorator.ObtenerPrecio(); }    
    }

    public class MemoryHigh : IDecorator
    {
        private IDecorator _decorator;
        public MemoryHigh(IDecorator decorator) { this._decorator = decorator; }
        public int ObtenerPrecio() { return 60 + this._decorator.ObtenerPrecio(); }    
    }

    public class DecoratorAbstract : IDecorator
    {
        public abstract int ObtenerPrecio();  
    }
```
