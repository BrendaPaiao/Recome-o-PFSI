const express = require('express');
const UsuarioController = require('../controllers/usuarioController');

const router =  express.Router();

// Cria uma instância da UsuarioController para acessar as funções dela (listarView, cadastrarView, etc.).
let ctrl = new UsuarioController();

//** GET(Pegar): usado quando o usuário acessa uma URL (pedir dados ou mostrar uma página).**

// Rota GET "/usuario/"
// Quando o usuário acessar /usuario (Quando o usuário acessar /usuario, pode ser porque ele clicou em um link, digitou a URL ou foi redirecionado), chama a função listarView da controller.
router.get("/", ctrl.listarView);
// Rota GET "/usuario/cadastrar".
// Quando o usuário acessar /usuario/cadastrar, chama a função cadastrarView.
// (normalmente renderiza o formulário de cadastro).
router.get("/cadastrar", ctrl.cadastrarView);
// Ainda não foi feita a função na constroller do usuário
router.post("/cadastrar", ctrl.cadastrar);

module.exports = router;