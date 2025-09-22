//Variável pra guardar a biblioteca express
const express = require('express');
//Importa o express-ejs-layouts, que é um middleware
//(função que roda entre req e res) usado para gerenciar layouts no EJS
const expressEjsLayout = require('express-ejs-layouts');
//Importa todas as rotas configuradas em homeRoute (que usam a ControllerHome)
const routerHome = require("./Routes/homeRoute");
const routerUsuario = require("./Routes/usuarioRoute");
//Cria uma instância (molde, classe) do servidor usando o express
const server = express();

//Aqui é feita a definição das configurações do espress(server.set), já (view engine) é uma configuração específica para determinar qual motor de templete será usado, e em seguida é o motor ecolhido (ejs). Isso significa que toda vez que for feito "res.render("exemplo"), o express ira procurar um arquivo com esse nome no dentro da pasta view/."
server.set("view engine", 'ejs');

//Libera a pasta "Public" para o usuário acessar arquivos estáticos direto no navegador
//(css, imagens, js, pdf, etc.), sem precisar de rota/controller.
//Exemplo: /style.css → busca Public/style.css
server.use(express.static('Public'));

//Define layout.ejs como o layout padrão da aplicação
//Todas as páginas terão seus conteúdos inseridos no <%- body %> do layout
//(a não ser que seja alterado na Controller)
server.set('layout', './layout.ejs');
//Ativa o middleware express-ejs-layouts para usar o layout padrão
server.use(expressEjsLayout);

//Middleware que permite ao servidor ler dados enviados por formulários HTML (<form>)
//Transforma os dados em req.body
server.use(express.urlencoded({extended: true}));

//Conecta as rotas da Home. Por estar em "/", é a página inicial.
//Tudo que começar com "/" será tratado por routerHome
server.use("/", routerHome);
//Tudo que começar com "/usuario" será tratado por routerHome
server.use("/usuario", routerUsuario);

//O método listen faz o servidor ficar escutando uma porta específica (5000 nesse caso). Assim que o servidor for iniciado, será executada a função anônima (sem nome), fazendo uma ação ser executada, como a mensagem de sucesso do servidor em funcionamento no terminal, para a confirmação de que tudo ocorreu de forma correta.
server.listen(5000, function() {
    console.log("servidor em funcionamento!");
});