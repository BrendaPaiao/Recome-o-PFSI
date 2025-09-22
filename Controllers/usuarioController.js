
class UsuarioController {

    //Função para renderizar a view de listar usuários
    listarView(req, res) {
        //Renderiza o arquivo listar.ejs que se encontra dentro da dentro da pasta usuario que será criada. usuario(pasta)/lsitar(arquivo.ejs)
        res.render('usuario/listar');
    }

    //Função para renderizar a view de cadastrar usuários
    cadastrarView(req, res) {

        res.render('usuario/cadastrar');
    }
}

module.exports = UsuarioController;