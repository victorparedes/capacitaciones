# Decorator
<p align="center">
  <img src="../imgs/mamushka.jpg">
</p> 
## Definición
La mejor forma de entender el patron decorator es pensar en las [muñecas mamushka](https://es.wikipedia.org/wiki/Matrioshka). Las muñecas mamushkas son figuras que dentro contiene una figura similar pero mas pequeña, que luego nuevamente contiene otra mas mas pequeña y asi sucesivamente hasta llegar a una muñequita muy chiquita. Imaginemos que cada mamushka tiene una palabra escrita, al comenzar a abrir las muñecas anotamos esa palabra y continuamos abriendolas. Al llegar a la ultima muñeca ( y si anotamos todas las palabras ) tendremos una frase escrita :)

En nuestro codigo, cada "muñeca" es una clase que se encuentra dentro de la otra. Cada una de las "palabras" es logica de codigo que se ejecuta. Esto significa que, cada clase ejecutara codigo propio y llamara al metodo de la clase que tiene en su interior ( al igual que las mamushkas! ).

Entonces, mientras que la herencia es estatica ( es decir, no puedo cambiar que una clase herede de otra en tiempo de ejecucion ) el uso del patron decorator permite una herencia dinamica ( eso se conoce como agregacion ). Veamos un ejemplo en la vida real:

"Estamos anotando personas interesadas en comprar el nuevo y ultimo telefono inteligente, los clientes llegan y se anotan para recibir notificaciones de cuando el telefono estara disponible. Algunos quieren ser notificados por email, otros por whatsapp, otras personas por SMS, otros por Telegram  y otros tantos quieren recibir la notificacion por diferentes combinaciones de todos los medios de contacto."

La forma de resolver este problema sin caer en un IF condicional anidado para ver que componente de notificacion se usara es aplicar el patron decorator.

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
Si bien podemos encontrar varias formas de implementar el patron decorator ( con mas o menos componentes ) yo prefiero utilizar esta forma ya que es funcional y facil de entender

**InterfaceComponent:** Es la interface que todos los decoradores deben aplicar para participar en el patron.
**Decorator:** Este componente implementa InterfaceComponent y es la clase que extiende la funcionalidad del componente. Esta clase puede contener dentro de si misma otro decorator mas para continuar extendiendo la funcionalidad.
**ComponentAbstract:** Es el componente basico que todos los decoradores deben ejecutar. Es la mamushka mas chiquita en el centro.

## Beneficios
- Usar la agregacion en lugar de la herencia hace mas flexible modificar y agregar funcionalidad.
- Evita que las clases tengan esten llenas de comportamiento haciendo que cada uno de los decoradores aplique una pequeña funcionalidad.

## Desventajas
- Genera una gran cantidad de objetos pequeños
- Puede ocasionar problema con la identidad de los objetos ya que un decorador termina siendo una clase que envuelve a otra.

## Ejemplos prácticos
Supongamos que tenemos que hacer una aplicacion que calcule los precios de una computadora con tres componentes. Mother, Micro y CPU.

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
