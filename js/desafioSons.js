let audio1 = new Audio();
audio1.src = "./Sons/som1.wav"
let audio2 = new Audio();
audio2.src = "./Sons/som2.wav"
let audio3 = new Audio();
audio3.src = "./Sons/som3.wav"
let audio4 = new Audio();
audio4.src = "./Sons/som4.wav"
let audio5 = new Audio();
audio5.src = "./Sons/som5.wav"
let audio6 = new Audio();
audio6.src = "./Sons/som6.wav"
let audio7 = new Audio();
audio7.src = "./Sons/som7.wav"
let audio8 = new Audio();
audio8.src = "./Sons/som8.wav"

let numErradas = 0;
let numCertas = 0;

let estadosom = false;
let som = 1

const quizData = [
    {
        question: "Men qual é o nome desta música?",
        a: "Spains",
        b: "Portugals",
        c: "Italains",
        d: "Japans",
        correct: "b",
    },
    {
        question: "Men quem canta isto?",
        a: "Os Polo Norte",
        b: "Lourenço",
        c: "Jonny",
        d: "Toy",
        correct: "c",
    },
    {
        question: "Men quem canta isto?",
        a: "Beta",
        b: "Matilde",
        c: "Vera",
        d: "Lourenço depois de inalar hélio",
        correct: "a",
    },
    {
        question: "Men qual é o nome desta música",
        a: "Say Vegan",
        b: "Holocausto Vegan",
        c: "Brocolli Vegan ",
        d: "Very Very Vegan",
        correct: "b",
    },
    {
        question: "Men qual é o nome desta música",
        a: "Sols in Portugals",
        b: "Algarves Balads",
        c: "Sunny beaches & marisque",
        d: "I coração Portugals",
        correct: "c",
    },
    {
        question: "Men qual é o nome desta música",
        a: "Who?!",
        b: "What?!",
        c: "Wheres?!",
        d: "Ahn?!",
        correct: "b",
    },
    {
        question: "Men quem canta isto?",
        a: "Lourenço",
        b: "Jonny",
        c: "Toy",
        d: "Simão depois de uns copos",
        correct: "a",
    }
];

function showDesafioSons() {
    document.getElementById("narrativa").style.display = "none";
    document.getElementById("desafioSons").style.display = "block";
}

function showDSonsFinalVencer() {
    document.getElementById("narrativa").style.display = "block";
    document.getElementById("desafioSons").style.display = "none";
    numZona = 10;
    numDialogo = 7;
    zonaAtual = zonas[numZona];
    document.body.style.backgroundImage = zonaAtual.imagem;
    mundancaCenario();
}

function showDSonsFinalPerder() {
    document.getElementById("narrativa").style.display = "block";
    document.getElementById("desafioFinal").style.display = "none";
    numZona = 9;
    numDialogo = 7;
    zonaAtual = zonas[numZona];
    document.body.style.backgroundImage = zonaAtual.imagem;
    mundancaCenario();
}

const respostasEls = document.querySelectorAll(".answer");
const perguntasEl = document.getElementById("question");
const alineaA = document.getElementById("alineaA");
const alineaB = document.getElementById("alineaB");
const alineaC = document.getElementById("alineaC");
const alineaD = document.getElementById("alineaD");
const proximo = document.getElementById("submit");

let perguntaAtual = 0;

avancarSom();

function avancarSom() {
    uncheckRespostas();

    const currentQuizData = quizData[perguntaAtual];

    perguntasEl.innerText = currentQuizData.question;
    alineaA.innerText = currentQuizData.a;
    alineaB.innerText = currentQuizData.b;
    alineaC.innerText = currentQuizData.c;
    alineaD.innerText = currentQuizData.d;

}

let audio = new Audio();
audio.src = "./Sons/som"+som+".wav";

function desafioSonsEvents() {
    document.getElementById("pAudio1").onclick = function (){
        if(estadosom){
            audio.pause()
            estadosom = false;
        }
        else{
            audio.play()
            estadosom = true;
        }
    }
}


function checkRespostas() {     //Verificar qual é a resposta selecionada
    let resposta = undefined;

    respostasEls.forEach((perguntasEl) => {
        if (perguntasEl.checked) {
            resposta = perguntasEl.id;
        }
    });

    return resposta;
}

function uncheckRespostas() {       //Retirar o check dos radio buttons na pergunta seguinte
    respostasEls.forEach((perguntasEl) => {
        perguntasEl.checked = false;
    });
}


proximo.addEventListener("click", () => {
    // check to see the answer
    const resposta = checkRespostas ();


    if (resposta) {
        if (resposta !== quizData[perguntaAtual].correct) {
            numErradas++;
            document.getElementById("respErradas").innerHTML = "Respostas Erradas: " + numErradas;
        }
        else {
            numCertas++;
            document.getElementById("respCertas").innerHTML = "Respostas Certas: " + numCertas;
        }

        if (numErradas >= 3 ){
            showDSonsFinalPerder();
        } else if (numCertas >=4) {
            showDSonsFinalVencer();
        }

        perguntaAtual++;
        if (perguntaAtual < quizData.length) {
            audio.pause();
            audio.currentTime = 0;
            som++;
            audio.src = "./Sons/som"+som+".wav";
            avancarSom();
        }
    }
});