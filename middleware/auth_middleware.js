const loginService = require("../service/login_service")

function verificarAcesso(req, res, next) {    
    try {
        const token = req.get("token");
        loginService.validarToken(token);
        next();
    } catch(err) {
        res.status(err.id).json(err);
    }

}
module.exports = { 
    verificarAcesso
}