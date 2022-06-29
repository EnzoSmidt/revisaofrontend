var button = document.querySelector ("button");

button.onclick = function () {
    var nome = prompt("Qual é o comando utilizado para integrar duas linhas de desenvolvimento independentes criadas pelo git branch em uma única ramificação?");
    if ((nome == "git merge")) {
        alert("O" + nome + ", serve para integrar duas linhas de desenvolvimento independentes criadas pelo git branch em uma única ramificação.Parabéns! Você acertou!");
    }
    else {
        alert("O" + nome + ", não é o comando correto para integrar duas linhas de desenvolvimento independentes criadas pelo git branch em uma única ramificação");
    }
    window.location="aula10.html";
};