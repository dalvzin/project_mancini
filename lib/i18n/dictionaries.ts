export type Lang = 'pt' | 'en' | 'it'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
]

type Dict = {
  nav: {
    home: string
    famiglia: string
    ristorante: string
    pizzaria: string
    menu: string
    eventos: string
    giftcard: string
    calligraphia: string
    delivery: string
    contato: string
    reserve: string
    menuLabel: string
    closeLabel: string
  }
  hero: {
    label: string
    line1: string
    line2: string
    line3: string
    intro: string
    scroll: string
    since: string
  }
  story: {
    label: string
    title: string
    lead: string
    timeline: { year: string; title: string; text: string }[]
    pull: string
  }
  houses: {
    label: string
    title: string
    intro: string
    discover: string
    items: {
      id: string
      name: string
      kind: string
      year: string
      desc: string
      traits: string[]
    }[]
  }
  menu: {
    label: string
    title: string
    intro: string
    selectHouse: string
    openPdf: string
    priceNote: string
    from: string
  }
  signature: {
    label: string
    title: string
    intro: string
    dishes: { name: string; house: string; desc: string }[]
  }
  music: {
    label: string
    title: string
    text: string
    detail: string
  }
  events: {
    label: string
    title: string
    text: string
    types: string[]
    cta: string
  }
  giftcard: {
    label: string
    title: string
    text: string
    cta: string
  }
  calligraphia: {
    label: string
    title: string
    text: string
    detail: string
  }
  delivery: {
    label: string
    title: string
    text: string
    cta: string
    note: string
  }
  gallery: {
    label: string
    title: string
  }
  street: {
    label: string
    title: string
    text: string
  }
  contact: {
    label: string
    title: string
    addressLabel: string
    address: string
    phoneLabel: string
    hoursLabel: string
    hours: string
    call: string
    directions: string
  }
  footer: {
    statement: string
    tagline: string
    nav: string
    language: string
    follow: string
    rights: string
    made: string
  }
}

const pt: Dict = {
  nav: {
    home: 'Home',
    famiglia: 'A Famiglia',
    ristorante: 'As Casas',
    pizzaria: 'Pizzaria',
    menu: 'Cardápio',
    eventos: 'Eventos',
    giftcard: 'Gift Card',
    calligraphia: 'Calligraphia',
    delivery: 'Delivery',
    contato: 'Contato',
    reserve: 'Reservar',
    menuLabel: 'Menu',
    closeLabel: 'Fechar',
  },
  hero: {
    label: 'Rua Avanhandava · São Paulo · dal 1980',
    line1: 'Uma Famiglia.',
    line2: 'Uma História.',
    line3: 'Uma Mesa.',
    intro:
      'Há mais de quatro décadas, a Rua Avanhandava se transformou em um pedaço da Itália no centro de São Paulo. Aqui, cada prato carrega memória, e cada mesa continua posta.',
    scroll: 'Role para entrar',
    since: 'Dal 1980',
  },
  story: {
    label: 'A História',
    title: 'Tudo começou com uma família e uma vontade de reunir pessoas à mesa.',
    lead: 'A Famiglia Mancini nasceu do desejo simples e teimoso de servir comida italiana de verdade — a que se faz em casa, com tempo, farta e sem pressa. O que começou como uma pequena cantina virou um bairro inteiro de sabores.',
    timeline: [
      {
        year: '1980',
        title: 'A Trattoria',
        text: 'Walter Mancini abre a Famiglia Mancini Trattoria na Rua Avanhandava. Mesas próximas, antepastos generosos e o calor de uma cozinha italiana de família.',
      },
      {
        year: '2001',
        title: 'Il Ristorante',
        text: 'Nasce o Ristorante Walter Mancini, um endereço mais sofisticado para pratos autorais, massas, carnes e peixes, com música ao vivo à noite.',
      },
      {
        year: '2004',
        title: 'A Pizzaria',
        text: 'A Pizzaria Famiglia Mancini chega à rua trazendo a atmosfera da cantina italiana: pizza, pasta, música e vida em vários ambientes.',
      },
      {
        year: 'Hoje',
        title: 'Uma Rua Italiana',
        text: 'A Rua Avanhandava se tornou destino. Três casas, uma só família, uma tradição que continua posta à mesa todos os dias.',
      },
    ],
    pull: 'Comida italiana não se serve. Se compartilha.',
  },
  houses: {
    label: 'As Casas de Avanhandava',
    title: 'Três mundos. Uma só família.',
    intro:
      'Cada casa da Famiglia Mancini tem seu próprio caráter — mas todas nascem do mesmo espírito: reunir, servir com fartura e receber como se fosse em casa.',
    discover: 'Conhecer',
    items: [
      {
        id: 'trattoria',
        name: 'Famiglia Mancini',
        kind: 'Trattoria',
        year: 'dal 1980',
        desc: 'A casa original. Antepastos lendários, massas de família e o burburiço caloroso de uma trattoria italiana clássica.',
        traits: ['Antepasto', 'Massas de família', 'Ambiente clássico'],
      },
      {
        id: 'ristorante',
        name: 'Walter Mancini',
        kind: 'Il Ristorante',
        year: 'dal 2001',
        desc: 'A face mais sofisticada da família. Pratos autorais, carnes, peixes e massas, com música ao vivo ao cair da noite.',
        traits: ['Autoral', 'Música ao vivo', 'Jantar'],
      },
      {
        id: 'pizzaria',
        name: 'Famiglia Mancini',
        kind: 'Pizzaria',
        year: 'dal 2004',
        desc: 'A energia da cantina italiana. Pizza no forno, pasta, música e vários ambientes para viver a noite.',
        traits: ['Forno a lenha', 'Cantina', 'Vários ambientes'],
      },
    ],
  },
  menu: {
    label: 'O Cardápio',
    title: 'Da nossa cozinha à sua mesa',
    intro:
      'Uma seleção da nossa carta, organizada por casa e categoria. Os valores podem sofrer alteração — consulte a equipe na sua visita.',
    selectHouse: 'Escolha a casa',
    openPdf: 'Ver cardápio completo em PDF',
    priceNote: 'Preços sujeitos a alteração',
    from: 'a partir de',
  },
  signature: {
    label: 'Pratos da Casa',
    title: 'Assinaturas da Famiglia',
    intro: 'Alguns pratos não mudam — porque a memória não deixa.',
    dishes: [
      {
        name: 'Spaghetti al Pomodoro e Basilico',
        house: 'Trattoria',
        desc: 'Molho de tomate fresco, manjericão e o tempo certo de cozimento.',
      },
      {
        name: 'Ossobuco alla Milanese',
        house: 'Il Ristorante',
        desc: 'Ossobuco braseado, gremolata e risoto milanês ao açafrão.',
      },
      {
        name: 'Tiramisù della Casa',
        house: 'Pizzaria',
        desc: 'Camadas de mascarpone, café e cacau. O fim perfeito.',
      },
    ],
  },
  music: {
    label: 'Música',
    title: 'A noite tem trilha sonora',
    text: 'Quando cai a noite na Avanhandava, a música ao vivo entra em cena. Voz, piano e clássicos italianos acompanham o jantar — sem nunca virar palco de balada, sempre parte da mesa.',
    detail: 'Música ao vivo · consulte a programação da casa',
  },
  events: {
    label: 'Eventos',
    title: 'Seu momento na Avanhandava',
    text: 'Casamentos, aniversários, confraternizações e celebrações particulares ganham um cenário italiano inesquecível. Nossos espaços recebem sua história como se fosse da família.',
    types: ['Casamentos', 'Aniversários', 'Eventos corporativos', 'Celebrações privadas'],
    cta: 'Falar sobre meu evento',
  },
  giftcard: {
    label: 'Gift Card',
    title: 'Presenteie uma mesa italiana',
    text: 'Mais do que um presente, um convite. O Gift Card Famiglia Mancini leva alguém especial para viver uma noite na Rua Avanhandava.',
    cta: 'Quero presentear',
  },
  calligraphia: {
    label: 'Calligraphia',
    title: 'A arte que assina a casa',
    text: 'A Calligraphia é a alma gráfica da Famiglia Mancini — o traço, a caligrafia e a arte italiana que dão personalidade a cada detalhe, do menu à parede.',
    detail: 'Arte · caligrafia · identidade',
  },
  delivery: {
    label: 'Delivery',
    title: 'A Itália até a sua porta',
    text: 'Leve o sabor da Famiglia Mancini para casa. Nossos pratos preparados com o mesmo cuidado da cantina, prontos para o delivery.',
    cta: 'Pedir delivery',
    note: 'Disponível pelas plataformas de entrega parceiras',
  },
  gallery: {
    label: 'Galeria',
    title: 'Instantes à mesa',
  },
  street: {
    label: 'O Endereço',
    title: 'A Rua Avanhandava',
    text: 'Não se visita apenas um restaurante. Se entra em uma rua que virou pedaço da Itália em São Paulo — com suas fachadas quentes, luzes e o cheiro que convida.',
  },
  contact: {
    label: 'Contato',
    title: 'Ci vediamo a tavola',
    addressLabel: 'Endereço',
    address: 'Rua Avanhandava, 81 — Bela Vista, São Paulo · SP',
    phoneLabel: 'Reservas',
    hoursLabel: 'Funcionamento',
    hours: 'Aberto diariamente para almoço e jantar',
    call: 'Ligar',
    directions: 'Como chegar',
  },
  footer: {
    statement: 'Ci vediamo a tavola.',
    tagline: 'Dal 1980, a mesa continua posta.',
    nav: 'Navegação',
    language: 'Idioma',
    follow: 'Siga',
    rights: 'Todos os direitos reservados.',
    made: 'Rua Avanhandava · São Paulo',
  },
}

const en: Dict = {
  nav: {
    home: 'Home',
    famiglia: 'The Family',
    ristorante: 'The Houses',
    pizzaria: 'Pizzaria',
    menu: 'Menu',
    eventos: 'Events',
    giftcard: 'Gift Card',
    calligraphia: 'Calligraphia',
    delivery: 'Delivery',
    contato: 'Contact',
    reserve: 'Reserve',
    menuLabel: 'Menu',
    closeLabel: 'Close',
  },
  hero: {
    label: 'Rua Avanhandava · São Paulo · since 1980',
    line1: 'One Family.',
    line2: 'One History.',
    line3: 'One Table.',
    intro:
      'For over four decades, Rua Avanhandava has been a piece of Italy in downtown São Paulo. Here, every dish carries memory — and the table is always set.',
    scroll: 'Scroll to enter',
    since: 'Since 1980',
  },
  story: {
    label: 'The Story',
    title: 'It all began with a family and a wish to gather people around the table.',
    lead: 'Famiglia Mancini was born from a simple, stubborn desire to serve real Italian food — the kind made at home, unhurried and generous. What started as a small cantina became an entire neighborhood of flavor.',
    timeline: [
      {
        year: '1980',
        title: 'The Trattoria',
        text: 'Walter Mancini opens Famiglia Mancini Trattoria on Rua Avanhandava. Close tables, generous antipasti and the warmth of a family Italian kitchen.',
      },
      {
        year: '2001',
        title: 'Il Ristorante',
        text: 'Ristorante Walter Mancini is born — a more sophisticated address for signature dishes, pasta, meat and fish, with live music at night.',
      },
      {
        year: '2004',
        title: 'The Pizzaria',
        text: 'Pizzaria Famiglia Mancini arrives on the street, bringing the atmosphere of an Italian cantina: pizza, pasta, music and life across many rooms.',
      },
      {
        year: 'Today',
        title: 'An Italian Street',
        text: 'Rua Avanhandava became a destination. Three houses, one family, a tradition that stays set at the table every single day.',
      },
    ],
    pull: 'Italian food is not served. It is shared.',
  },
  houses: {
    label: 'The Houses of Avanhandava',
    title: 'Three worlds. One family.',
    intro:
      'Each Famiglia Mancini house has its own character — yet all are born from the same spirit: to gather, to serve generously, and to welcome you as family.',
    discover: 'Discover',
    items: [
      {
        id: 'trattoria',
        name: 'Famiglia Mancini',
        kind: 'Trattoria',
        year: 'since 1980',
        desc: 'The original house. Legendary antipasti, family pasta and the warm buzz of a classic Italian trattoria.',
        traits: ['Antipasto', 'Family pasta', 'Classic room'],
      },
      {
        id: 'ristorante',
        name: 'Walter Mancini',
        kind: 'Il Ristorante',
        year: 'since 2001',
        desc: 'The family at its most refined. Signature plates, meat, fish and pasta, with live music as night falls.',
        traits: ['Signature', 'Live music', 'Dinner'],
      },
      {
        id: 'pizzaria',
        name: 'Famiglia Mancini',
        kind: 'Pizzaria',
        year: 'since 2004',
        desc: 'The energy of an Italian cantina. Oven-fired pizza, pasta, music and many rooms to live the night.',
        traits: ['Wood-fired', 'Cantina', 'Many rooms'],
      },
    ],
  },
  menu: {
    label: 'The Menu',
    title: 'From our kitchen to your table',
    intro:
      'A selection from our carte, organized by house and category. Prices may change — please check with our team during your visit.',
    selectHouse: 'Choose a house',
    openPdf: 'Open the full menu (PDF)',
    priceNote: 'Prices subject to change',
    from: 'from',
  },
  signature: {
    label: 'House Dishes',
    title: 'Signatures of the Famiglia',
    intro: 'Some dishes never change — because memory won’t let them.',
    dishes: [
      {
        name: 'Spaghetti al Pomodoro e Basilico',
        house: 'Trattoria',
        desc: 'Fresh tomato sauce, basil and exactly the right cooking time.',
      },
      {
        name: 'Ossobuco alla Milanese',
        house: 'Il Ristorante',
        desc: 'Braised veal shank, gremolata and saffron Milanese risotto.',
      },
      {
        name: 'Tiramisù della Casa',
        house: 'Pizzaria',
        desc: 'Layers of mascarpone, coffee and cocoa. The perfect ending.',
      },
    ],
  },
  music: {
    label: 'Music',
    title: 'The night has a soundtrack',
    text: 'When night falls on Avanhandava, live music takes the stage. Voice, piano and Italian classics accompany dinner — never a nightclub, always part of the table.',
    detail: 'Live music · check each house’s schedule',
  },
  events: {
    label: 'Events',
    title: 'Your moment on Avanhandava',
    text: 'Weddings, birthdays, gatherings and private celebrations find an unforgettable Italian setting. Our spaces welcome your story as if it were family.',
    types: ['Weddings', 'Birthdays', 'Corporate events', 'Private celebrations'],
    cta: 'Talk about my event',
  },
  giftcard: {
    label: 'Gift Card',
    title: 'Gift an Italian table',
    text: 'More than a gift, an invitation. The Famiglia Mancini Gift Card takes someone special to live a night on Rua Avanhandava.',
    cta: 'Give a gift',
  },
  calligraphia: {
    label: 'Calligraphia',
    title: 'The art that signs the house',
    text: 'Calligraphia is the graphic soul of Famiglia Mancini — the stroke, the lettering and the Italian art that give personality to every detail, from menu to wall.',
    detail: 'Art · calligraphy · identity',
  },
  delivery: {
    label: 'Delivery',
    title: 'Italy to your door',
    text: 'Take the taste of Famiglia Mancini home. Our dishes prepared with the same cantina care, ready for delivery.',
    cta: 'Order delivery',
    note: 'Available through partner delivery platforms',
  },
  gallery: {
    label: 'Gallery',
    title: 'Moments at the table',
  },
  street: {
    label: 'The Address',
    title: 'Rua Avanhandava',
    text: 'You do not simply visit a restaurant. You enter a street that became a piece of Italy in São Paulo — with its warm facades, lights and an aroma that invites you in.',
  },
  contact: {
    label: 'Contact',
    title: 'Ci vediamo a tavola',
    addressLabel: 'Address',
    address: 'Rua Avanhandava, 81 — Bela Vista, São Paulo · SP',
    phoneLabel: 'Reservations',
    hoursLabel: 'Opening',
    hours: 'Open daily for lunch and dinner',
    call: 'Call',
    directions: 'Directions',
  },
  footer: {
    statement: 'Ci vediamo a tavola.',
    tagline: 'Since 1980, the table stays set.',
    nav: 'Navigation',
    language: 'Language',
    follow: 'Follow',
    rights: 'All rights reserved.',
    made: 'Rua Avanhandava · São Paulo',
  },
}

const it: Dict = {
  nav: {
    home: 'Home',
    famiglia: 'La Famiglia',
    ristorante: 'Le Case',
    pizzaria: 'Pizzeria',
    menu: 'Menù',
    eventos: 'Eventi',
    giftcard: 'Gift Card',
    calligraphia: 'Calligraphia',
    delivery: 'Delivery',
    contato: 'Contatti',
    reserve: 'Prenota',
    menuLabel: 'Menù',
    closeLabel: 'Chiudi',
  },
  hero: {
    label: 'Rua Avanhandava · San Paolo · dal 1980',
    line1: 'Una Famiglia.',
    line2: 'Una Storia.',
    line3: 'Una Tavola.',
    intro:
      'Da oltre quarant’anni, Rua Avanhandava è un pezzo d’Italia nel centro di San Paolo. Qui ogni piatto porta memoria — e la tavola è sempre apparecchiata.',
    scroll: 'Scorri per entrare',
    since: 'Dal 1980',
  },
  story: {
    label: 'La Storia',
    title: 'Tutto è cominciato con una famiglia e il desiderio di riunire le persone a tavola.',
    lead: 'La Famiglia Mancini nasce dal desiderio semplice e testardo di servire vera cucina italiana — quella fatta in casa, senza fretta e abbondante. Ciò che era una piccola cantina è diventato un intero quartiere di sapori.',
    timeline: [
      {
        year: '1980',
        title: 'La Trattoria',
        text: 'Walter Mancini apre la Famiglia Mancini Trattoria in Rua Avanhandava. Tavoli vicini, antipasti generosi e il calore di una cucina italiana di famiglia.',
      },
      {
        year: '2001',
        title: 'Il Ristorante',
        text: 'Nasce il Ristorante Walter Mancini, un indirizzo più sofisticato per piatti d’autore, paste, carni e pesci, con musica dal vivo la sera.',
      },
      {
        year: '2004',
        title: 'La Pizzeria',
        text: 'La Pizzeria Famiglia Mancini arriva sulla strada portando l’atmosfera della cantina italiana: pizza, pasta, musica e vita in più ambienti.',
      },
      {
        year: 'Oggi',
        title: 'Una Strada Italiana',
        text: 'Rua Avanhandava è diventata una meta. Tre case, una sola famiglia, una tradizione apparecchiata a tavola ogni giorno.',
      },
    ],
    pull: 'Il cibo italiano non si serve. Si condivide.',
  },
  houses: {
    label: 'Le Case di Avanhandava',
    title: 'Tre mondi. Una sola famiglia.',
    intro:
      'Ogni casa della Famiglia Mancini ha il proprio carattere — ma tutte nascono dallo stesso spirito: riunire, servire con abbondanza e accogliere come in famiglia.',
    discover: 'Scopri',
    items: [
      {
        id: 'trattoria',
        name: 'Famiglia Mancini',
        kind: 'Trattoria',
        year: 'dal 1980',
        desc: 'La casa originale. Antipasti leggendari, paste di famiglia e il calore vivace di una classica trattoria italiana.',
        traits: ['Antipasto', 'Paste di famiglia', 'Ambiente classico'],
      },
      {
        id: 'ristorante',
        name: 'Walter Mancini',
        kind: 'Il Ristorante',
        year: 'dal 2001',
        desc: 'La famiglia nella sua forma più raffinata. Piatti d’autore, carni, pesci e paste, con musica dal vivo al calar della sera.',
        traits: ['D’autore', 'Musica dal vivo', 'Cena'],
      },
      {
        id: 'pizzaria',
        name: 'Famiglia Mancini',
        kind: 'Pizzeria',
        year: 'dal 2004',
        desc: 'L’energia della cantina italiana. Pizza al forno, pasta, musica e più ambienti per vivere la notte.',
        traits: ['Forno a legna', 'Cantina', 'Più ambienti'],
      },
    ],
  },
  menu: {
    label: 'Il Menù',
    title: 'Dalla nostra cucina alla tua tavola',
    intro:
      'Una selezione dalla nostra carta, organizzata per casa e categoria. I prezzi possono variare — chiedi al nostro team durante la visita.',
    selectHouse: 'Scegli la casa',
    openPdf: 'Apri il menù completo (PDF)',
    priceNote: 'Prezzi soggetti a variazione',
    from: 'da',
  },
  signature: {
    label: 'Piatti della Casa',
    title: 'Le firme della Famiglia',
    intro: 'Alcuni piatti non cambiano mai — perché la memoria non lo permette.',
    dishes: [
      {
        name: 'Spaghetti al Pomodoro e Basilico',
        house: 'Trattoria',
        desc: 'Salsa di pomodoro fresco, basilico e il giusto tempo di cottura.',
      },
      {
        name: 'Ossobuco alla Milanese',
        house: 'Il Ristorante',
        desc: 'Ossobuco brasato, gremolata e risotto alla milanese allo zafferano.',
      },
      {
        name: 'Tiramisù della Casa',
        house: 'Pizzeria',
        desc: 'Strati di mascarpone, caffè e cacao. Il finale perfetto.',
      },
    ],
  },
  music: {
    label: 'Musica',
    title: 'La notte ha una colonna sonora',
    text: 'Quando scende la sera su Avanhandava, la musica dal vivo entra in scena. Voce, piano e classici italiani accompagnano la cena — mai una discoteca, sempre parte della tavola.',
    detail: 'Musica dal vivo · consulta il programma della casa',
  },
  events: {
    label: 'Eventi',
    title: 'Il tuo momento in Avanhandava',
    text: 'Matrimoni, compleanni, ritrovi e celebrazioni private trovano una cornice italiana indimenticabile. I nostri spazi accolgono la tua storia come se fosse di famiglia.',
    types: ['Matrimoni', 'Compleanni', 'Eventi aziendali', 'Celebrazioni private'],
    cta: 'Parliamo del mio evento',
  },
  giftcard: {
    label: 'Gift Card',
    title: 'Regala una tavola italiana',
    text: 'Più di un regalo, un invito. Il Gift Card Famiglia Mancini porta qualcuno di speciale a vivere una sera in Rua Avanhandava.',
    cta: 'Voglio regalare',
  },
  calligraphia: {
    label: 'Calligraphia',
    title: 'L’arte che firma la casa',
    text: 'Calligraphia è l’anima grafica della Famiglia Mancini — il tratto, la calligrafia e l’arte italiana che danno personalità a ogni dettaglio, dal menù alla parete.',
    detail: 'Arte · calligrafia · identità',
  },
  delivery: {
    label: 'Delivery',
    title: 'L’Italia a casa tua',
    text: 'Porta il sapore della Famiglia Mancini a casa. I nostri piatti preparati con la stessa cura della cantina, pronti per il delivery.',
    cta: 'Ordina il delivery',
    note: 'Disponibile tramite le piattaforme di consegna partner',
  },
  gallery: {
    label: 'Galleria',
    title: 'Istanti a tavola',
  },
  street: {
    label: 'L’Indirizzo',
    title: 'Rua Avanhandava',
    text: 'Non si visita solo un ristorante. Si entra in una strada diventata un pezzo d’Italia a San Paolo — con le sue facciate calde, le luci e un profumo che invita.',
  },
  contact: {
    label: 'Contatti',
    title: 'Ci vediamo a tavola',
    addressLabel: 'Indirizzo',
    address: 'Rua Avanhandava, 81 — Bela Vista, San Paolo · SP',
    phoneLabel: 'Prenotazioni',
    hoursLabel: 'Orari',
    hours: 'Aperto tutti i giorni a pranzo e cena',
    call: 'Chiama',
    directions: 'Indicazioni',
  },
  footer: {
    statement: 'Ci vediamo a tavola.',
    tagline: 'Dal 1980, la tavola resta apparecchiata.',
    nav: 'Navigazione',
    language: 'Lingua',
    follow: 'Seguici',
    rights: 'Tutti i diritti riservati.',
    made: 'Rua Avanhandava · San Paolo',
  },
}

export const dictionaries: Record<Lang, Dict> = { pt, en, it }
export type Dictionary = Dict
