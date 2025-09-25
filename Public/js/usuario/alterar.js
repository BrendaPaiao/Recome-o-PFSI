document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("btnGravar");

    btn.addEventListener("click", gravar);

    function gravar() {
        
        //faz a leitura dos campos;
        const id = document.getElementById("id");
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const perfil = document.getElementById("selPerfil");
        const ativo = document.getElementById("checkBAtivo");

        let listaValidacao = [];
        //validação simples, apenas confere o preenchimento
        if(nome.value == "")
            listaValidacao.push(nome);
        else
            nome.style.borderColor = "#ced4da";

        if(email.value == "")
            listaValidacao.push(email);
        else
            email.style.borderColor = "#ced4da";

        if(senha.value == "")
            listaValidacao.push(senha);
        else
            senha.style.borderColor = "#ced4da"

        if(perfil.value == "0")
            listaValidacao.push(perfil);
        else
            perfil.style.borderColor = "#ced4da";

        if(listaValidacao.length == 0) {
            //prosseguir com o cadastro;

            //montar objeto generico com os dados do usuário;
            //esse objeto será transformado em string e enviado ao servidor;
            let obj = {
                id: id.value,
                nome: nome.value,
                email: email.value,
                senha: senha.value,
                perfil: perfil.value,
                ativo: ativo.checked
            }

            fetch("/usuario/alterar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(function(resposta) {//recebe a resposta como retorno do fetch
                return resposta.json(); //converte o corpo da resposta para json (gera uma nova promise)
            })
            .then(function(corpo) {//recebe o corpo em formato de obj genérico
                alert(corpo.msg);
            })
        }
        else {
            //avisa o usuário que não está preenchido corretamente;
            alert("Preencha corretamente os campos destacados!");
            //destaca os campos inválidos
            for(let i = 0; i< listaValidacao.length; i++) {
                listaValidacao[i].style.borderColor = "red";
            }
        }

    }

})