document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("btnGravar");

    btn.addEventListener("click", gravar);

    function gravar() {

        const nome = document.getElementById("Nome");
        const email = document.getElementById("Email");
        const senha = document.getElementById("Senha");
        const perfil = document.getElementById("selPerfil");
        const ativo = document.getElementById
        ("checkBAtivo");

        let listaValidacao = [];

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
            senha.style.borderColor = "#ced4da";

        if(perfil.value == "")
            listaValidacao.push(perfil);
        else 
            perfil.style.borderColor = "#ced4da";

        if(listaValidacao.length == 0) {

            let obj = {
                nome: nome.value,
                email: email.value,
                senha: senha.value,
                perfil: perfil.value,
                ativo: ativo.checked
            }

            fetch("/usuario/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(function(resposta) {
                return resposta.json();
            })
            .then(function(corpo) {
                alert(corpo.msg);
            })
        }
        else {

            alert("Preencha corretamente os campos destacados!");
            
            for(let i = 0; i < listaValidacao. length; i++) {
                listaValidacao[i].style.borderColor = "red";
            }
        }
    }
})