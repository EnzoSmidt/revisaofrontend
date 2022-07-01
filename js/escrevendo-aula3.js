var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para adicionar um arquivo em um branch?");
  if ((nome == "git add")) {
    alert("O" + nome + ", serve para adicionar um arquivo em um branch. Parabéns! Você acertou!");
  }
  else if ((nome == null)) {
    return
  }  
  else if ((nome != "git add")) {
    alert("esse não é o comando correto");
  }
  window.location="aula4.html";
};