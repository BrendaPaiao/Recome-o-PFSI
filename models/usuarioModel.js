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

    //O constructor é chamado toda vez que um novo objeto com o UsuarioModel.
    constructor (id, nome, email, senha, ativo, perfilId) {

        //Aqui ele recebe os parâmetros e inicializa os atributos privados com os valores atribuidos
        this.#id = id
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#ativo = ativo;
        this.#perfilId = perfilId;
    }

    async listar() {
        const sql = "select * from TB_USUARIO";

        const banco = new Database();

        const rows = await banco.ExecutaComando(sql);

        let listaUsuModel = []

        for(let i = 0; i<rows.length; i++) {
            let usuario = new UsuarioModel();

            usuario.id = rows[i]["USU_ID"];
            usuario.nome = rows[i]["USU_NOME"];
            usuario.email = rows[i]["USU_EMAIL"];
            usuario.ativo = rows[i]["USU_ATIVO"];
            usuario.perfilId = rows[i]["PER_ID"];

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
 
}

//Exportando a Model do usuário para ser usada nas controllers.
module.exports = UsuarioModel;