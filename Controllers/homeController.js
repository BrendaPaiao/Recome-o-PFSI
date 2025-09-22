
//Criando uma classe da Home
class HomeController {

    /*Função para renderizar a view Home
    req = objeto da requisição (dados que vêm do usuário, como URL, formulário, etc.)
    res = objeto da resposta (o que o servidor vai enviar de volta ao usuário)*/
    homeView(req, res) {
        /*Renderiza o arquivo index.ejs dentro da pasta "views"
        Esse arquivo será transformado em HTML e enviado para o usuário assim que ele acessar a rota correspondente (ex: clicando em um botão, fazendo login, digitando a URL, etc.), dependendo do tipo de página que for acessada*/
        res.render('index');
    }

}

//Exportando a classe HomeController, para ser usada em outros arquivos (ex: Routes).
module.exports = HomeController;