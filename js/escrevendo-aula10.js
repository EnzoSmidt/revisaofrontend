var button = document.querySelector ("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando utilizado para ver o histórico de commits?");
    if ((nome == "git log")) {
        alert("O" + nome + ", serve para ver o histórico de commits.Parabéns! Você acertou!");
    }
    else {
        alert("O" + nome + ", não é o comando correto para ver o histórico de commits");
    }
    window.location="final.html";
};