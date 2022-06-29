var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para remover arquivos de um repositório do Git?");
  if ((nome == "git rm")) {
    alert("O" + nome + ", serve para remover arquivos de um repositório do Git.Parabéns! Você acertou!");
  }
  else {
    alert("O" + nome + ", não é o comando correto para remover arquivos de um repositório do Git.");
  }
  window.location="aula5.html";
};