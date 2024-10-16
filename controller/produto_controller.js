const produtoService = require('../service/produto_service')

//Listar Produtos
function listar(req, res) {
    res.json(produtoService.listar())
}

//Buscar por id
function buscarPorId(req, res) {
  // O + antes converte o valor para number (na URL vem como string)
  const id = +req.params.id;
  try {
    res.json(produtoService.buscarPorId(id));
  } catch(err) {
    res.status(err.id).json(err)
  }
}

//Inserir
function inserir(req, res) {
    const produto = req.body;
    try{
      const produtoInserido = produtoService.inserir(produto);
      res.status(201).json(produtoInserido)
    }
    catch(err){
      res.status(err.id).json(err)
    }
}

//Atualizar
function atualizar (req, res) {
  const id = +req.params.id;
  const produto = req.body;
  try{
    const produtoAtualizado = produtoService.atualizar(id, produto);
    res.json(produtoAtualizado)
  }
  catch(err){
    res.status(err.id).json(err)
  }
}

//Deletar
function deletar(req, res) {
  const id = +req.params.id;
  try {
    res.json(produtoService.deletar(id));
  } catch(err) {
    res.status(err.id).json(err)
  }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}