let numDialogo = 0;
let numZona = 0;
let zonaAtual;
let numUltimoDialogo = 0;

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

window.onload = function () {

    zonaAtual = zonas[numZona];

    let dialogoAtual = zonaAtual.dialogos[numDialogo];
    document.getElementById("personagemImagem").src = dialogoAtual.personagem.imagem;
    showDialog(dialogoAtual);

    document.getElementById("fala").onclick = function () {
        numUltimoDialogo = numDialogo;
        numDialogo++;
        dialogoAtual = zonaAtual.dialogos[numDialogo];
        if (dialogoAtual.isAreaComum) {
            showAreaComum();
        } else if (dialogoAtual.isFim) {
            showFim(dialogoAtual);
        } else {
            showDialog(dialogoAtual);
        }
    }

    document.getElementById("opcao1").onclick = function () {
        numUltimoDialogo = numDialogo;
        numDialogo = zonaAtual.dialogos[numDialogo].nextOp1;
        showDialog(zonaAtual.dialogos[numDialogo]);
    }

    document.getElementById("opcao2").onclick = function () {
        numUltimoDialogo = numDialogo;
        numDialogo = zonaAtual.dialogos[numDialogo].nextOp2;
        if (zonaAtual.dialogos[numDialogo].isFim) {
            showFim(zonaAtual.dialogos[numDialogo])
        } else {
            showDialog(zonaAtual.dialogos[numDialogo]);
        }
    }

    document.getElementById("madragoa").onclick = function () {
        numZona = 1;
        zonaAtual = zonas[numZona];
        document.body.style.backgroundImage = zonaAtual.imagem;

        hideAreaComum();

        numDialogo = 0;
        numUltimoDialogo = 0;

        dialogoAtual = zonaAtual.dialogos[numDialogo];
        document.getElementById("personagemImagem").src = dialogoAtual.personagem.imagem;
        showDialog(dialogoAtual);
    }

    document.getElementById("blaze").onclick = function () {

    }

    document.getElementById("bar").onclick = function () {

    }

    document.getElementById("herdade").onclick = function () {

    }
}
