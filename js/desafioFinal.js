function showDesafioFinal() {
    document.getElementById("narrativa").style.display = "none";
    document.getElementById("desafioFinalEscolhaAvatar").style.display = "block";
    document.getElementById("desafioFinalPerguntas").style.display = "none";
    document.getElementById("desafioFinalImagens").style.display = "none";

    let avatarEscolhido;

    document.getElementById("avatar1").onclick = function () {
        avatarEscolhido = document.getElementById("avatar1").src;
        document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
        document.getElementById("desafioFinalPerguntas").style.display = "block";
        document.getElementById("desafioFinalImagens").style.display = "block";
    }

    document.getElementById("avatar2").onclick = function () {
        avatarEscolhido = document.getElementById("avatar2").src;
        document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
        document.getElementById("desafioFinalPerguntas").style.display = "block";
        document.getElementById("desafioFinalImagens").style.display = "block";
    }

    document.getElementById("avatar3").onclick = function () {
        avatarEscolhido = document.getElementById("avatar3").src;
        document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
        document.getElementById("desafioFinalPerguntas").style.display = "block";
        document.getElementById("desafioFinalImagens").style.display = "block";
    }

    document.getElementById("avatar4").onclick = function () {
        avatarEscolhido = document.getElementById("avatar4").src;
        document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
        document.getElementById("desafioFinalPerguntas").style.display = "block";
        document.getElementById("desafioFinalImagens").style.display = "block";
    }

    document.getElementById("avatarUser").src = avatarEscolhido;


}