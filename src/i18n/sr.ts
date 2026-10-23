import { links } from '@/data/links';

export const sr = {
  meta: {
    title: 'SEVORA',
    description:
      'AI analiza tržišta, dnevni planovi, žurnal, mentor i akademija — sve što ti treba da trguješ promišljeno.',
  },
  language: 'Jezik',
  nav: {
    label: 'Glavna navigacija',
    menu: 'Meni',
    items: [
      { label: 'Početna', href: '#top' },
      { label: 'Tržišta', href: '#trzista' },
      { label: 'Platforma', href: '#platforma' },
      { label: 'Akademija', href: '#akademija' },
      { label: 'Alati i partneri', href: '#ekosistem' },
      { label: 'Paketi', href: '#paketi' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  actions: {
    login: 'Prijavi se',
    start: 'Počni besplatno',
    seePlans: 'Pogledaj pakete',
    more: 'Saznaj više',
  },
  sample: 'Primer podataka',
  hero: {
    title: 'Ceo tvoj trejding dan na jednom mestu',
    lead: 'AI analiza tržišta, dnevni planovi, žurnal, mentor i akademija — sve što ti treba da trguješ promišljeno. Na srpskom i engleskom.',
    primary: 'Otvori nalog',
    secondary: 'Pogledaj platformu',
    markets: 'Zlato i metali · Forex · Kripto · Indeksi · Robe',
  },
  about: {
    title: 'Jedan centar za analizu, plan i učenje',
    lead: 'Alati koji rade zajedno, umesto deset aplikacija koje ne razgovaraju međusobno.',
    analysis: {
      title: 'Analiza za svako tržište',
      text: 'Zlato, forex, kripto, indeksi i robe na jednom ekranu, sa biasom i ključnim nivoima.',
      cta: 'Pogledaj tržišta',
    },
    mentor: {
      title: 'AI koji objašnjava, ne samo signalizira',
      text: 'Mentor koji čita tržište, kalendar i tvoj žurnal, i kaže zašto.',
      cta: 'Upoznaj AI mentora',
    },
    academy: {
      label: 'Lekcija u Akademiji',
      value: '138',
      text: 'Od apsolutne nule do profesionalnog nivoa, kroz 6 nivoa i 23 modula.',
    },
  },
  markets: {
    title: 'Dnevni plan za tržišta koja pratiš',
    lead: 'Bias, ključni nivoi i scenariji za zlato, forex, kripto i indekse — isto što vidiš u dashu, bez buke.',
    primary: 'Otvori dash',
    secondary: 'Svi instrumenti',
    session: 'London',
    symbolsLabel: 'Instrument',
    tickerTitle: 'Tržišta koja pratimo',
    sampleNote: 'Primer podataka · Ažurirano 07:45 CET · Linija: prosek 10 sveća',
    long: 'Long bias',
    short: 'Short bias',
    pivot: 'Pivot',
    chartLabel: (symbol: string) => `Grafikon ${symbol} sa ključnim nivoima, primer podataka`,
    plan: (bias: 'long' | 'short', pivot: string, invalidation: string) =>
      bias === 'long'
        ? `Dok je cena iznad pivota ${pivot}, bias ostaje long sa ciljem na R1. Zatvaranje sata ispod ${invalidation} poništava plan.`
        : `Dok je cena ispod pivota ${pivot}, bias ostaje short sa ciljem na S1. Zatvaranje sata iznad ${invalidation} poništava plan.`,
  },
  price: {
    up: 'rast',
    down: 'pad',
    flat: 'bez promene',
  },
  platform: {
    statement: [
      { text: 'SEVORA je trejding centar za one koji žele ' },
      { text: 'jasan plan', tone: 'accent' },
      { text: ', ' },
      { text: 'alate koji rade zajedno', tone: 'accent' },
      { text: ' i ' },
      { text: 'učenje na svom jeziku', tone: 'muted' },
      { text: ' — od prvog trejda do profesionalnog nivoa.' },
    ],
    toolsCount: '10 alata u jednoj platformi',
    prev: 'Prethodna kartica',
    next: 'Sledeća kartica',
    features: {
      analysis: {
        title: 'AI analiza tržišta',
        text: 'Prati sve vremenske okvire i ističe bias, nivoe i setape.',
        tier: 'Starter',
      },
      plan: {
        title: 'Dnevni plan',
        text: 'Bias, ključne zone i šta menja sliku, pre otvaranja sesije.',
        tier: 'Starter',
      },
      scenarios: {
        title: 'Scenariji',
        text: 'Bikovski, medveđi i neutralni — sa ulazom, ciljem i invalidacijom.',
        tier: 'Starter',
      },
      journal: {
        title: 'Pametni žurnal',
        text: 'Beleži trejdove, prati statistiku i dobij AI osvrt na greške.',
        tier: 'Starter',
      },
      mentor: {
        title: 'AI mentor',
        text: 'Pitaj zašto se tržište kreće i šta da izbegavaš danas.',
        tier: 'Starter',
      },
      alerts: {
        title: 'Cenovni alarmi',
        text: 'Obaveštenje kada cena dođe do nivoa koji pratiš.',
        tier: 'Starter',
      },
      calendar: {
        title: 'Kalendar i vesti',
        text: 'Događaji koji pomeraju tržište, sa procenom rizika.',
        tier: 'Besplatno',
      },
      bots: {
        title: 'Bot dashboard',
        text: 'Poveži MT5 i upravljaj automatizacijom uz jasna pravila rizika.',
        tier: 'Premium',
      },
      propFirm: {
        title: 'Prop firm alati',
        text: 'Dnevni limiti, drawdown i napredak izazova na jednom mestu.',
        tier: 'Premium',
      },
      academy: {
        title: 'Akademija',
        text: 'Šest nivoa, od osnova do profesionalnog trejdinga.',
        tier: 'Besplatno',
      },
    },
  },
  teaser: {
    title: 'Deo plana je uvek besplatan',
    lead: 'Pregled zlata i opšti bias su otvoreni. Svi nivoi, scenariji i ažuriranja tokom sesije su u Starter i Premium paketu.',
    cta: 'Otključaj ceo plan',
    snapshot: 'Uvid u današnji plan',
    unlock: 'Otključaj',
    locked: 'Zaključano',
    levels: {
      title: 'Nivoi za danas',
      text: 'Gde cena najverovatnije reaguje.',
      footer: 'Još 3 nivoa u Starter paketu',
    },
    scenarios: {
      title: 'Scenariji',
      text: 'Ulaz, cilj i invalidacija za oba smera.',
      footer: 'Scenariji u Starter paketu',
      rows: ['Scenario A', 'Scenario B', 'Invalidacija'],
    },
  },
  steps: {
    title: 'Tri koraka do promišljenijeg trejdinga',
    items: {
      connect: {
        title: 'Poveži se',
        text: 'Napravi nalog i poveži MT5 platformu. Sve se sinhronizuje automatski.',
      },
      analyze: {
        title: 'Analiziraj',
        text: 'AI prati tržišta 24/7, ističe ključne nivoe i setape koje vredi pratiti.',
      },
      act: {
        title: 'Deluj i uči',
        text: 'Prati plan, beleži trejdove u žurnal i uči iz svakog ishoda.',
      },
    },
  },
  academy: {
    title: 'Savladaj način razmišljanja. Savladaj tržište.',
    lead: 'Akademija vodi od apsolutne nule do profesionalnog nivoa. Disciplina danas, sloboda sutra.',
    cta: 'Počni da učiš',
    stats: [
      { value: '6', label: 'nivoa' },
      { value: '23', label: 'modula' },
      { value: '138', label: 'lekcija' },
    ],
    levels: [
      { level: 'Nivo 0', title: 'Apsolutna nula', meta: '4 modula · 28 lekcija' },
      { level: 'Nivo 1', title: 'Osnove', meta: '3 modula · 18 lekcija' },
      { level: 'Nivo 2', title: 'Napredni početnik', meta: '4 modula · 23 lekcije' },
      { level: 'Nivo 3', title: 'Srednji nivo', meta: '3 modula · 21 lekcija' },
      { level: 'Nivo 4', title: 'Napredni nivo', meta: '4 modula · 23 lekcije' },
      { level: 'Nivo 5', title: 'Profesionalni nivo', meta: '5 modula · 25 lekcija' },
    ],
  },
  ecosystem: {
    shop: {
      title: 'Prodavnica alata',
      text: 'Indikatori, AI alati i šabloni koje je napravio SEVORA tim — kupuješ jednom, koristiš zauvek.',
      items: [
        'Gold Zones indikator',
        'News Impact skener',
        'Risk kalkulator · besplatno',
        'Prop Firm dashboard',
        'Smart Money alat',
        'Šabloni za skalping',
      ],
      cta: 'Otvori prodavnicu',
    },
    affiliate: {
      title: 'Partnerski program',
      text: 'Pozovi trejdere i zarađuj dok rastemo zajedno.',
      stat: '30%',
      statText: 'provizije na svaku uplatu pretplate, bez limita',
      steps: ['Podeli svoj link', 'Trejderi se pretplate', 'Dobijaš 30% od svake uplate'],
      cta: 'Postani partner',
    },
  },
  pricing: {
    title: 'Počni besplatno, nadogradi kad ti zatreba',
    lead: 'Mesečna ili godišnja pretplata — uz godišnju štediš 10% na svakom paketu.',
    billingLabel: 'Način plaćanja',
    monthly: 'Mesečno',
    yearly: 'Godišnje',
    perMonth: '/ mesečno',
    forever: 'zauvek',
    noteFree: 'Bez kartice, bez obaveze.',
    noteMonthly: 'Naplata mesečno, otkaži kad hoćeš.',
    noteYearly: (total: string) => `Naplata godišnje: ${total}`,
    included: 'Uključeno',
    plans: {
      free: {
        name: 'Besplatno',
        description: 'Osnovni alati za početak.',
        items: [
          'Osnovni pregled zlata',
          'Vesti (3 dnevno)',
          'Osnovni ekonomski kalendar',
          'Pristup zajednici',
          'Akademija: početni nivoi',
        ],
        cta: 'Napravi nalog',
      },
      starter: {
        name: 'Starter',
        description: 'Kompletan AI trejding paket.',
        items: [
          'AI dnevni plan i scenariji',
          'Svi instrumenti i ključni nivoi',
          'AI mentor (50 poruka dnevno)',
          'Cenovni alarmi (10)',
          'Žurnal sa analitikom',
          'Ceo ekonomski kalendar',
          'Discord pristup',
        ],
        cta: 'Izaberi Starter',
      },
      premium: {
        name: 'Premium',
        description: 'Kompletan profesionalni paket.',
        items: [
          'Sve iz Starter paketa',
          'Bot dashboard (pun pristup)',
          'Prop firm alati',
          'Napredna AI analiza',
          'Neograničen AI mentor i alarmi',
          'Discord VIP i prioritetna podrška',
          'Mesečna strateška sesija',
        ],
        cta: 'Izaberi Premium',
      },
    },
    guarantee: '30 dana garancija povrata novca, bez pitanja.',
  },
  faq: {
    title: 'Česta pitanja',
    items: [
      {
        question: 'Da li je ovo investicioni savet?',
        answer:
          'Ne. SEVORA objavljuje analizu, alate i edukativni sadržaj. Odluke o trgovanju i rizik su tvoji.',
      },
      {
        question: 'Koja tržišta pratite?',
        answer:
          'Zlato i srebro, glavne forex parove, kripto, indekse i robe poput nafte. Zlato ima najdetaljniji dnevni plan.',
      },
      {
        question: 'Šta je MT5 i čemu služi povezivanje?',
        answer:
          'MetaTrader 5 (MT5) je trejding platforma koju nudi većina brokera. Kada ga povežeš sa SEVORA-om, trejdovi se automatski upisuju u žurnal sa statistikom, a bot dashboard može da radi po pravilima rizika koja sam postaviš. Povezuješ ga podacima svog MT5 naloga (server i login ID).',
      },
      {
        question: 'Da li moram da povežem MT5?',
        answer:
          'Za analizu, planove i Akademiju ne. MT5 povezuješ za automatski žurnal i bot dashboard.',
      },
      {
        question: 'Da li botovi trguju umesto mene?',
        answer:
          'Botove pokrećeš i zaustavljaš ti, uz pravila rizika koja sam postaviš: rizik po trejdu, dnevni limit gubitka i dozvoljene sesije.',
      },
      {
        question: 'Mogu li da otkažem pretplatu?',
        answer:
          'Da, u svakom trenutku. Imaš i 30 dana garancije povrata novca. [USLOVI OTKAZIVANJA]',
      },
    ],
  },
  contact: {
    title: 'Kontaktiraj nas',
    lead: 'Pitanje o paketima, tehnička pomoć ili saradnja — piši nam i javićemo ti se.',
    channels: {
      email: { title: 'Email', text: '[EMAIL ADRESA]' },
      discord: { title: 'Discord zajednica', text: 'Najbrži odgovori od tima i trejdera' },
      response: { title: 'Vreme odgovora', text: 'Radnim danima, u roku od [VREME]' },
    },
    name: 'Ime i prezime',
    namePlaceholder: 'Petar Petrović',
    email: 'Email',
    emailPlaceholder: 'ime@primer.rs',
    topic: 'Tema',
    topics: ['Paketi i plaćanje', 'Tehnička podrška', 'Partnerski program', 'Saradnja', 'Drugo'],
    message: 'Poruka',
    messagePlaceholder: 'Napiši nam kako možemo da pomognemo…',
    consent:
      'Slanjem poruke prihvataš [politiku privatnosti]. Podatke koristimo samo da bismo ti odgovorili.',
    send: 'Pošalji poruku',
    sending: 'Šaljem…',
    doneTitle: 'Poruka je poslata',
    doneText: 'Hvala ti. Javićemo ti se na email u najkraćem roku.',
    again: 'Pošalji novu poruku',
    error: 'Poruka nije poslata. Pokušaj ponovo ili nam piši na email.',
  },
  cta: {
    title: 'Tržišta se brzo kreću. Budi spreman.',
    lead: 'Napravi besplatan nalog i pogledaj današnji plan pre otvaranja Londona.',
  },
  footer: {
    about: 'Trejding centar sa AI analizom, alatima i akademijom, na srpskom i engleskom.',
    columns: [
      {
        title: 'Platforma',
        links: [
          { label: 'Dashboard', href: links.dashboard },
          { label: 'Tržišta', href: '#trzista' },
          { label: 'Kalendar', href: '#platforma' },
          { label: 'Vesti', href: '#platforma' },
          { label: 'Scenariji', href: '#plan' },
        ],
      },
      {
        title: 'Alati',
        links: [
          { label: 'Žurnal', href: '#platforma' },
          { label: 'AI mentor', href: '#platforma' },
          { label: 'Bot dashboard', href: '#platforma' },
          { label: 'Prodavnica', href: links.shop },
        ],
      },
      {
        title: 'Učenje',
        links: [
          { label: 'Akademija', href: '#akademija' },
          { label: 'Rečnik', href: links.glossary },
          { label: 'Blog', href: links.blog },
        ],
      },
      {
        title: 'Kompanija',
        links: [
          { label: 'O nama', href: '#o-nama' },
          { label: 'Partnerski program', href: links.affiliate },
          { label: 'Kontakt', href: '#kontakt' },
          { label: 'Uslovi korišćenja', href: links.terms },
          { label: 'Privatnost', href: links.privacy },
        ],
      },
    ],
    risk: 'Upozorenje o riziku: trgovanje forex parovima, metalima, kriptovalutama, indeksima i drugim finansijskim instrumentima nosi visok rizik i nije pogodno za svakoga. Sadržaj i alati na ovom sajtu su analitički i edukativni i ne predstavljaju investicioni savet. Prošli rezultati ne garantuju buduće.',
    copyright: '© 2026 SEVORA',
    legal: '[PRAVNO LICE · PIB · ADRESA]',
  },
  notFound: {
    title: 'Stranica nije pronađena',
    body: 'Stranica koju tražiš ne postoji ili je premeštena.',
    home: 'Nazad na početnu',
  },
};

export type Dictionary = typeof sr;
