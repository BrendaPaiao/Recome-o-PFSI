//A Model perfil é importante para as listagens dos usuários nas views

const Database = require("../utils/database.js");

class PerfilModel {

    #id;
    #descricao;

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get descricao(){
        return this.#descricao;
    }

    set descricao(value) {
        this.#descricao = value;
    }

    constructor(id, descricao) {
        this.#id = id;
        this.#descricao = descricao;
    }

    //Na etapa de fazer as listagens, será necessário fazer a função de listar aqui, para aparecer na hora de fazer o cadastro, quando for apertado o select. E também, para que junto a de usuário, possa ter todas as informações aparecendo na listagem das views.
    async listar() {
        const sql = "select * from TB_PERFIL";

        const banco = new Database();
        const rows = await banco.ExecutaComando(sql);
        let lista = [];

        for(let i = 0; i < rows.length; i++) {
            lista.push(new PerfilModel(rows[i]["PER_ID"], rows[i]["PER_DESCRICAO"]));
        }
        
        return lista;
    }
}

module.exports = PerfilModel;