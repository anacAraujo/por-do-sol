//falas Quartel Policia
const quartel0 = {
    isFala: true,
    textoFala: "Bem-vindo. Soube que és o novo detetive do quartel.",
    personagem: Paula
}

const quartel1 = {
    isFala: true,
    textoFala: "Boa sorte. Não te esqueças que as tuas escolhas importam.",
    personagem: Paula
}

const quartel2 = {
    isFala: false,
    textoOp1: "Obrigado.",
    nextOp1: 3,
    textoOp2: "Os meus agradeciementos.",
    nextOp2: 3,
    personagem: Paula
}

const quartel3 = {
    isFala: true,
    textoFala: "Preciso da sua ajuda! O meu Testículo desapareceu! Foi raptado.\n" +
        "Este cavalo vale cerca de 73 mil milhões de bitcoins e sem ele a Herdade do Pôr do Sol pode ir à falência.",
    personagem: Eduardo
}

const quartel4 = {
    isFala: false,
    textoOp1: "Aceito o desafio",
    nextOp1: 5,
    textoOp2: "Não aceito o desafio.",
    nextOp2: 9,
    personagem: Eduardo
}

const quartel5 = {
    isFala: true,
    textoFala: "Como isto é muito importante, falei com um velho amigo meu, o Doutor Rodrigo, para acompanhar toda a investigação.",
    personagem: Eduardo
}

const quartel6 = {
    isFala: true,
    textoFala: "Acabei de sair a meio de um transplante de orelha quando soube o que aconteceu.",
    personagem: DoutorRodrigo
}

const quartel7 = {
    isFala: true,
    textoFala: "Não se preocupe, já vi mais de 100 episódios do Inspetor Max, estou pronto para ajudar.",
    personagem: DoutorRodrigo
}

const areaComum = {
    isAreaComum: true
}

const quartel9Fim = {
    isFim: true,
    fimTitulo: "Ficaste desempregado!",
    fimTexto: "Não aceitaste a proposta do Eduardo: agora estás no desemprego."
}

const zonaQuartel = {
    nome: "Quartel Polícia",
    dialogos: [quartel0,quartel1,quartel2,quartel3,quartel4,quartel5,quartel6,quartel7,areaComum,quartel9Fim],
    imagem: "url('../img/policia.jfif')"
};


//falas Madragoa
const madragoa0 = {
    isFala: true,
    textoFala: "Uuui moina aqui!\n Tá de chuva...",
    personagem: Ivone1
};

const madragoa1 = {
    isFala: true,
    textoFala: "OH TO MANE ANDA CÁ BAIXO QUE É DESTA QUE VAIS DE FROSQUES",
    personagem: Ivone2
};

const madragoa2 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 6,
    textoOp2: "Por acaso era mesmo com a Ivone que queria falar...",
    nextOp2: 3,
    personagem: Ivone1
};

const madragoa3 = {
    isFala: true,
    textoFala: "oh anda lá desenbucha filho",
    personagem: Ivone1
}

const madragoa4 = {
    isFala: true,
    textoFala: "OLHA A GINGINHA DA IVONE\n É PÓ TUGA E PÓ CAMONE",
    personagem: Ivone2
}

const madragoa5 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 6,
    textoOp2: "Pode dizer-me onde está o Raul?",
    nextOp2: 8,
    personagem: Ivone1
}

const madragoa6 = {
    isFala: true,
    textoFala: "Olha este armado em carapau de corrida!!",
    personagem: Ivone1
}

const madragoa7 = {
    isFala: true,
    textoFala: "Senhora ta é no céu! Põente maze a andar daqui oh",
    personagem: Ivone1
}

const madragoa8 = {
    isFala: true,
    textoFala: "resposta ivone",
    personagem: "ivone"
}

const zonaMadragoa = {
    nome: "Madragoa",
    dialogos: [madragoa0,madragoa1,madragoa2,madragoa3,madragoa4,madragoa5,madragoa6,madragoa7,madragoa8],
    imagem: "url('../img/madragoa.jpg')"
};

const zonas = [zonaQuartel,zonaMadragoa];
