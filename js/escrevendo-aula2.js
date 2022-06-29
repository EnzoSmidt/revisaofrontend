var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para puxar códigos do GitHub para o repositório local?");
  if ((nome == "git pull")) {
    alert("O" + nome + ", serve para puxar códigos do GitHub para o repostório local.Parabéns! Você acertou!");
  }
  else {
    alert("O" + nome + ", não é o comando correto para puxar códigos do GitHub para o repostório local.");
  }
  window.location="aula3.html";
};