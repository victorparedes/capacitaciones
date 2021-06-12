# Singleton
<p align="center">
  <img src="../imgs/homeros.jpg">
</p> 

## Definicion
Singleton es un patrón del tipo creacional, su objetivo principal es asegurar la existencia de una única instancia de un objeto a nivel global. Esto quiere decir, que sin importar en qué parte del código invoquemos a la instancia siempre obtendremos la misma.

## Beneficios

- Se tiene control absoluto de la instancia ya que la creación de la misma se encuentra en la clase singleton.

- La creación de la instancia es "lazy load", esto quiere crea el objeto en el mismo momento que se necesita con lo cual ahorra recursos y acelera el tiempo de inicio de la aplicación.

- Permite que el objeto sea accesible de manera global.

## Desventajas

- Dificulta el mantenimiento de la aplicación debido a que, si bien controlamos su creacion, la instancia puede ser accedida desde cualquier lado. Un cambio simple en el singleton puede afectar el comportamiento en muchos lugares.

- La concurrencia puede ser un problema. Un sistema con muchos usuarios accediendo a la misma instancia puede ocasionar un "cuello de botella". Por ejemplo si usamos un singleton para acceder a una impresora.

- El uso indiscriminado de este patrón puede ser contraproducente cuando hablamos de Inversión de dependencia y legibilidad del código.

## Uso en casos reales.

Uno de los casos mas comunes es para asegurar que un recurso fisico tenga un unico acceso. Por ejemplo, una base de datos, un archivo o una impresora.

Este patron nos asegura que solamente se acceda al recurso por una unica instancia sin importar de donde se lo invoque.

La siguiente es una implementacion de un singleton thread safe en c#>

```csharp
// El nombre Singleton es un ejemplo, puede llamarse como se desee
public class Singleton {  
    // El constructor es privado, asegura la unicidad
    private Singleton() {}  
    // Objeto bloqueante para que funcione thread safe
    private static readonly object lock = new object();  
    // Instancia unica del objeto
    private static Singleton instance = null;  
    public static Singleton Instance {  
        get {  
            if (instance == null) {  
                // Si no existe la instancia, la creo
                lock(lock) {  
                    // con el objeto bloqueado, verifico de nuevo
                    // para asegurarme thread safes
                    if (instance == null) {  
                        instance = new Singleton();  
                    }  
                }  
            }  
            return instance;  
        }  
    }  

    // a partir de aqui, la funcionalidad de la clase.

    public void PrintInConsole(string text)
    {
        Console.WriteLine(text);
    }
}  
```
y finalmente se consume asi
```csharp
    Singleton.Instance.PrintInConsole("Ejemplo de singleton")
```
