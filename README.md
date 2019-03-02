<h1>Introdução ao Firebase</h1>
<h2>BaaS - Backend as a Service</h2>
<p>É um pacote de soluções baseadas na nuvem.</p>
<p>Uma das principais funções de um Baas é o de facilitar a vida dos desenvolvedores.Pois ele já traz pronto partes da aplicação
como autenticação, storage entre outros.</p>
<p>Também possui uma maior escabilidade da sua infraestrutura, sem perder performance ou afetar a disponibilidade
da aplicação.</p>
<p>Ou seja em vez de codificar o backend inteiro, o desenvolvedor usa o BaaS para criar as APIs e conectá-las ás aplicações.</p>
<h2>DataBase</h2>
<p>Banco de Dados NoSQL utiliza o formato JSON</p>
<p>Cria versões de cada documento que é modificado.Salva a foto do documento com a nova versão.</p>
<p>Para retornar os documentos tem quie colocar .json no final da url</p>
<h2>Iniciando Projeto</h2>
<p>Ao clicar nas configurações do projeto, dentro do console do Firebase, ele traz os links para
configurar o Firebase no IOS, Android ou WEB na parte inferior da página tem os ícones.  </p>
<p>O Firebase pode ser instalado pelo npm( gerenciador de pacotes do Node ) ou pelo bower( gerenciador de pacotes front-end )</p>
<p>Exemplo com NPM: npm install firebase --save, o --save vai adicionar uma depêndencia no arquivo package.json</p>
<h3>Criando servidor HTTP</h3>
<p>npm install http-server -g</p>
<p>Este comando instala um pequeno servidor HTTP apenas para páginas estáticas e o comando abaixo inicia o servidor.</p>
<p>http-server -c1 = inicializa o servidor</p>
<p>Também será criado duas pastas uma css para os estilos com um arquivo style.css e uma pasta
js para os scripts com um arquivo app.js. Onde deve ser copiado o código JavaScript do Firebase</p>
<p>Para dar uma apârencia melhor também será adicionado um link do bootstrap na index</p>
<h2>Real-Time Database</h2>
<p>Tudo que está na tela vai pro Javascript e vai para o banco de dados isto é chamdo de Three Way Data Binding</p>
<p>O Firebase trabalha com sockets, através de um aperto de mão a aplicação fica sempre conectada.</p>
<p>Um arquivo real-time-database.html e um arquivo real-time-database.js devem ser criados. No arquivo html deve ser feito
um script com um link para o arquivo real-time-database.js</p>
<p>O arquivo .js terá a função de pegar os dados via Javascript puro através do document.getElementById</p>
<p>O arquivo real-time-database.js um evento para o click do botão, que auando for disparado irá gravar os dados
no database do Firebase.E outra função para atualizar a lista de usuários.</p>
<h2>Autenticação no Firebase e Segurança</h2>
<p>É possível permitir que apenas um domínio específico altere seu databse por exemplo, essa é uma das opções de segurança do Firebase</p>
<p>Autenticação via conta do Google, Facebook, GitHub com configuração simples e fácil de integrar com qualquer aplicação</p>
<p>Arquivo authentication.js tem os códigos de autenticação</p>
<h2>Storage no Firebase</h2>
<p></p>