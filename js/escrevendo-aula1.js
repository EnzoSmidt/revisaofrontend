var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para iniciar o git?");
  if ((nome == "git init")) {
    alert("O" + nome + ", serve para iniciar o git.Parabéns! Você acertou!");
  }
  else if ((nome == null)) {
    return
  }  
  else if ((nome != "git init")) {
    alert("esse não é o comando correto");
  }
  window.location="aula2.html";
};