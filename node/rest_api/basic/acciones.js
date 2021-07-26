
const verboGet = function(req, res) {
    const retorno = {
        verbo: "He devuelto alguno de mis datos.",
        parametroRecibido: req.body
    }
    res.send(retorno)
}

const verboPost = function(req, res) {
    const retorno = {
        mensaje: "He actualizado alguno de mis datos.",
        parametroRecibido: req.body
    }
    res.send(retorno)
}

const verboPut = function(req, res) {
    const retorno = {
        mensaje: "He creado algo nuevo en mis datos.",
        parametroRecibido: req.body
    }
    res.send(retorno)
}

const verboDelete = function(req, res) {
    const retorno = {
        mensaje: "He borrado alguno de mis datos.",
        parametroRecibido: req.body
    }
    res.send(retorno)
}

module.exports = {
    verboGet,
    verboPost,
    verboPut,
    verboDelete
}