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
    textoFala: "Interrogatórios às três da tarde fazem-me mal ao fígado. Vou para ali apanhar pastilhas do chão enquanto tratas disso.",
    personagem: DoutorRodrigo
};

const madragoa1 = {
    isFala: false,
    textoOp1: "Pastilhas do chão?",
    nextOp1: 2,
    textoOp2: "Para quê?",
    nextOp2: 2,
    personagem: DoutorRodrigo
};

const madragoa2 = {
    isFala: true,
    textoFala: "Tenho amigos a apanhar pastilhas do chão de 5 países para analisar a composição bacteriana de cada uma.\n" +
        "Posso ser egoísta na cama mas sou prestável cientificamente.",
    personagem: DoutorRodrigo
};

const madragoa3 = {
    isFala: false,
    textoOp1: "Interrogar puto.",
    nextOp1: 15,
    textoOp2: "Interrogar Ivone.",
    nextOp2: 4,
    personagem: Ivone1
}

const madragoa4 = {
    isFala: true,
    textoFala: "Uuui moina aqui!\n Tá de chuva...",
    personagem: Ivone1
}

const madragoa5 = {
    isFala: true,
    textoFala: "OH TO MANE ANDA CÁ BAIXO QUE É DESTA QUE VAIS DE FROSQUES",
    personagem: Ivone2
}

const madragoa6 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 11,
    textoOp2: "Por acaso era mesmo com a Ivone que queria falar...",
    nextOp2: 7,
    personagem: Ivone1
}

const madragoa7 = {
    isFala: true,
    textoFala: "oh anda lá desenbucha filho",
    personagem: Ivone1
}

const madragoa8 = {
    isFala: true,
    textoFala: "OLHA A GINGINHA DA IVONE\n É PÓ TUGA E PÓ CAMONE",
    personagem: Ivone2
}

const madragoa9 = {
    isFala: false,
    textoOp1: "Olhe aí o volume senhora",
    nextOp1: 11,
    textoOp2: "Pode dizer-me onde está o Raul?",
    nextOp2: 10,
    personagem: Ivone1
}

const madragoa10 = {
    isFala: true,
    textoFala: "Esse marmanjo deve andar a trabalhar.",
    personagem: Ivone1
}

const madragoa11 = {
    sFala: false,
    textoOp1: "Ok, obrigado!",
    nextOp1: 14,
    textoOp2: "Obrigado pela informação senhora.",
    nextOp2: 12,
    personagem: Ivone1
}

const madragoa12 = {
    isFala: true,
    textoFala: "Olha este armado em carapau de corrida!!",
    personagem: Ivone1
}

const madragoa13 = {
    isFala: true,
    textoFala: "Senhora ta é no céu! Põente maze a andar daqui oh",
    personagem: Ivone1
}

const madragoa14 = {
    isFala: true,
    textoFala: "Estou pronto! Podemos ir embora?",
    personagem: DoutorRodrigo
}

const madragoa15AreaComum = {
    isAreaComum: true
}

const madragoa16Fim = {
    isFim: true,
    fimTitulo: "Estás pobre!",
    fimTexto: "O puto roubou-te a carteira!"
}

const zonaMadragoa = {
    nome: "Madragoa",
    dialogos: [madragoa0,madragoa1,madragoa2,madragoa3,madragoa4,madragoa5,madragoa6,madragoa7,madragoa8,madragoa9,madragoa10,madragoa11,madragoa12,madragoa13,madragoa14,madragoa15AreaComum,madragoa16Fim],
    imagem: "url('../img/madragoa.jpg')"
};


//zona Blaze
const blaze0 = {
    isFala: true,
    textoFala: "Vai indo tu que eu sou alérgico a pessoas com duas pilinhas.",
    personagem: DoutorRodrigo
}

const blaze1 = {
    isFala: false,
    textoOp1: "É muito grave doutor?",
    nextOp1: 2,
    textoOp2: "Quais são os efeitos da alergia?",
    nextOp2: 2,
    personagem: DoutorRodrigo
}

const blaze2 = {
    isFala: true,
    textoFala: "Sempre que os vejo os meus niveis de raiva sobem na escala de Will Smith e tenho de dar um murro a carecas porque barbudos não sentem tanto.",
    personagem: DoutorRodrigo
}

const blaze3 = {
    isFala: false,
    textoOp1: "Barbudos são imunes a murros?",
    nextOp1: 4,
    textoOp2: "Carecas não sentem tanto?",
    nextOp2: 4,
    personagem: DoutorRodrigo
}

const blaze4 = {
    isFala: true,
    textoFala: "Sim, Ethan Beseris, Steven Naleway e David Carrier provaram isso em 2021.\n" +
        "Desde então só agrido carecas, com licença.",
    personagem: DoutorRodrigo
}

const blaze5 = {
    isFala: false,
    textoOp1: "Interrogar Filipa: Filipa, onde estava no dia em que o Testículo foi raptado?",
    nextOp1: 6,
    textoOp2: "Interrogar Raul: Olá Raul.",
    nextOp2: 13,
    personagem: DoutorRodrigo
}

const blaze6 = {
    isFala: true,
    textoFala: "Onde estou sempre quando cavalos são raptados: no oftalmologista.",
    personagem: Filipa
}

const blaze7 = {
    isFala: false,
    textoOp1: "Ok, era isso que queria saber.",
    nextOp1: 10,
    textoOp2: "Mas a Filipa nem usa óculos!!",
    nextOp2: 8,
    personagem: Filipa
}

const blaze8 = {
    isFala: true,
    textoFala: "Está a dizer que sou uma suspeita?",
    personagem: Filipa
}

const blaze9 = {
    isFala: false,
    textoOp1: "Neste momento todos somos suspeitos.",
    nextOp1: 10,
    textoOp2: "Até o Herman José é suspeito.",
    nextOp2: 10,
    personagem: Filipa
}

const blaze10 = {
    isFala: true,
    textoFala: "Não fui eu mas posso sei quem possa ter sido: os Cavaleiros do Rater. Contacte este número: 760 200 300.",
    personagem: Filipa
}

const blaze11 = {
    isFala: false,
    textoOp1: "Contactar.",
    nextOp1: 12,
    textoOp2: "Não Contactar.",
    nextOp2: 21,
    personagem: Filipa
}

const blaze12 = {
    isFala: false,
    textoOp1: "Agradeço a dica.",
    nextOp1: 21,
    textoOp2: "Ok.",
    nextOp2: 21,
    personagem: telemovel
}

const blaze13 = {
    isFala: true,
    textoFala: "Detetive aqui? A uma hora prefeitamente normal?",
    personagem: Raul
}

const blaze14 = {
    isFala: true,
    textoFala: "Sim Raul. Fiz uma pesquisa rápida sobre ti no Bing e descobri que és o BigSifilis na DarkWeb e o campeão de mariposa em aquários de lagosta.",
    personagem: Raul
}

const blaze15 = {
    isFala: true,
    textoFala: "E devo ficar preocupado?",
    personagem: Raul
}

const blaze16 = {
    isFala: true,
    textoFala: "Não estou aqui para te denunciar. Preciso que me ajudes a descobrir quem levou o Testículo.",
    personagem: Raul
}

const blaze17 = {
    isFala: true,
    textoFala: "Ok mas para isso preciso de lhe fazer algumas perguntas.",
    personagem: Raul
}

const blaze18 = {
    isDesafio: true,
}

const blaze19 = {
    isFala: true,
    textoFala: 'No fórum "Animais Raptados em Herdades", dizem que o Testículo foi levado por alguém que usa casacos de pele e diz "salchicha".',
    personagem: Raul
}

const blaze20 = {
    isFala: false,
    textoOp1: "Voltar à area comum.",
    nextOp1: 22,
    textoOp2: "Interrogar Filipa: Filipa, onde estava no dia em que o Testículo foi raptado?",
    nextOp2: 6,
    personagem: DoutorRodrigo
}

const blaze21 = {
    isFala: false,
    textoOp1: "Voltar à area comum.",
    nextOp1: 22,
    textoOp2: "Interrogar Raul: Olá Raul.",
    nextOp2: 13,
    personagem: DoutorRodrigo
}

const blaze22AreaComum = {
    isAreaComum: true
}

//TODO ganhou ou não
const zonaBlaze = {
    nome: "Blaze",
    dialogos: [blaze0,blaze1,blaze2,blaze3,blaze4,blaze5,blaze6,blaze7,blaze8,blaze9,blaze10,blaze11,blaze12,blaze13,blaze14,blaze15,blaze16,blaze17,blaze18,blaze19,blaze20,blaze21,blaze22AreaComum],
    imagem: "url('../img/blaze.png')"
}

//zona bar jesus quisto

const zonaBar = {
    nome: "Bar Jesus Quisto",
    dialogos: [],
    imagem: "url('../img/bar.png')"
}

const zonas = [zonaQuartel,zonaMadragoa,zonaBlaze,zonaBar];