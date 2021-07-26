# Encapsulación de propiedades
 
Durante nuestro trabajo nos encontraremos, habitualmente, en situaciones donde debamos decidir entre: escalabilidad, performance o claridad en nuestro código. El uso de las propiedades internas de una clase es uno de estos momentos en los cuales debemos tomar estas dificiles deciciones.

Existen dos formas de trabajar con las propiedades internas de las clases. De forma indirecta y de forma directa
 
## Forma indirecta.

La primera forma es acceder a las propiedades de manera indirecta mediante encapsulación ( geter y seter ). Básicamente cada propiedad tiene un método que establece el valor y otro que lo devuelve.

```cs
public class RangeValidator {
    private int _minimun;
    public int GetMinimun(){
        return _minimun;
    }
    public void SetMinimun(int argument){
        _minimun = minimun;
    }

    private int _maximun;
    public int GetMaximun(){
        return _maximun;
    }
    public void SetMaximun(int argument){
        _maximun = maximun;
    }

    public bool isInRange(int currentValue) {
        return currentValue >= _miniun && currentValue =< _maximun
    }
}
```

Los beneficios que tenemos con esta forma de trabajo son los siguientes:
 
- Podemos establecer valores por defecto sin necesidad de establecer los valores al momento de crear la clase ( lazy loading ). De esta forma evitamos consumir memoria de manera innecesaria y evitar tiempo de cómputo al momento de crear la clase.

```cs
public class RangeValidator {
    // Ningun valor es guardado en memoria al instanciar la clase
    // Permite el uso de lazy loading.
    private int _minimun;
    public int GetMinimun(){
        if(_minimun == 0)
            return 100; // permite valores por defecto :)

        return _minimun;
    }
 
    // Esto se computa al instanciar la clase.
    // Consume memoria aun que no lo usemos nunca.
    public int _maximun = 100;
}
```
 
- Permite sobreescribir los métodos seter y geter mediante la herencia de clases. De esta forma podemos reutilizar una clase que, por ejemplo, valida que la edad sea mayor a cero y convertirla en una clase que nos valide si una persona es mayor de 18 años.

```cs
// Esta clase valida la edad, el minimo es cero
public class AgeValidator {
    protected int _minimunAge;

    public virtual int GetMinimunAge(){
        return _minimunAge;
    }
}

// Esta clase valida que una persona sea adulta, el minimo es 18
public class AdultValidator : RangeValidator {
    public override int GetMinimunAge(){
        if(_minimunAge == 0)
        {
            return 18;
        }

        return _minimun;
    }
}
```

## Forma directa.

Al contrario de lo que vimos en los ejemplos anteriores, las propiedades pueden accederse de forma directa sin la necesidad de crear un geter o seter. Si bien, en comparación con lo visto anteriormente, esto no parece una buena idea, dependiendo el momento y lugar donde lo utilicemos reduce la complejidad de nuestro código ya que elimina métodos que nunca utilizaremos.

```cs
public class Light {
    public boolean _isOn;
   
    public void Switch() {
        if(_isOn) 
        {
            _isOn = false:
        }
        else 
        {
            _isOn = true;
        }
    }
}
```
