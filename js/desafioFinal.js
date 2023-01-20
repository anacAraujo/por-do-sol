let avatarEscolhido;
let dFinalErradas = 0;
let dFinalPerguntaAtual = 0;

const desafioFinalPerguntas = [{
        pergunta: "AAAAAAAAAA?",
        op1: "op1",
        op2: "op2",
        rCerta: 1
    },
    {
        pergunta: "BBBBBBBBBBBBB?",
        op1: "op1",
        op2: "op2",
        rCerta: 2
    }
];

function showDesafioFinal() {
    document.getElementById("narrativa").style.display = "none";
    document.getElementById("desafioFinal").style.display = "block";
    document.getElementById("desafioFinalEscolhaAvatar").style.display = "block";
    document.getElementById("desafioFinalPerguntas").style.display = "none";
    document.getElementById("desafioFinalImagens").style.display = "none";
}

function showDFinalPergunta() {
    const perguntaAtual = desafioFinalPerguntas[dFinalPerguntaAtual];
    document.getElementById("desafioFinalPergunta").innerHTML = perguntaAtual.pergunta;
    document.getElementById("desafioFinalOp1").innerHTML = perguntaAtual.op1;
    document.getElementById("desafioFinalOp2").innerHTML = perguntaAtual.op2;
}

function iniciarDFinal() {
    document.getElementById("desafioFinalEscolhaAvatar").style.display = "none";
    document.getElementById("desafioFinalPerguntas").style.display = "block";
    document.getElementById("desafioFinalImagens").style.display = "block";
    console.log(avatarEscolhido);
    document.getElementById("avatarUser").src = avatarEscolhido;
    showDFinalPergunta();
}

function showDFinalFim() {
    document.getElementById("narrativa").style.display = "block";
    document.getElementById("desafioFinal").style.display = "none";
    numZona = 4;
    numDialogo = 6;
    zonaAtual = zonas[numZona];
    document.body.style.backgroundImage = zonaAtual.imagem;
    mundancaCenario();
}

function desafioFinalEvents() {

    document.getElementById("desafioFinalOp1").onclick = function () {
        const perguntaAtual = desafioFinalPerguntas[dFinalPerguntaAtual];
        if (perguntaAtual.rCerta === 2) {
            dFinalErradas++;
        }
        if (dFinalErradas >= 3) {
            showDFinalFim();
            return;
        }
        dFinalPerguntaAtual++;
        showDFinalPergunta();
    }

    document.getElementById("desafioFinalOp2").onclick = function () {
        const perguntaAtual = desafioFinalPerguntas[dFinalPerguntaAtual];
        if (perguntaAtual.rCerta === 1) {
            dFinalErradas++;
        }
        if (dFinalErradas >= 3) {
            showDFinalFim();
            return;
        }
        dFinalPerguntaAtual++;
        showDFinalPergunta();
    }

    document.getElementById("avatar1").onclick = function () {
        avatarEscolhido = document.getElementById("avatar1").src;
        iniciarDFinal();
    }

    document.getElementById("avatar2").onclick = function () {
        avatarEscolhido = document.getElementById("avatar2").src;
        iniciarDFinal();
    }

    document.getElementById("avatar3").onclick = function () {
        avatarEscolhido = document.getElementById("avatar3").src;
        iniciarDFinal();
    }

    document.getElementById("avatar4").onclick = function () {
        avatarEscolhido = document.getElementById("avatar4").src;
        iniciarDFinal();
    }
}

