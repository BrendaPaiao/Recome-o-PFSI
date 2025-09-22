
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
}

//Exportando a Model do usuário para ser usada nas controllers.
module.exports = usuarioModel;