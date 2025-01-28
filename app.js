//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//*******responsiveVoice.speak() ainda não implementado, em construção.*******

/* -- Iniciando Projeto Challenge Alura ONE do Amigo Secreto --

1- Começamos criando uma lista vazia. */
let nomesDoSorteio = [];

//2- Função para adicionar amigos.
function adicionarAmigo() {
    let nome = addAmigos.value;

//3- Verifica se o nome está vazio
if (nome === "") {
    alert('Por favor, digite um nome válido.'); // Alertar para nome inválidos.
    return;
}

//4- Adiciona o nome à lista de nomes
nomesDoSorteio.push(nome);

//5- Adicionar os nomes na lista visível na página
let lista = document.createElement('li'); //Criar um novo item de lista
lista.textContent = nome;// Atribuindo valor a lista criada
listaAmigos.appendChild(lista);// Adicionar o novo item à lista

//6- Limpa o campo de texto
  addAmigos.value = '';

//7- Retorna o cursor ao campo de input
  addAmigos.focus(); 
}

//8- Para sortear amigo
function sortearAmigo() {
if (nomesDoSorteio.length === 0 ) {
    alert("Para que haja sorteio, será necessário a inclusão de nomes na lista.");
    return; // Para o sorteio não ser executado
}
let embaralhandoNomes = Math.floor(Math.random() * nomesDoSorteio.length); //sorteia um número dentro da lista
let nomeSorteado = nomesDoSorteio[embaralhandoNomes];//separar o nome sorteado
resultado.textContent = (`O amigo sorteado foi: ${nomeSorteado}`);//exibe o nome sorteado
}

//Itens do HTML
let addAmigos = document.getElementById('amigo'); // Caixa de texto
let listaAmigos = document.getElementById('listaAmigos'); // Lista de nomes
let resultado = document.getElementById('resultado'); //sorteado



