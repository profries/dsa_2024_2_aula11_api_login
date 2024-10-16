const usuarioRepository = require('../repository/usuario_repository')

function listar() {
    return usuarioRepository.listar();
}

function inserir(usuario) {
    if(usuario && usuario.nome 
        && usuario.email && usuario.senha){
            return usuarioRepository.inserir(usuario);
    }
    else {
        throw { id: 400, msg: "Usuario sem dados corretos"}
    }
}

function buscarPorEmail(email) {
    let usuario = usuarioRepository.buscarPorEmail(email);
    if(usuario) {
        return usuario;
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

function buscarPorId(id) {
    let usuario = usuarioRepository.buscarPorId(id);
    if(usuario) {
        return usuario;
    }
    else {
        throw { id: 404, msg: "Usuario não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorEmail,
    buscarPorId
}
 