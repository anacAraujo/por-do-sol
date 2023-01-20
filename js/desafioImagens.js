let numErradasDImg = 0;
let numCertasDImg = 0;
let dImgPerguntaAtual = 0;

const desafioImagensConteudo = [
    {
        imagem1: "url('../img/personagens_des_img/lourenço_1.png')",
        imagem2: "url('../img/personagens_des_img/lourenço_2.png')",
        imagem3: "url('../img/personagens_des_img/lourenço_3.png')",
        imagem4: "url('../img/personagens_des_img/lourenço_4.png')",
        op1: "Lourenço",
        op2: "António",
        resposta:1
    },
    {
        imagem1: "url('../img/personagens_des_img/madalena_1.png')",
        imagem2: "url('../img/personagens_des_img/madalena_2.png')",
        imagem3: "url('../img/personagens_des_img/madalena_3.png')",
        imagem4: "url('../img/personagens_des_img/madalena_4.png')",
        op1: "Filipa",
        op2: "Madalena",
        resposta:2
    },
    {
        imagem1: "url('../img/personagens_des_img/mariadapiedade_1.png')",
        imagem2: "url('../img/personagens_des_img/mariadapiedade_2.png')",
        imagem3: "url('../img/personagens_des_img/mariadapiedade_3.png')",
        imagem4: "url('../img/personagens_des_img/mariadapiedade_4.png')",
        op1: "Ivone",
        op2: "Maria da Piedade",
        resposta:2
    },
    {
        imagem1: "url('../img/personagens_des_img/narciso_1.png')",
        imagem2: "url('../img/personagens_des_img/narciso_2.png')",
        imagem3: "url('../img/personagens_des_img/narciso_3.png')",
        imagem4: "url('../img/personagens_des_img/narciso_4.png')",
        op1: "Narciso",
        op2: "Sebastião",
        resposta:1
    },
    {
        imagem1: "url('../img/personagens_des_img/padrevito_1.png')",
        imagem2: "url('../img/personagens_des_img/padrevito_2.png')",
        imagem3: "url('../img/personagens_des_img/padrevito_3.png')",
        imagem4: "url('../img/personagens_des_img/padrevito_4.png')",
        op1: "Padre Vitó",
        op2: "Padre Serafim",
        resposta:1
    }
]

function showDesafioImagens() {
    document.getElementById("desafioImagens").style.display = "block";
    document.getElementById("narrativa").style.display = "none";
    showDImgPergunta();
}

function showDImgPergunta() {
    const perguntaAtual = desafioImagensConteudo[dImgPerguntaAtual];
    document.getElementById("desafioImagens1").style.backgroundImage = perguntaAtual.imagem1;
    document.getElementById("desafioImagens2").style.backgroundImage = perguntaAtual.imagem2;
    document.getElementById("desafioImagens3").style.backgroundImage = perguntaAtual.imagem3;
    document.getElementById("desafioImagens4").style.backgroundImage = perguntaAtual.imagem4;
    document.getElementById("desafioImagensBotao1").innerHTML = perguntaAtual.op1;
    document.getElementById("desafioImagensBotao2").innerHTML = perguntaAtual.op2;
}

function showDImgFinalPerder() {
    document.getElementById("desafioImagens").style.display = "none";
    document.getElementById("narrativa").style.display = "block";
    numZona = 2;
    numDialogo = 20;
    zonaAtual = zonas[numZona];
    document.body.style.backgroundImage = zonaAtual.imagem;
    mundancaCenario();
}

function showDImgFinalGanhar() {
    document.getElementById("desafioImagens").style.display = "none";
    document.getElementById("narrativa").style.display = "block";
    numZona = 2;
    numDialogo = 19;
    zonaAtual = zonas[numZona];
    document.body.style.backgroundImage = zonaAtual.imagem;
    mundancaCenario();
}

function desafioImgEvents() {

    document.getElementById("desafioImagensBotao1").onclick = function () {
        const perguntaAtual = desafioImagensConteudo[dImgPerguntaAtual];
        if (perguntaAtual.resposta === 1) {
            numCertasDImg++;
            document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas certas: " + numCertasDImg;
        } else {
            numErradasDImg++;
            document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas erradas: " + numErradasDImg;
        }
        if (numErradasDImg >= 3) {
            showDImgFinalPerder();
        } else if (numCertasDImg >= 3) {
            showDImgFinalGanhar();
        }
        dImgPerguntaAtual++;
        showDImgPergunta();
    }

    document.getElementById("desafioImagensBotao2").onclick = function () {
        if (perguntaAtual.resposta === 2) {
            numCertasDImg++;
            document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas certas: " + numCertasDImg;
        } else {
            numErradasDImg++;
            document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas erradas: " + numErradasDImg;
        }
        if (numErradasDImg >= 3) {
            showDImgFinalPerder();
        } else if (numCertasDImg >= 3) {
            showDImgFinalGanhar();
        }
        dImgPerguntaAtual++;
        showDImgPergunta();
    }
}