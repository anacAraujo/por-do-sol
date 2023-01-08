let numDialogo = 0;
let numZona = 0;

function showDialog(dialog) {
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

window.onload = function () {

    let zonaAtual = zonas[numZona];
   showDialog(zonaAtual.dialogos[numDialogo]);

    document.getElementById("fala").onclick = function () {
        numDialogo++;
        showDialog(zonaAtual.dialogos[numDialogo]);
    }

    document.getElementById("opcao1").onclick = function () {
        numDialogo = zonaAtual.dialogos[numDialogo].nextOp1;
        showDialog(zonaAtual.dialogos[numDialogo]);
    }

    document.getElementById("opcao2").onclick = function () {
        numDialogo = zonaAtual.dialogos[numDialogo].nextOp2;
        showDialog(zonaAtual.dialogos[numDialogo]);
    }
}
