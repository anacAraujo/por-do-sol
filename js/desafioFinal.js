let avatarEscolhido;

function showDesafioFinal() {
    document.getElementById("narrativa").style.display = "none";
    document.getElementById("desafioFinal").style.display = "block";
    document.getElementById("desafioFinalEscolhaAvatar").style.display = "block";
    document.getElementById("desafioFinalPerguntas").style.display = "none";
    document.getElementById("desafioFinalImagens").style.display = "none";
}

function escolhaAvater() {
    document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
    document.getElementById("desafioFinalPerguntas").style.display = "block";
    document.getElementById("desafioFinalImagens").style.display = "block";
    document.getElementById("avatarUser").src = avatarEscolhido;
}

window.onload = function () {
    document.body.style.backgroundImage = "url('../img/desafio_final.cenario.gif')"

    document.getElementById("avatar1").onclick = function () {
        avatarEscolhido = document.getElementById("avatar1").src;
        escolhaAvater();
        document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
    }

    document.getElementById("avatar2").onclick = function () {
        avatarEscolhido = document.getElementById("avatar2").src;
        escolhaAvater();
    }

    document.getElementById("avatar3").onclick = function () {
        avatarEscolhido = document.getElementById("avatar3").src;
        escolhaAvater();
    }

    document.getElementById("avatar4").onclick = function () {
        avatarEscolhido = document.getElementById("avatar4").src;
        escolhaAvater();
    }
}
