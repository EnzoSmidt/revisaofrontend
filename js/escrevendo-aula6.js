var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para abrir o arquivo index.html dentro do Git Bash?");
  if ((nome == "nano index.html")) {
    alert("O" + nome + ", serve para abrir o arquivo index.html dentro do Git Bash.Parabéns! Você acertou!");
  }
  else if ((nome == null)) {
    return
  }  
  else if ((nome != "nano index.html")) {
    alert("esse não é o comando correto");
  }
  window.location="aula7.html";
};