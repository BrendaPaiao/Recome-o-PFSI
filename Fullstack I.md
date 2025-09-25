# Fullstack I





##### Criando a minha própria ordem de criação do MVC:



Dúvidas que precisam ser mortas por matarem muito tempo na prova:



* No botão (link ou form) para ir ao cadastro → se coloca a rota (URL) que aponta para a controller da view.
* Ex: <a href="/usuario/cadastrar">Cadastrar</a>



* No fetch → também se usa a rota (URL) que aponta para a controller (nunca o caminho da view).
* Ex: fetch("/usuario/cadastrar", { method: "POST", ... })



* Na controller → é onde você coloca o caminho da view (pasta/arquivo) para o res.render.
* Ex: res.render("usuario/cadastrar") // views/usuario/cadastrar.ejs

* O deletar é feito na listar.js e adicionado o botão no listar.ejs


Início de tudo: Configurar o server.js.



Depois para ações mais rotineiras:



1. Models: Aqui é onde todos os dados, banco de dados e métodos, são configurados.
2. Controllers: São as mediadoras entre as models e views, pegando os dados específicos para exibi-los na view, com funções criadas nas models
3. Routes: Aqui é controlado as rotas que os usuários acessam.
4. Views(ejs):
5. Public/JS:

...



Passo a passo seguido:



1. Como as models ainda não foram utilizadas, vamos configurar a controllerHome.
   \*Não esquecer de exportar a classes das controlles\*
2. Em seguida vamos para a Routes.
   \*Sempre lembrar de configurar ou conferir se está configurado o express, assim como no server.js\*. Em seguida, adicionamos as controllers que serão necessárias para a visualização das requisições dos usuários. \*As rotas devem sempre ser adicionadas em baixo da variável express e abaixo da variável server\*.
3. Agora, que já temos uma ControllerHome, e uma RouteHome, falta criamos uma view chamada "index.js", para ser possível o de visualizar. \*Já cometi o erro de esquecer de configurar a rota no server, então é importante lembrar disso: Controller, route, view e server!".
   

Criação de usuários:



1. Começando novamente pela criação de uma controller. Esquecer de exportar a classe no final. Sempre que tem View na frente, exemplo: "cadastrarView", é apenas a página de visualização.
2. Agora vamos para a criação da rota do usuário. Não esquecer de integrar o express no início do arquivo. Depois de fazer tudo, colocar a rota para rodar no server. \*\*No server a importação para achar as rotas utiliza apenas 1 ponto, exemplo: "./Routes/..."\*\*.
3. Criação da pasta usuário para ter tudo relacionado ao usuário separado e organizado, como o cadastro e o listar.











Erros registrados:
1. As pastas devem ter todas as letras minúsculas.
2. Erro de sintaxe na usuárioRoute na exportação.
3. Erro ao iníciar por falta da instalação do myslq2.
4. O botão de cadastrar não estava funcionando. Causa: Esqueci de importar o arquivo do JS na view cadastrar.
5. Falta do "server.use(express.json());" no server.js (deve ficar em cima das rotas, mas nesse caso, nem estava no arquivo server.js).
6. Usuário existente, mas sistema informando que não existe na hora da exclusão. O erro estava no:
<td>
   <button data-id="<%= usuarios[i].usuarioId %>" class="btn btn-danger btnExcluir"><i class="fas fa-trash"></i></button>
</td>". Na usuarioModel não é usuarioId, mas sim apenas id. E também na usuarioRoute, em que estava sem o "/", na frente da rota excluir. Na usuarioModel a constante "sql", estava escrita errado.
