let numDialogo = 0;
let numZona = 0;
let zonaAtual;
let numUltimoDialogo = 0;

function showTutorial(tutorialText) {
    document.getElementById("tutorial").style.display = "block";
    document.getElementById("tutorialTexto").innerHTML = "<p>" + tutorialText + "</p>";
}

function hideTutorial() {
    document.getElementById("tutorial").style.display = "none";
}

function mundancaCenario() {
    const dialogoAtual = zonaAtual.dialogos[numDialogo];
    if (dialogoAtual.isAreaComum) {
        showAreaComum();
    } else if (dialogoAtual.isFim) {
        showFim(dialogoAtual);
    } else if (dialogoAtual.isDesafioImg) {
        showDesafioImagens();
    } else if (dialogoAtual.isDesafioSons) {
        showDesafioSons();
    } else if (dialogoAtual.isDesafioFinal){
        showDesafioFinal();
    } else {
        showDialog(dialogoAtual);
    }

    hideTutorial();
    if (dialogoAtual.tutorialText) {
        setTimeout(showTutorial,500, dialogoAtual.tutorialText);
    }
}

function showDialog(dialog) {

    if (zonaAtual.dialogos[numUltimoDialogo].personagem.imagem !== dialog.personagem.imagem) {
        document.getElementById("personagemImagem").src = dialog.personagem.imagem;
        console.log("New Image: ", dialog.personagem.imagem);
    }

    if (dialog.isFala) {
        document.getElementById("opcoes").style.display = "none";
        document.getElementById("fala").style.display = "block";
        document.getElementById("fala").innerHTML = dialog.textoFala;
    } else {
        document.getElementById("fala").style.display = "none";
        document.getElementById("opcoes").style.display = "block";
        document.getElementById("opcao1").innerHTML = dialog.textoOp1;
        document.getElementById("opcao2").innerHTML = dialog.textoOp2;
    }
}

function showFim(dialog) {
    document.getElementById("narrativa").style.display = "none";
    document.getElementById("final").style.display = "block";
    document.getElementById("tituloFim").innerHTML = dialog.fimTitulo;
    document.getElementById("textoFim").innerHTML = dialog.fimTexto;
    document.body.style.backgroundImage = ""; // TODO
}

function showAreaComum() {
    document.getElementById("personagem").style.display = "none";
    document.getElementById("dialogo").style.display = "none";
    document.getElementById("opZonas").style.display = "block";
}

function hideAreaComum() {
    document.getElementById("personagem").style.display = "block";
    document.getElementById("dialogo").style.display = "block";
    document.getElementById("opZonas").style.display = "none";
}

function mudarZona() {
    zonaAtual = zonas[numZona];
    document.body.style.backgroundImage = zonaAtual.imagem;

    hideAreaComum();

    numDialogo = 0;
    numUltimoDialogo = 0;

    const dialogoAtual = zonaAtual.dialogos[numDialogo];
    document.getElementById("personagemImagem").src = dialogoAtual.personagem.imagem;
    mundancaCenario();
}

function mainEvents() {
    document.getElementById("botaoIniciar").onclick = function () {
        document.getElementById("narrativa").style.display = "block";
        document.getElementById("inicio").style.display = "none";
        mudarZona();
    }

    document.getElementById("fala").onclick = function () {
        numUltimoDialogo = numDialogo;
        numDialogo++;
        mundancaCenario();
    }

    document.getElementById("opcao1").onclick = function () {
        numUltimoDialogo = numDialogo;
        numDialogo = zonaAtual.dialogos[numDialogo].nextOp1;
        mundancaCenario();
    }

    document.getElementById("opcao2").onclick = function () {
        numUltimoDialogo = numDialogo;
        numDialogo = zonaAtual.dialogos[numDialogo].nextOp2;
        mundancaCenario();
    }

    document.getElementById("madragoa").onclick = function () {
        numZona = 1;
        mudarZona();
    }

    document.getElementById("blaze").onclick = function () {
        numZona = 2;
        mudarZona();
    }

    document.getElementById("bar").onclick = function () {
        numZona = 3;
        mudarZona();
    }

    document.getElementById("herdade").onclick = function () {
        numZona = 4;
        mudarZona();
    }
}

window.onload = function () {

    mainEvents();
    desafioImgEvents();
    desafioSonsEvents()
    desafioFinalEvents();
}
