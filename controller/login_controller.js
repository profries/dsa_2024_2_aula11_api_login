const loginService = require("../service/login_service")

function realizarLogin(req, res) {
    const usuarioLogin = req.body;
    try {
        const token = loginService.verificarLogin(usuarioLogin);
        res.status(201).json({token: token})
    } catch(err) {
        res.status(err.id).json(err);
    }
}

module.exports = {
    realizarLogin
}