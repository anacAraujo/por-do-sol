//falas Quartel Policia
const falaQuartel0 = {
    isFala: true,
    textoFala: "Bem-vindo. Soube que és o novo detetive do quartel.",
    personagem: Paula
}

const falaQuartel1 = {
    isFala: true,
    textoFala: "Boa sorte. Não te esqueças que as tuas escolhas importam.",
    personagem: Paula
}

const falaQuartel2 = {
    isFala: false,
    textoOp1: "Obrigado.",
    nextOp1: 3,
    textoOp2: "Os meus agradeciementos.",
    nextOp2: 3,
    personagem: Paula
}

const falaQuartel3 = {
    isFala: true,
    textoFala: "Preciso da sua ajuda! O meu Testículo desapareceu! Foi raptado.\n" +
        "Este cavalo vale cerca de 73 mil milhões de bitcoins e sem ele a Herdade do Pôr do Sol pode ir à falência.",
    personagem: Eduardo
}

const falaQuartel4 = {
    isFala: false,
    textoOp1: "Aceito o desafio",
    nextOp1: 5,
    textoOp2: "Não aceito o desafio.",
    nextOp2: 9,
    personagem: Eduardo
}

const falaQuartel5 = {
    isFala: true,
    textoFala: "Como isto é muito importante, falei com um velho amigo meu, o Doutor Rodrigo, para acompanhar toda a investigação.",
    personagem: Eduardo
}

const falaQuartel6 = {
    isFala: true,
    textoFala: "Acabei de sair a meio de um transplante de orelha quando soube o que aconteceu.",
    personagem: DoutorRodrigo
}

const falaQuartel7 = {
    isFala: true,
    textoFala: "Não se preocupe, já vi mais de 100 episódios do Inspetor Max, estou pronto para ajudar.",
    personagem: DoutorRodrigo
}

const areaComum = {
    isAreaComum: true
}

const fim0 = {
    isFim: true,
    fimTitulo: "Ficaste desempregado!",
    fimTexto: "Não aceitaste a proposta do Eduardo: agora estás no desemprego."
}

const zonaQuartel = {
    nome: "Quartel Polícia",
    dialogos: [falaQuartel0,falaQuartel1,falaQuartel2,falaQuartel3,falaQuartel4,falaQuartel5,falaQuartel6,falaQuartel7,areaComum,fim0],
    imagem: "../img/policia.jfif"
};


//falas Madragoa
const dialogo0 = {
    isFala: true,
    textoFala: "Uuui moina aqui!\n Tá de chuva...",
    personagem: Ivone1
};

const dialogo1 = {
    isFala: true,
    textoFala: "OH TO MANE ANDA CÁ BAIXO QUE É DESTA QUE VAIS DE FROSQUES",
    personagem: Ivone2
};

const dialogo2 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 6,
    textoOp2: "Por acaso era mesmo com a Ivone que queria falar...",
    nextOp2: 3,
    personagem: Ivone1
};

const dialogo3 = {
    isFala: true,
    textoFala: "oh anda lá desenbucha filho",
    personagem: Ivone1
}

const dialogo4 = {
    isFala: true,
    textoFala: "OLHA A GINGINHA DA IVONE\n É PÓ TUGA E PÓ CAMONE",
    personagem: Ivone2
}

const dialogo5 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 6,
    textoOp2: "Pode dizer-me onde está o Raul?",
    nextOp2: 8,
    personagem: Ivone1
}

const dialogo6 = {
    isFala: true,
    textoFala: "Olha este armado em carapau de corrida!!",
    personagem: Ivone1
}

const dialogo7 = {
    isFala: true,
    textoFala: "Senhora ta é no céu! Põente maze a andar daqui oh",
    personagem: Ivone1
}

const dialogo8 = {
    isFala: true,
    textoFala: "resposta ivone",
    personagem: "ivone"
}

const zonaMadragoa = {
    nome: "Madragoa",
    dialogos: [dialogo0,dialogo1,dialogo2,dialogo3,dialogo4,dialogo5,dialogo6,dialogo7,dialogo8],
    imagem: "../img/madragoa.jpg"
};

const zonas = [zonaQuartel,zonaMadragoa];
