let numErradas = 0;
let numCertas = 0;
let resposta;

function desafioImgEvents() {

    document.getElementById("desafioImagensBotao1").onclick = function() {
        desafioImagensRonda1();
    }

    document.getElementById("desafioImagensBotao2").onclick = function() {
        desafioImagensRonda1();
    }

    document.getElementById("desafioImagensBotao3").onclick = function () {
        desafioImagensRonda2();
    }

    document.getElementById("desafioImagensBotao4").onclick = function () {
        desafioImagensRonda2();
    }

    document.getElementById("desafioImagensBotao5").onclick = function () {
        desafioImagensRonda3();
    }

    document.getElementById("desafioImagensBotao6").onclick = function () {
        desafioImagensRonda3();
    }

    document.getElementById("desafioImagensBotao7").onclick = function () {
        desafioImagensRonda4();
    }

    document.getElementById("desafioImagensBotao8").onclick = function () {
        desafioImagensRonda4();
    }

    document.getElementById("desafioImagensBotao9").onclick = function () {
        desafioImagensRonda5();

    }

    document.getElementById("desafioImagensBotao10").onclick = function () {
        desafioImagensRonda5();
    }
}

function showDesafioImagens() {

    document.getElementById("desafioImagens").style.display = "block";
    document.getElementById("narrativa").style.display = "none";

    document.getElementById("desafioImagens5").style.display = "none";
    document.getElementById("desafioImagens6").style.display = "none";
    document.getElementById("desafioImagens7").style.display = "none";
    document.getElementById("desafioImagens8").style.display = "none";
    document.getElementById("desafioImagens9").style.display = "none";
    document.getElementById("desafioImagens10").style.display = "none";
    document.getElementById("desafioImagens11").style.display = "none";
    document.getElementById("desafioImagens12").style.display = "none";
    document.getElementById("desafioImagens13").style.display = "none";
    document.getElementById("desafioImagens14").style.display = "none";
    document.getElementById("desafioImagens15").style.display = "none";
    document.getElementById("desafioImagens16").style.display = "none";
    document.getElementById("desafioImagens17").style.display = "none";
    document.getElementById("desafioImagens18").style.display = "none";
    document.getElementById("desafioImagens19").style.display = "none";
    document.getElementById("desafioImagens20").style.display = "none";
    document.getElementById("desafioImagensBotao3").style.display = "none";
    document.getElementById("desafioImagensBotao4").style.display = "none";
    document.getElementById("desafioImagensBotao5").style.display = "none";
    document.getElementById("desafioImagensBotao6").style.display = "none";
    document.getElementById("desafioImagensBotao7").style.display = "none";
    document.getElementById("desafioImagensBotao8").style.display = "none";
    document.getElementById("desafioImagensBotao9").style.display = "none";
    document.getElementById("desafioImagensBotao10").style.display = "none";



    if (numErradas >= 3 ){
        document.getElementById("desafioImagens").style.display = "none";
        document.getElementById("narrativa").style.display = "block";
    }

}

function desafioImagensRonda1() {
    document.getElementById("desafioImagens1").style.display = "none";
    document.getElementById("desafioImagens2").style.display = "none";
    document.getElementById("desafioImagens3").style.display = "none";
    document.getElementById("desafioImagens4").style.display = "none";
    document.getElementById("desafioImagens5").style.display = "block";
    document.getElementById("desafioImagens6").style.display = "block";
    document.getElementById("desafioImagens7").style.display = "block";
    document.getElementById("desafioImagens8").style.display = "block";

    document.getElementById("desafioImagensBotao1").style.display = "none";
    document.getElementById("desafioImagensBotao2").style.display = "none";
    document.getElementById("desafioImagensBotao3").style.display = "inline";
    document.getElementById("desafioImagensBotao4").style.display = "inline";

    if (resposta === "Lourenço") {
        numCertas++;
        document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas Certas: " + numCertas;
    } else {
        numErradas++;
        document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas Erradas: " + numErradas;
    }
}

function desafioImagensRonda2() {
    document.getElementById("desafioImagens5").style.display = "none";
    document.getElementById("desafioImagens6").style.display = "none";
    document.getElementById("desafioImagens7").style.display = "none";
    document.getElementById("desafioImagens8").style.display = "none";
    document.getElementById("desafioImagens9").style.display = "block";
    document.getElementById("desafioImagens10").style.display = "block";
    document.getElementById("desafioImagens11").style.display = "block";
    document.getElementById("desafioImagens12").style.display = "block";

    document.getElementById("desafioImagensBotao3").style.display = "none";
    document.getElementById("desafioImagensBotao4").style.display = "none";
    document.getElementById("desafioImagensBotao5").style.display = "inline";
    document.getElementById("desafioImagensBotao6").style.display = "inline";

    if (resposta === "Madalena") {
        numCertas++;
        document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas Certas: " + numCertas;
    } else {
        numErradas++;
        document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas Erradas: " + numErradas;
    }
}

function desafioImagensRonda3() {
    document.getElementById("desafioImagens9").style.display = "none";
    document.getElementById("desafioImagens10").style.display = "none";
    document.getElementById("desafioImagens11").style.display = "none";
    document.getElementById("desafioImagens12").style.display = "none";
    document.getElementById("desafioImagens13").style.display = "block";
    document.getElementById("desafioImagens14").style.display = "block";
    document.getElementById("desafioImagens15").style.display = "block";
    document.getElementById("desafioImagens16").style.display = "block";

    document.getElementById("desafioImagensBotao5").style.display = "none";
    document.getElementById("desafioImagensBotao6").style.display = "none";
    document.getElementById("desafioImagensBotao7").style.display = "inline";
    document.getElementById("desafioImagensBotao8").style.display = "inline";

    if (resposta === "Maria da Piedade") {
        numCertas++;
        document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas Certas: " + numCertas;
    } else {
        numErradas++;
        document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas Erradas: " + numErradas;
    }
}

function desafioImagensRonda4() {
    document.getElementById("desafioImagens13").style.display = "none";
    document.getElementById("desafioImagens14").style.display = "none";
    document.getElementById("desafioImagens15").style.display = "none";
    document.getElementById("desafioImagens16").style.display = "none";
    document.getElementById("desafioImagens17").style.display = "block";
    document.getElementById("desafioImagens18").style.display = "block";
    document.getElementById("desafioImagens19").style.display = "block";
    document.getElementById("desafioImagens20").style.display = "block";

    document.getElementById("desafioImagensBotao7").style.display = "none";
    document.getElementById("desafioImagensBotao8").style.display = "none";
    document.getElementById("desafioImagensBotao9").style.display = "inline";
    document.getElementById("desafioImagensBotao10").style.display = "inline";

    if (resposta === "Narciso") {
        numCertas++;
        document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas Certas: " + numCertas;
    } else {
        numErradas++;
        document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas Erradas: " + numErradas;
    }

}
function desafioImagensRonda5() {
    if (resposta === "Padre Vitó") {
        numCertas++;
        document.getElementById("desafioImagensRespostaCerta").innerHTML = "Respostas Certas: " + numCertas;
    } else {
        numErradas++;
        document.getElementById("desafioImagensRespostaErrada").innerHTML = "Respostas Erradas: " + numErradas;
    }
}