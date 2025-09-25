const PerfilModel = require("../models/perfilModel");
const UsuarioModel = require("../models/usuarioModel.js");

class UsuarioController {

    //Função para renderizar a view de listar usuários
    async listarView(req, res) {
        //Renderiza o arquivo listar.ejs que se encontra dentro da dentro da pasta usuario que será criada. usuario(pasta)/lsitar(arquivo.ejs)
        res.render('usuario/listar');
    }

    //Função que serve apenas para renderizar a view de cadastrar usuários
    async cadastrarView(req, res) {
        //Cria instância da PerfilModel e utiliza sua função listar() para fazer a listagem de usuário na view.
        let perfil = new PerfilModel();
        //Ainda não existe a função listar
        let lista = await perfil.listar();
        res.render('usuario/cadastrar', {lista: lista});
    }

    //Agora que a view do cadastrar está disponível para ser visualizada, fazemos a parte do cadastro funcionar no backend
    async cadastrar(req, res) {
        console.log(req.body);

        //Como estará no corpo do formulário de cadastro. Exemplo: "<input type="text" name="nome">"
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = req.body.senha; 
        let ativo = req.body.ativo;
        let perfil = req.body.perfil;

        if(nome && email && senha && perfil) {

            let usuario = new UsuarioModel(0, nome, email, senha, ativo, perfil);

            let result = await usuario.cadastrar();

            if(result) {
                res.send({ok: true, msg: "Usuário cadastrado com sucesso!"});
            }
            else {
                res.send({ok: false, msg: "Erro ao inserir usuário no banco de dados"});
            }
        }
        else {
            res.send({ok: false, msg: "Faltam informações para inserir o usuário!"});
        }
    }
}

module.exports = UsuarioController;