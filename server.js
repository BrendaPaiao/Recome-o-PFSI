//Variável pra guardar a biblioteca express
const express = require('express');
//Cria uma instância (molde, classe) do servidor usando o express
const server = express();

//Aqui é feita a definição das configurações do espress(server.set), já (view engine) é uma configuração específica para determinar qual motor de templete será usado, e em seguida é o motor ecolhido (ejs). Isso significa que toda vez que for feito "res.render("exemplo"), o express ira procurar um arquivo com esse nome no dentro da pasta view/."
server.set("view engine", 'ejs');


//O método listen faz o servidor ficar escutando uma porta específica (5000 nesse caso). Assim que o servidor for iniciado, será executada a função anônima (sem nome), fazendo uma ação ser executada, como a mensagem de sucesso do servidor em funcionamento no terminal, para a confirmação de que tudo ocorreu de forma correta.
server.listen(5000, function() {
    console.log("servidor em funcionamento!");
});