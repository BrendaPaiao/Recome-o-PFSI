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

    //Na etapa de fazer as listagens, será necessário fazer a função de listar aqui, para que junto a de usuário, possa ter todas as informações aparecendo na listagem das views.
    
}