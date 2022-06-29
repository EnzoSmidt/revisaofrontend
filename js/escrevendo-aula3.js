var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para adicionar um arquivo em um branch?");
  if ((nome == "git add")) {
    alert("O" + nome + ", serve para adicionar um arquivo em um branch. Parabéns! Você acertou!");
  }
  else {
    alert("O" + nome + ", não é o comando correto para adicionar um arquivo em um branch.");
  }
  window.location="aula4.html";
};