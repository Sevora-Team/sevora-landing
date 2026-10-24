import { links } from '@/data/links';
import type { NavItem, SiteLink } from './routes';

const plural = new Intl.PluralRules('sr-Latn');

/** A count with its Serbian noun form: one (1, 21, …), few (2–4, 22–24, …) or other. */
function count(n: number, one: string, few: string, other: string): string {
  const form = plural.select(n);
  return `${n} ${form === 'one' ? one : form === 'few' ? few : other}`;
}

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
      { label: 'Tržišta', section: 'trzista' },
      { label: 'Platforma', section: 'platforma' },
      { label: 'Akademija', section: 'akademija', page: 'academy' },
      { label: 'Alati i partneri', section: 'ekosistem' },
      { label: 'Paketi', section: 'paketi', page: 'plans' },
      { label: 'Kontakt', page: 'contact' },
    ] satisfies NavItem[],
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
    ] satisfies { text: string; tone?: 'accent' | 'muted' }[],
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
          'Akademija: nivoi 0–1',
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
          'Akademija: nivoi 0–3',
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
          'Cela Akademija i strateška sesija',
        ],
        cta: 'Izaberi Premium',
      },
    },
    guarantee: '30 dana garancija povrata novca, bez pitanja.',
    compare: 'Uporedi pakete',
    teaserLead:
      'Tri paketa, od besplatnog do profesionalnog. Mesečno ili godišnje, uz 10% popusta.',
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
    title: 'Pošalji poruku',
    lead: 'Popuni formu i javićemo ti se na email.',
    firstName: 'Ime',
    firstNamePlaceholder: 'Petar',
    lastName: 'Prezime',
    lastNamePlaceholder: 'Petrović',
    email: 'Email',
    emailPlaceholder: 'ime@primer.rs',
    phone: 'Broj telefona',
    phonePlaceholder: '+381 6x xxx xxxx',
    phoneHint: 'Opciono — ako želiš da te pozovemo.',
    topic: 'Vrsta upita',
    topicPlaceholder: 'Izaberi vrstu upita',
    topics: [
      'Paketi i plaćanje',
      'Tehnička podrška',
      'Akademija',
      'Partnerski program',
      'Saradnja',
      'Drugo',
    ],
    message: 'Poruka',
    messagePlaceholder: 'Napiši nam kako možemo da pomognemo…',
    consent: {
      before: 'Slanjem poruke prihvataš ',
      link: 'politiku privatnosti',
      after: '. Podatke koristimo samo da bismo ti odgovorili.',
    },
    trap: 'Ostavi ovo polje prazno',
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
          { label: 'Tržišta', page: 'home', hash: 'trzista' },
          { label: 'Kalendar', page: 'home', hash: 'platforma' },
          { label: 'Vesti', page: 'home', hash: 'platforma' },
          { label: 'Scenariji', page: 'home', hash: 'plan' },
        ],
      },
      {
        title: 'Alati',
        links: [
          { label: 'Žurnal', page: 'home', hash: 'platforma' },
          { label: 'AI mentor', page: 'home', hash: 'platforma' },
          { label: 'Bot dashboard', page: 'home', hash: 'platforma' },
          { label: 'Prodavnica', href: links.shop },
        ],
      },
      {
        title: 'Učenje',
        links: [
          { label: 'Akademija', page: 'academy' },
          { label: 'Rečnik', href: links.glossary },
          { label: 'Blog', href: links.blog },
        ],
      },
      {
        title: 'Kompanija',
        links: [
          { label: 'Paketi', page: 'plans' },
          { label: 'Partnerski program', href: links.affiliate },
          { label: 'Kontakt', page: 'contact' },
          { label: 'Uslovi korišćenja', href: links.terms },
          { label: 'Privatnost', href: links.privacy },
        ],
      },
    ] satisfies { title: string; links: SiteLink[] }[],
    risk: 'Upozorenje o riziku: trgovanje forex parovima, metalima, kriptovalutama, indeksima i drugim finansijskim instrumentima nosi visok rizik i nije pogodno za svakoga. Sadržaj i alati na ovom sajtu su analitički i edukativni i ne predstavljaju investicioni savet. Prošli rezultati ne garantuju buduće.',
    copyright: '© 2026 SEVORA',
    legal: '[PRAVNO LICE · PIB · ADRESA]',
  },
  breadcrumb: {
    label: 'Putanja',
    home: 'Početna',
  },
  academyPage: {
    meta: {
      title: 'Akademija trejdinga: od nule do profesionalnog nivoa · SEVORA',
      description:
        'Kurs trejdinga na srpskom u 6 nivoa: od osnova tržišta, grafikona i indikatora do upravljanja rizikom, sopstvene strategije i demo naloga. Nivoi 0 i 1 su besplatni.',
    },
    name: 'Akademija',
    title: 'Savladaj način razmišljanja. Savladaj tržište.',
    lead: 'Put od apsolutne nule do profesionalnog trejdera, u šest nivoa. Svaki nivo gradi na prethodnom — bez preskakanja osnova.',
    start: 'Počni od nivoa 0',
    path: 'Nivoi Akademije',
    statement: [
      { text: 'Šest nivoa, ' },
      { text: '23 modula i 138 lekcija', tone: 'accent' },
      { text: ' — sa proverom znanja posle svakog modula, ' },
      { text: 'na srpskom i engleskom.', tone: 'muted' },
    ] satisfies { text: string; tone?: 'accent' | 'muted' }[],
    level: {
      startFree: 'Počni besplatno',
      includedIn: (plan: string) => `Uključeno u ${plan}`,
      check: 'Provera posle svakog modula',
      toggle: (n: number) => `Pogledaj module (${n})`,
      modules: (n: number) => count(n, 'modul', 'modula', 'modula'),
      lessons: (n: number) => count(n, 'lekcija', 'lekcije', 'lekcija'),
    },
    learn: {
      title: 'Kako učiš u Akademiji',
      items: [
        {
          title: 'Lekcije korak po korak',
          text: 'Kratke lekcije koje se nadovezuju jedna na drugu.',
        },
        {
          title: 'Provera posle svakog modula',
          text: 'Kviz, praktičan zadatak ili simulacija pre nego što kreneš dalje.',
        },
        {
          title: 'Bedževi za napredak',
          text: 'Završeni moduli donose bedževe, a kraj Akademije SEVORA diplomu.',
        },
        { title: 'Na srpskom i engleskom', text: 'Ceo program je dostupan na oba jezika.' },
      ],
    },
    quote: [
      { text: 'Disciplina danas, sloboda sutra. ' },
      { text: 'Tržište nagrađuje strpljenje, ', tone: 'accent' },
      { text: 'ne emocije.', tone: 'muted' },
    ] satisfies { text: string; tone?: 'accent' | 'muted' }[],
    quoteBy: 'SEVORA Akademija',
    learnFree: 'Počni da učiš besplatno',
  },
  plansPage: {
    meta: {
      title: 'Paketi i cene: Besplatno, Starter i Premium · SEVORA',
      description:
        'Uporedi SEVORA pakete: besplatan nalog, Starter sa AI dnevnim planom, žurnalom i AI mentorom, i Premium sa bot dashboardom i prop firm alatima. Mesečno ili godišnje uz 10% popusta.',
    },
    name: 'Paketi',
    title: 'Paketi za svaki nivo trejdinga',
    lead: 'Počni besplatno i nadogradi kad ti zatrebaju napredni alati. Mesečno ili godišnje — uz godišnju pretplatu štediš 10% na svakom paketu.',
    comparison: {
      title: 'Uporedi pakete',
      lead: 'Sve što dobijaš u svakom paketu, na jednom mestu.',
      feature: 'Funkcija',
      note: 'Funkcije i limiti mogu se menjati kako platforma raste.',
      choose: ['Napravi nalog', 'Izaberi', 'Izaberi'],
      included: 'Uključeno',
      notIncluded: 'Nije uključeno',
      groups: [
        {
          title: 'Analiza i tržišta',
          rows: [
            { feature: 'Pregled zlata', cells: [true, true, true] },
            {
              feature: 'Svi instrumenti (forex, kripto, indeksi, robe)',
              cells: [false, true, true],
            },
            { feature: 'AI dnevni plan', cells: [false, true, true] },
            { feature: 'Ključni nivoi', cells: ['Prvi nivo', 'Svi nivoi', 'Svi nivoi'] },
            { feature: 'Scenariji sa ulazom i invalidacijom', cells: [false, true, true] },
            { feature: 'Napredna AI analiza', cells: [false, false, true] },
          ],
        },
        {
          title: 'Alati',
          rows: [
            { feature: 'Ekonomski kalendar', cells: ['Osnovni', 'Ceo', 'Ceo'] },
            { feature: 'Vesti', cells: ['3 dnevno', 'Bez ograničenja', 'Bez ograničenja'] },
            { feature: 'AI mentor', cells: [false, '50 poruka dnevno', 'Bez ograničenja'] },
            { feature: 'Cenovni alarmi', cells: [false, '10', 'Bez ograničenja'] },
            { feature: 'Žurnal sa analitikom', cells: [false, true, true] },
          ],
        },
        {
          title: 'Automatizacija',
          rows: [
            { feature: 'Bot dashboard (MT5)', cells: [false, false, 'Pun pristup'] },
            { feature: 'Prop firm alati', cells: [false, false, true] },
          ],
        },
        {
          title: 'Učenje i podrška',
          rows: [
            { feature: 'Akademija', cells: ['Nivoi 0–1', 'Nivoi 0–3', 'Svi nivoi'] },
            { feature: 'Zajednica', cells: [true, 'Discord', 'Discord VIP'] },
            { feature: 'Podrška', cells: ['Email', 'Email', 'Prioritetna'] },
            { feature: 'Mesečna strateška sesija', cells: [false, false, true] },
          ],
        },
      ] satisfies { title: string; rows: { feature: string; cells: (string | boolean)[] }[] }[],
      trust: [
        {
          title: '30 dana garancija',
          text: 'Ako nisi zadovoljan, vraćamo ceo iznos, bez pitanja.',
        },
        {
          title: 'Otkaži kad hoćeš',
          text: 'Bez ugovorne obaveze. Pretplata važi do kraja plaćenog perioda.',
        },
        { title: 'Sigurno plaćanje', text: 'Plaćanje karticom preko [PROVAJDER PLAĆANJA].' },
      ],
    },
    faq: {
      title: 'Pitanja o plaćanju',
      lead: 'Ne vidiš odgovor? Piši nam i pomoći ćemo ti da izabereš pravi paket.',
      contact: 'Kontaktiraj nas',
      items: [
        {
          question: 'Kako funkcioniše godišnja pretplata?',
          answer: 'Plaćaš jednom godišnje i dobijaš 10% popusta na mesečnu cenu svakog paketa.',
        },
        {
          question: 'Mogu li da promenim paket kasnije?',
          answer: 'Da. Prelazak na viši paket važi odmah. [USLOVI ZA PRELAZAK NA NIŽI PAKET]',
        },
        {
          question: 'Kako radi garancija povrata novca?',
          answer:
            'Ako u prvih 30 dana zaključiš da ti SEVORA ne odgovara, vraćamo ceo iznos, bez pitanja.',
        },
        { question: 'Koje načine plaćanja prihvatate?', answer: '[NAČINI PLAĆANJA]' },
        {
          question: 'U kojoj valuti se plaća?',
          answer:
            'Na srpskoj verziji sajta cene su u dinarima, a na engleskoj u evrima. [VALUTA NAPLATE]',
        },
        {
          question: 'Da li postoji probni period?',
          answer:
            'Besplatni paket nema vremensko ograničenje, a za plaćene pakete važi 30 dana garancija povrata novca.',
        },
      ],
    },
    cta: {
      title: 'Nisi siguran koji paket da izabereš?',
      lead: 'Počni besplatno ili nam piši — pomoći ćemo ti da izabereš.',
      contact: 'Kontaktiraj nas',
    },
  },
  contactPage: {
    meta: {
      title: 'Kontakt · SEVORA',
      description:
        'Piši SEVORA timu: pitanja o paketima i plaćanju, tehnička podrška, Akademija, partnerski program i saradnja. Email, Discord zajednica ili forma za poruku.',
    },
    name: 'Kontakt',
    title: 'Kontaktiraj nas',
    lead: 'Tu smo za pitanja o paketima, tehničku pomoć i saradnju. Izaberi kanal koji ti najviše odgovara.',
    channels: {
      email: {
        title: 'Email podrška',
        text: 'Za pitanja o nalogu, paketima i plaćanju.',
        value: '[EMAIL ADRESA]',
      },
      discord: {
        title: 'Discord zajednica',
        text: 'Najbrži odgovori od tima i drugih trejdera.',
        value: 'Pridruži se zajednici',
      },
      partners: {
        title: 'Saradnja i partnerstva',
        text: 'Partnerski program, mediji i poslovni upiti.',
        value: '[EMAIL ZA SARADNJU]',
      },
    },
    quick: {
      title: 'Možda je odgovor već ovde',
      links: [
        { label: 'Uporedi pakete i cene', page: 'plans' },
        { label: 'Pitanja o plaćanju i povratu novca', page: 'plans', hash: 'pitanja' },
        { label: 'Program Akademije po nivoima', page: 'academy' },
        { label: 'Partnerski program', page: 'home', hash: 'ekosistem' },
      ] satisfies SiteLink[],
    },
    hours: {
      title: 'Podrška',
      rows: [
        { label: 'Ponedeljak – petak', value: '[VREME] CET' },
        { label: 'Vikend', value: 'Discord zajednica' },
        { label: 'Vreme odgovora', value: 'do [VREME]' },
      ],
      note: 'Za hitne tehničke probleme najbrže je preko Discorda.',
    },
    company: {
      title: 'Podaci o firmi',
      rows: [
        { label: 'Naziv', value: '[PRAVNO LICE]' },
        { label: 'PIB / MB', value: '[PIB] / [MB]' },
        { label: 'Adresa', value: '[ADRESA]' },
      ],
    },
  },
  notFound: {
    title: 'Stranica nije pronađena',
    body: 'Stranica koju tražiš ne postoji ili je premeštena.',
    home: 'Idi na početnu',
  },
};

export type Dictionary = typeof sr;
