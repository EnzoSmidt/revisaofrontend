var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para salvar as alterações de um repositório local?");
  if ((nome == "git commit -m")) {
    alert("O" + nome + ", serve para salvar as alterações de um repositório local.Parabéns! Você acertou!");
  }
  else if ((nome == null)) {
    return
  }  
  else if ((nome != "git commit -m")) {
    alert("esse não é o comando correto");
  }
  window.location="aula9.html";
};