const usuarioService = require('../service/usuario_service')

//Listar Usuarios
function listar(req, res) {
    let email = req.query.email;
    //Se não tiver email no query, é listar
    if(!email) {
        res.json(usuarioService.listar())
    }
    //Se tiver email no query, é buscarPorEmail
    else {
        try {
            res.json(usuarioService.buscarPorEmail(email));
        } catch(err) {
            res.status(err.id).json(err)
        }
    }

}

//Inserir
function inserir(req, res) {
    const usuario = req.body;
    try{
      const usuarioInserido = usuarioService.inserir(usuario);
      res.status(201).json(usuarioInserido)
    }
    catch(err){
      res.status(err.id).json(err)
    }
}

//Buscar por id
function buscarPorId(req, res) {
    // O + antes converte o valor para number (na URL vem como string)
    const id = +req.params.id;
    try {
      res.json(usuarioService.buscarPorId(id));
    } catch(err) {
      res.status(err.id).json(err)
    }
  }

module.exports = {
    listar,
    inserir,
    buscarPorId
}
 