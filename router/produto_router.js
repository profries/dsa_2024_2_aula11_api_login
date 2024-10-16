const express = require('express')
const router = express.Router();
const produtoController = require('../controller/produto_controller')


router.get('/', produtoController.listar)
router.get('/:id', produtoController.buscarPorId)
router.post('/', produtoController.inserir)
router.put('/:id', produtoController.atualizar)
router.delete('/:id', produtoController.deletar)

module.exports = router