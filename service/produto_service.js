const produtoRepository = require('../repository/produto_repository')

function listar() {
    return produtoRepository.listar();
}

function inserir(produto) {
    if(produto && produto.nome 
        && produto.categoria && produto.preco){
            return produtoRepository.inserir(produto);
    }
    else {
        throw { id: 400, msg: "Produto sem dados corretos"}
    }
}

function buscarPorId(id) {
    let produto = produtoRepository.buscarPorId(id);
    if(produto) {
        return produto;
    }
    else {
        throw { id: 404, msg: "Produto não encontrado!" }
    }
}

function atualizar(id, produto) {
    if(produto && produto.nome && produto.categoria && produto.preco) {
        const produtoAtualizado = produtoRepository.atualizar(id, produto);
        if(produtoAtualizado) {
            return produtoAtualizado;
        }        
        else {
            throw {id:404, msg: "Produto não encontrado"};
        }
    }
    else {
        throw {id:400, msg: "Produto sem dados corretos"};
    }
}

function deletar(id) {
    let produto = produtoRepository.deletar(id);
    if(produto) {
        return produto;
    }
    else {
        throw { id: 404, msg: "Produto não encontrado!" }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}