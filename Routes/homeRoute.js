const express = require("express");
//Importa a classe HomeController
const HomeController = require("../Controllers/homeController");

//Cria um "sub-servidor" de rotas usando o Router do Express.
//Esse router vai gerenciar apenas as rotas relacionadas à Home.
const router = express.Router();

// Cria uma nova instância da classe HomeController.
// Assim podemos usar os métodos (funções) que estão dentro dela.
const homeController = new HomeController();
// Define uma rota GET no caminho "/".
// Quando o usuário acessar a raiz do site (ex: http://localhost:5000/),
// o método homeView do HomeController será chamado, que renderiza a view "index.ejs".
router.get("/", homeController.homeView);

// Exporta o router, para que o server.js possa usar essas rotas.
module.exports = router;