var button = document.querySelector ("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando utilizado para ver o histórico de commits?");
    if ((nome == "git log")) {
        alert("O" + nome + ", serve para ver o histórico de commits.Parabéns! Você acertou!");
    }
    else if ((nome == null)) {
        return
      }  
      else if ((nome != "git log")) {
        alert("esse não é o comando correto");
      }
    window.location="final.html";
};