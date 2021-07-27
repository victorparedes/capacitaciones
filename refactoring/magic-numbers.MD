 # Números mágicos!
 
El caso de refactoring llamado "números mágicos" hace referencia a la eliminación de valores fijos requeridos en nuestro código que no dan ninguna pista de lo que representan.
 
Si tenemos una clase que calcula el perímetro de un círculo sabemos que debemos utilizar la fórmula PI * Radio. Entonces, el valor de PI es constante ( 3.1416 ) y sería más claro que lo pongamos en una constante.
 
Por ejemplo:

### Original
```cs
public class Circulo {
   
    public void CalcularPerimetro(int radio) 
    {
        return 3.1416 * radio;
    }
}
```

### Corrección
```cs
public class Circulo {
    public const double _PI = 3.1416;
    public void CalcularPerimetro(int radio) 
    {
        return _PI * radio;
    }
}
```

Otro ejemplo:

### Original
```cs
public class DaysConversor {

    public double ToSeconds(int days) 
    {
        return days * 86400;
    }

    public double ToMinute(int days) 
    {
        return seconds * 1440;
    }

    public double ToHour(int days) 
    {
        return seconds * 24
    }
}
```

### Corrección
```cs
public class DaysConversor {
    private const int _SECONDS_IN_ONE_DAY = 86400;
    private const int _MINUTES_IN_ONE_DAY = 1440;
    private const int _HOURS_IN_ONE_DAY = 24;

    public double ToSeconds(int days) 
    {
        return days * _SECONDS_IN_ONE_DAY;
    }

    public double ToMinute(int days) 
    {
        return seconds * _MINUTES_IN_ONE_DAY;
    }

    public double ToHour(int days) 
    {
        return seconds * _HOURS_IN_ONE_DAY
    }
}
```
## El caso de los literales mágicos!
 
De la misma forma que existen números mágicos también existen literales mágicos, estos valores de tipo string también nos pueden causar problemas cuando se colocan directamente en el código.
 
Por ejemplo, una clase que ejecuta un POST a varias URLs diferentes en la misma clase se veria similar a al siguiente se veria de la siguiente forma.

### Original
```cs
public class ApiComunicator {

    public void Post(Client cliente) 
    {
        clientEndPoint.Post("http://url_to_client", cliente);
    }

    public void Post(Product producto) 
    {
        productEndPoint.Post("http://url_to_product", producto);
    }
}
```

### Corrección
```cs
public class ApiComunicator {
    public const string _CLIENT_ENDPOINT = "http://url_to_client";
    public const string _PRODUCT_ENDPOINT = "http://url_to_product";
    public void Post(Client cliente) 
    {
        clientEndPoint.Post(_CLIENT_ENDPOINT, cliente);
    }

    public void Post(Product producto) 
    {
        productEndPoint.Post(_PRODUCT_ENDPOINT, producto);
    }
}
```