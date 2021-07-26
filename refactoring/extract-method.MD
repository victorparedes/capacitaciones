# Extraccion de metodos

La extraccion de metodos es el refactoring mas comun que hacemos dia a dia, el objetivo es reducir el tamaño de los metodos de nuestras clases para lograr hacerlos mas entendibles.
Este refactoring, por lo general, no tiene mejoras de performance o escalabilidad si no que agrega claridad y legibilidad a lo que escribimos.


## Reduccion de logica de los condicionales

Uno de los casos que mas claridad de codigo nos genera es extraer en metodos los condicionales ( IF ). Esto permite que la complejidad de una condicion pueda ser resumida en una frase corta.

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