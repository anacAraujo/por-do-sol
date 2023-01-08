
let numDialogo = 0;

const dialogo0 = {
    isFala: true,
    textoFala: "Uuui moina aqui!\n Tá de chuva...",
    personagem: "ivone"
};

const dialogo1 = {
    isFala: true,
    textoFala: "OH TO MANE ANDA CÁ BAIXO QUE É DESTA QUE VAIS DE FROSQUES",
    personagem: "ivone"
};

const dialogo2 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 6,
    textoOp2: "Por acaso era mesmo com a Ivone que queria falar...",
    nextOp2: 3,
    personagem: "user"
};

const dialogo3 = {
    isFala: true,
    textoFala: "oh anda lá desenbucha filho",
    personagem: "ivone"
}

const dialogo4 = {
    isFala: true,
    textoFala: "OLHA A GINGINHA DA IVONE\n É PÓ TUGA E PÓ CAMONE",
    personagem: "ivone"
}

const dialogo5 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 6,
    textoOp2: "Pode dizer-me onde está o Raul?",
    nextOp2: 8,
    personagem: "user"
}

const dialogo6 = {
    isFala: true,
    textoFala: "Olha este armado em carapau de corrida!!",
    personagem: "ivone"
}

const dialogo7 = {
    isFala: true,
    textoFala: "Senhora ta é no céu! Põente maze a andar daqui oh",
    personagem: "ivone"
}

const dialogo8 = {
    isFala: true,
    textoFala: "resposta ivone",
    personagem: "ivone"
}


const dialogos = [dialogo0,dialogo1,dialogo2,dialogo3,dialogo4,dialogo5,dialogo6,dialogo7,dialogo8];

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

   showDialog(dialogos[numDialogo]);

    document.getElementById("fala").onclick = function () {
       numDialogo++;
        showDialog(dialogos[numDialogo]);
    }

    document.getElementById("opcao1").onclick = function () {
        numDialogo = dialogos[numDialogo].nextOp1;
        showDialog(dialogos[numDialogo]);
    }

    document.getElementById("opcao2").onclick = function () {
        numDialogo = dialogos[numDialogo].nextOp2;
        showDialog(dialogos[numDialogo]);
    }
}