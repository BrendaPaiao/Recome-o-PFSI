const PerfilModel = require("../models/perfilModel");
const UsuarioModel = require("../models/usuarioModel.js");

class UsuarioController {

    //Função para renderizar a view de listar usuários
    async listarView(req, res) {
        //Renderiza o arquivo listar.ejs que se encontra dentro da dentro da pasta usuario que será criada. usuario(pasta)/listar(arquivo.ejs)
        let usuario = new UsuarioModel();
        let lista = await usuario.listar();
        // Está dentro do for() da view de listar usuários
        res.render('usuario/listar', {usuarios: lista});
        // OBS: A controller verifica a view, encontra a lista dentro do for() com o nome "usuarios", e considera ela como a lista que chegou dentro dela através da instância (UsuarioModel). Por isso é {usuarios: lista}.
    }

    //Função que serve apenas para renderizar a view de cadastrar usuários
    async cadastrarView(req, res) {
        //Cria instância da PerfilModel e utiliza sua função listar() para fazer a listagem de usuário na view.
        let perfil = new PerfilModel();
        //Ainda não existe a função listar
        let lista = await perfil.listar();
        // Essa é a lista usada no cadastrar.ejs no select do perfil. Sempre encontrada dentro de um for().
        res.render('usuario/cadastrar', {lista: lista});
    }

    //Agora que a view do cadastrar está disponível para ser visualizada, fazemos a parte do cadastro funcionar no backend
    async cadastrar(req, res) {
        console.log(req.body);

        //Como estará no corpo do formulário de cadastro. Exemplo: "<input type="text" id="nome">"
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

    async excluir(req, res) {
        let ok; //Tipo o status (OK, NOT FOUND... etc).
        let msg;

        let id = req.body.id;

        if(id) {
            let usuario = new UsuarioModel();
            const result = await usuario.excluir(id);

            if(result) {
                ok = true;
                msg = "Usuário excluído com sucesso!";
            }
            else {
                ok = false;
                msg = "Erro ao excluir o usuário do banco!";
            }
        }
        else {
            ok = false;
            msg = "ID não encontrado para exclusão!";
        }

        res. send({ok: ok, msg: msg});
    }
}

module.exports = UsuarioController;