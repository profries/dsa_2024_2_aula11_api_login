const express = require('express')
const router = express.Router();
const usuarioController = require('../controller/usuario_controller')

router.get('/', usuarioController.listar)
router.post('/', usuarioController.inserir)
router.get('/:id', usuarioController.buscarPorId)

module.exports = router;