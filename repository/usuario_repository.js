let listaUsuarios = [
    {
        "nome": "admin",
        "email": "admin@mail.com",
        "senha": "12345",
        "id": 1
    }
];
let idGerador = 2;

function listar() {
    return listaUsuarios.map(usuario => removerCampoSenha(usuario));
}

function inserir(usuario) {
    //Se não tiver algum dado obrigatório, não faz nada e retorna undefined
    if(!usuario || !usuario.nome || !usuario.email 
        || !usuario.senha) {
            return;
    }
    usuario.id = idGerador++;
    listaUsuarios.push(usuario);
    return usuario;
}

function buscarPorEmail(email) {
    return listaUsuarios.find((usuario) => {
        return usuario.email === email
    })
}

function buscarPorId(id) {
    //Busca usuário
    let usuario = (listaUsuarios.find(
        function(usuario) {
            return (usuario.id == id);        
        }
    ));
    //Se encontrar usuário, retira a senha
    if(usuario) {
        return removerCampoSenha(usuario)
    }
}

//Função que remove campo senha (retorna usuário sem senha)
function removerCampoSenha(usuario) {
    {
        return {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorEmail,
    buscarPorId
}
 