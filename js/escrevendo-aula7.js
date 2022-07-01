var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando utilizado para copiar o código de um repositório remoto para a máquina local?");
  if ((nome == "git clone")) {
    alert("O" + nome + ", serve para copiar o código de um repositório remoto para a máquina local.Parabéns! Você acertou!");
  }
  else if ((nome == null)) {
    return
  }  
  else if ((nome != "git clone")) {
    alert("esse não é o comando correto");
  }
  window.location="aula8.html";
};