var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para visualizarmos o estado atual do diretório de trabalho Git e área de teste?");
  if ((nome == "git status")) {
    alert("O" + nome + ", serve para visualizarmos como está o estado atual do diretório de trabalho Git e área de teste.Parabéns! Você acertou!");
  }
  else {
    alert("O" + nome + ", não é o comando correto para visualizarmos como está o estado atual do diretório de trabalho Git e área de teste.");
  }
  window.location="aula6.html";
};