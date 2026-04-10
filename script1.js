// let filmes = []; -> Array que armazena a lista de objetos (os filmes)
let filmes = [];

/* DOCUMENT: Representa a sua página HTML inteira dentro do JavaScript. 
   É através dele que o JS consegue "enxergar" e mexer nos elementos da tela.
*/

document.getElementById("btnCadastrar")
    .addEventListener("click", cadastrarFilme);

document.getElementById("btnFiltrarClassificacao")
    .addEventListener("click", filtrarClassificacao);

document.getElementById("btnFiltrarAno")
    .addEventListener("click", filtrarAno);

function cadastrarFilme() {
    /* GETELEMENTBYID: É um método que busca um elemento específico no HTML pelo ID dele.
       VALUE: Pega exatamente o que o usuário DIGITOU dentro daquele campo de entrada (input).
    */
    let titulo = document.getElementById("titulo").value;
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("classificacao").value;

    if (titulo === "" || ano === "" || classificacao === "") {
        alert("Preencha todos os campos!!!");
        return;
    }

    let filme = {
        titulo: titulo,
        ano: Number(ano),
        classificacao: classificacao
    };

    filmes.push(filme);
    limparCampos();
    exibirFilmes(filmes);
}

function exibirFilmes(lista) {
    /* JOIN: Pega todos os itens de uma lista (array) e os "gruda" em uma única string.
       Aqui, usamos o join("<br>") para que cada filme seja separado por uma quebra de linha no HTML.
    */
    let texto = lista.map(f =>
        `${f.titulo} (${f.ano}) - classificacao: ${f.classificacao}`
    ).join("<br>");
    
    document.getElementById("listarFilmes").innerHTML = texto;
}

function filtrarClassificacao() {
    let filtro = document.getElementById("filtroClassificacao").value;
    /* FILTER (você escreveu 'lieter'): É uma função que cria uma NOVA lista 
       contendo apenas os itens que passam em um teste (ex: filmes com a mesma classificação).
    */
    let resultado = filmes.filter(f => f.classificacao === filtro);
    exibirFilmes(resultado);
}

function filtrarAno() {
    let filtro = Number(document.getElementById("filtroAno").value);
    let resultado = filmes.filter(f => f.ano === filtro);
    exibirFilmes(resultado);
}

function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
}