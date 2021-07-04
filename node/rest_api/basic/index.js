const express = require('express') // Agregamos la referencia de express
const acciones = require('./acciones') // En este file es donde estan nuestras funciones

// Crea un servidor de Express
const app = express();

// Activa el interprete de body
app.use(express.json());

// Registro de cada uno de los verbos que vamos a trabajar
// con su correspondiente
app.get('/', acciones.verboGet)
app.post('/', acciones.verboPost);
app.put('/', acciones.verboPut);
app.delete('/', acciones.verboDelete);

// Aqui iniciamos el servicio en el puerto 3000
const port = 3000
app.listen(port, function() {
    console.log('Now listen on port ' + port);
});