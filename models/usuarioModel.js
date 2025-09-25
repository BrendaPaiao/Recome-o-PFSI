const Database = require('../utils/database.js');
//Classe que representa a entidade usuário. 
//Normalmente usada para mapear os dados do usuário e se comunicar com o banco (via SQL).
class UsuarioModel {

    //Atributos privados (só podem ser acessados por métodos da própria classe como os getters e setters).
    #id;
    #nome;
    #email;
    #senha;
    #ativo;
    #perfilId;
    #perfilDescricao;

    //Getter (get = pegar): retorna o valor do atributo privado (nesse caso, o ID do usuário).
    get id() {
        return this.#id;
    }

    //Setter (set = definir): recebe um valor e atribui ao atributo privado (ID).
    set id(value) {
        this.#id = value;
    }

    get nome() {
        return this.#nome;
    }

    set nome(value) {
        this.#nome = value;
    }
    
    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get senha() {
        return this.#senha;
    }

    set senha(value) {
        this.#senha = value;
    }

    get ativo() {
        return this.#ativo;
    }

    set ativo(value) {
        this.#ativo = value;
    }

    get perfilId() {
        return this.#perfilId;
    }

    set perfilId(value) {
        this.#perfilId = value;
    }

    get perfilDescricao() {
        return this.#perfilDescricao;
    }

    set perfilDescricao(value) {
        this.#perfilDescricao = value;
    }

    //O constructor é chamado toda vez que um novo objeto com o UsuarioModel.
    constructor (id, nome, email, senha, ativo, perfilId, perfilDescricao) {

        //Aqui ele recebe os parâmetros e inicializa os atributos privados com os valores atribuidos
        this.#id = id
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#ativo = ativo;
        this.#perfilId = perfilId;
        this.#perfilDescricao = perfilDescricao;
    }

    async listar() {
        const sql = "SELECT * FROM TB_USUARIO U INNER JOIN TB_PERFIL P ON U.PER_ID = P.PER_ID";

        const banco = new Database();

        const rows = await banco.ExecutaComando(sql);

        let listaUsuModel = []

        for(let i = 0; i<rows.length; i++) {
            let usuario = new UsuarioModel();

            usuario.id = rows[i]["USU_ID"];
            usuario.nome = rows[i]["USU_NOME"];
            usuario.email = rows[i]["USU_EMAIL"];
            //Adicionado para o login
            if(rows[i]["USU_ATIVO"] == 1)
                usuario.ativo = "Sim"
            else
                usuario.ativo = "Não"
            usuario.perfilId = rows[i]["PER_ID"];
            usuario.perfilDescricao = rows[i]["PER_DESCRICAO"];

            listaUsuModel.push(usuario);
        }

        return listaUsuModel;
    }

    async cadastrar () {
        const sql = "insert into TB_USUARIO (USU_NOME, USU_EMAIL, USU_ATIVO, USU_SENHA, PER_ID) VALUES (?, ?, ?, ?, ?)";

        const valores = [this.#nome, this.#email, this.#ativo, this.#senha, this.#perfilId];

        const banco = new Database();
        const result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    //Alteração
    async alterar() {
        const sql = "UPDATE TB_USUARIO SET USU_NOME = ?, USU_EMAIL = ?, USU_SENHA = ?, USU_ATIVO = ?, PER_ID = ? WHERE USU_ID = ?";
        
        const valores = [this.#nome, this.#email, this.#senha, this.#ativo, this.#perfilId, this.#id];

        let banco = new Database();
        const result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
 
    async excluir(id) {
        const sql = "delete from TB_USUARIO where USU_ID = ?";
        const valores = [id];

        let banco = new Database();
        const result = await banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async validar(email, senha) {

        let sql = `select * from TB_USUARIO where 
        USU_EMAIL= ? and USU_SENHA = ? and USU_ATIVO = 1`; //Usuário deve estar ativo
        let valores = [email, senha];
        let banco = new Database();

        let rows = await banco.ExecutaComando(sql, valores);

        if(rows.length > 0) {
            let row = rows[0];

            return new UsuarioModel(row["USU_ID"], row["USU_NOME"], 
            row["USU_EMAIL"], row["USU_SENHA"], row["USU_ATIVO"], row["PER_ID"])
        }

        return null;
    }

    async buscarPorId(id) {
        const sql = "SELECT * FROM TB_USUARIO WHERE USU_ID = ?";
        const valores = [id];

        let banco = new Database();
        const rows = await banco.ExecutaComando(sql, valores);

        if(rows.length > 0) {
            let usuario = new UsuarioModel(rows[0]["USU_ID"], rows[0]["USU_NOME"], rows[0]["USU_EMAIL"], rows[0]["USU_SENHA"], rows[0]["USU_ATIVO"], rows[0]["PER_ID"]);
            return usuario;
        }

        return null;
    }
}

//Exportando a Model do usuário para ser usada nas controllers.
module.exports = UsuarioModel;