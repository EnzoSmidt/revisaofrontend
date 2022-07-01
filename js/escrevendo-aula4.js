var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para remover arquivos de um repositório do Git?");
  if ((nome == "git rm")) {
    alert("O" + nome + ", serve para remover arquivos de um repositório do Git.Parabéns! Você acertou!");
  }
  else if ((nome == null)) {
    return
  }  
  else if ((nome != "git rm")) {
    alert("esse não é o comando correto");
  }
  window.location="aula5.html";
};