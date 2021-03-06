# Extracción de métodos
 
La extracción de métodos es el refactoring más común que hacemos día a día, el objetivo es reducir el tamaño de los métodos de nuestras clases para lograr hacerlos más entendibles.
Este refactoring, por lo general, no tiene mejoras de performance o escalabilidad si no que agrega claridad y legibilidad a lo que escribimos.
 
## Reducción de lógica de los condicionales
 
Uno de los casos que más claridad de código nos genera es extraer en métodos los condicionales ( IF ). Esto permite que la complejidad de una condición pueda ser encapsulada y simplificada con una simple frase.

### Original
```cs
public class MessageSender {
    private _messageBroker = new MessageBroker();
    private _receptors = new Receptors();

    public void Send(string receptor, string title, string body) 
    {
        if(string.IsNullOrEmpty(receptor) ||
            string.IsNullOrEmpty(title) ||
            string.IsNullOrEmpty(body) )
        {
            throw new Exception('Invalid message');
        }

        if(_receptors == null || (_receptors != null && !_receptors.IsValid(receptor)))
        {
            throw new Exception('error with receptors');
        }

        if(_messageBroker != null || (_messageBroker != null && !_messageBroker.IsOnline()))
        {
            throw new Exception('error with message broker');
        }
        
        _messageBroker.Send(receptor, title, body);
    }
}
```

### Correccion
```cs
public class MessageSender {
    private _messageBroker = new MessageBroker();
    private _receptors = new Receptors();

    public void Send(string receptor, string title, string body) 
    {
        if(MessageHaveErrors(receptor, title, body))
            throw new Exception('Invalid message');

        if(ReceptorHaveErrors(receptor))
            throw new Exception('error with receptors');

        if(MessageBrokerHaveErrors())
            throw new Exception('error with message broker');
        
        _messageBroker.Send(receptor, title, body);
    }

    private boolean MessageHaveErrors(string receptor, string title, string body)
    {
        return string.IsNullOrEmpty(receptor) ||
            string.IsNullOrEmpty(title) ||
            string.IsNullOrEmpty(body));
    }

    private boolean ReceptorHaveErrors(string receptor)
    {
        return _receptors == null || (_receptors != null && !_receptors.IsValid(receptor)));
    }

    private boolean MessageBrokerHaveErrors()
    {
        return _messageBroker != null || (_messageBroker != null && !_messageBroker.IsOnline());
    }
}
```

Otra forma de realizar este tipo de refactoring, sin la necesidad de extraer la lógica a un método, es utilizar variables explicativas. Las variables explicativas son variables comunes y silvestres autodescriptivas que almacenan la complejidad del IF.

```cs
public class MessageSender {
    private _messageBroker = new MessageBroker();
    private _receptors = new Receptors();

    public void Send(string receptor, string title, string body) 
    {
        // Las variables explicativas son mas faciles de leer
        // cuando la logica es mas simple.
        bool messageHaveErrors = string.IsNullOrEmpty(receptor) ||
            string.IsNullOrEmpty(title) ||
            string.IsNullOrEmpty(body));

        if(messageHaveErrors)
            throw new Exception('Invalid message');

        bool receptorHaveErros = _receptors == null || 
            (_receptors != null && !_receptors.IsValid(receptor)));

        if(receptorHaveErros)
            throw new Exception('error with receptors');

        bool messageBrokerHaveErrors = _messageBroker != null || 
            (_messageBroker != null && !_messageBroker.IsOnline())

        if(messageBrokerHaveErrors)
            throw new Exception('error with message broker');
        
        _messageBroker.Send(receptor, title, body);
    }
}
```

## Composicion de metodos

La composición de métodos permite a personas sin conocimiento leer el código de nuestras aplicaciones. El objetivo es, básicamente, que los métodos se compongan por métodos más pequeños, con nombres autodescriptivos. Esto permite que nuestro código sea muy parecida a la lectura de un libro tipo "elige tu aventura".

```cs
// Clase original.
public class MessageSender {
    public void DisplayPerson(string name, List<string> social) 
    {
        DisplayPersonName(name);
        
        foreach(var item in social)
        {
            console.log('Contact to me in... ' + item);            
        }
    }

    private void DisplayPersonName(name)
    {
        console.log('Hi! My name is ' + name);
    }
}
```

```cs
// Clase refactorizada
public class MessageSender {
    public void DisplayPerson(string name, List<string> social) 
    {
        DisplayPersonName(name);
        DisplayPersonSocialNetworks(social);
    }

    private void DisplayPersonName(string name)
    {
        console.log('Hi! My name is ' + name);
    }

    private void DisplayPersonSocialNetworks(List<string> social)
    {
        foreach(var item in social)
        {
            console.log('Contact to me in... ' + item);            
        }
    }
}
```







