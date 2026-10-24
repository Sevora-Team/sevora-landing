import { links } from '@/data/links';
import type { Dictionary } from './sr';

export const en: Dictionary = {
  meta: {
    title: 'SEVORA',
    description:
      'AI market analysis, daily plans, a journal, a mentor and an academy — everything you need to trade with intent.',
  },
  language: 'Language',
  nav: {
    label: 'Main navigation',
    menu: 'Menu',
    items: [
      { label: 'About', page: 'about' },
      { label: 'Academy', page: 'academy' },
      { label: 'Plans', page: 'plans' },
      { label: 'Contact', page: 'contact' },
    ],
  },
  actions: {
    login: 'Log in',
    start: 'Start for free',
    seePlans: 'See plans',
    more: 'Learn more',
  },
  sample: 'Sample data',
  hero: {
    title: 'Your whole trading day, in one place',
    lead: 'AI market analysis, daily plans, a journal, a mentor and an academy — everything you need to trade with intent. In English and Serbian.',
    primary: 'Open an account',
    secondary: 'Explore the platform',
    markets: 'Gold and metals · Forex · Crypto · Indices · Commodities',
    scrollCue: 'Scroll to the next section',
    scroll: 'Scroll',
    swipe: 'Swipe',
  },
  about: {
    title: 'One hub for analysis, planning and learning',
    lead: 'Tools that work together, instead of ten apps that don’t talk to each other.',
    analysis: {
      title: 'Analysis for every market',
      text: 'Gold, forex, crypto, indices and commodities on one screen, with bias and key levels.',
      cta: 'See the markets',
    },
    mentor: {
      title: 'AI that explains, not just signals',
      text: 'A mentor that reads the market, the calendar and your journal, and tells you why.',
      cta: 'Meet the AI mentor',
    },
    academy: {
      label: 'Lessons in the Academy',
      value: '138',
      text: 'From absolute zero to professional, across 6 levels and 23 modules.',
    },
  },
  markets: {
    title: 'A daily plan for the markets you trade',
    lead: 'Bias, key levels and scenarios for gold, forex, crypto and indices — what you see in the dash, without the noise.',
    primary: 'Open the dash',
    secondary: 'All instruments',
    session: 'London',
    symbolsLabel: 'Instrument',
    tickerTitle: 'Markets we track',
    sampleNote: 'Sample data · Updated 07:45 CET · Line: 10-candle average',
    long: 'Long bias',
    short: 'Short bias',
    pivot: 'Pivot',
    chartLabel: (symbol) => `${symbol} chart with key levels, sample data`,
    plan: (bias, pivot, invalidation) =>
      bias === 'long'
        ? `While price holds above the ${pivot} pivot, the bias stays long with R1 as the target. An hourly close below ${invalidation} invalidates the plan.`
        : `While price stays below the ${pivot} pivot, the bias stays short with S1 as the target. An hourly close above ${invalidation} invalidates the plan.`,
  },
  price: {
    up: 'up',
    down: 'down',
    flat: 'unchanged',
  },
  platform: {
    statement: [
      { text: 'SEVORA is a trading hub for people who want ' },
      { text: 'a clear plan', tone: 'accent' },
      { text: ', ' },
      { text: 'tools that work together', tone: 'accent' },
      { text: ' and ' },
      { text: 'learning in their own language', tone: 'muted' },
      { text: ' — from the first trade to a professional level.' },
    ],
    toolsCount: '10 tools in one platform',
    prev: 'Previous card',
    next: 'Next card',
    features: {
      analysis: {
        title: 'AI market analysis',
        text: 'Scans every timeframe and highlights bias, levels and setups.',
        tier: 'Starter',
      },
      plan: {
        title: 'Daily plan',
        text: 'Bias, key zones and what changes the picture, before the session opens.',
        tier: 'Starter',
      },
      scenarios: {
        title: 'Scenarios',
        text: 'Bullish, bearish and neutral — with entry, target and invalidation.',
        tier: 'Starter',
      },
      journal: {
        title: 'Smart journal',
        text: 'Log trades, track your stats and get an AI review of your mistakes.',
        tier: 'Starter',
      },
      mentor: {
        title: 'AI mentor',
        text: 'Ask why the market is moving and what to avoid today.',
        tier: 'Starter',
      },
      alerts: {
        title: 'Price alerts',
        text: 'Get notified when price reaches the levels you watch.',
        tier: 'Starter',
      },
      calendar: {
        title: 'Calendar and news',
        text: 'The events that move markets, with a risk rating.',
        tier: 'Free',
      },
      bots: {
        title: 'Bot dashboard',
        text: 'Connect MT5 and run automation with clear risk rules.',
        tier: 'Premium',
      },
      propFirm: {
        title: 'Prop firm tools',
        text: 'Daily limits, drawdown and challenge progress in one place.',
        tier: 'Premium',
      },
      academy: {
        title: 'Academy',
        text: 'Six levels, from the basics to professional trading.',
        tier: 'Free',
      },
    },
  },
  steps: {
    title: 'Three steps to more deliberate trading',
    items: {
      connect: {
        title: 'Connect',
        text: 'Create your account and link your MT5 platform. Everything syncs automatically.',
      },
      analyze: {
        title: 'Analyze',
        text: 'AI watches the markets 24/7 and highlights the key levels and setups worth tracking.',
      },
      act: {
        title: 'Act and learn',
        text: 'Follow the plan, log your trades in the journal and learn from every outcome.',
      },
    },
  },
  academy: {
    stats: [
      { value: '6', label: 'levels' },
      { value: '23', label: 'modules' },
      { value: '138', label: 'lessons' },
    ],
  },
  ecosystem: {
    shop: {
      title: 'Tool shop',
      text: 'Indicators, AI tools and templates built by the SEVORA team — buy once, use for good.',
      items: [
        'Gold Zones indicator',
        'News Impact scanner',
        'Risk calculator · free',
        'Prop Firm dashboard',
        'Smart Money tool',
        'Scalping templates',
      ],
      cta: 'Open the shop',
    },
    affiliate: {
      title: 'Affiliate program',
      text: 'Invite traders and earn as we grow together.',
      stat: '30%',
      statText: 'commission on every subscription payment, no limits',
      steps: ['Share your link', 'Traders subscribe', 'You earn 30% of every payment'],
      cta: 'Become a partner',
    },
  },
  pricing: {
    billingLabel: 'Billing period',
    monthly: 'Monthly',
    yearly: 'Yearly',
    perMonth: '/ month',
    forever: 'forever',
    noteFree: 'No card, no commitment.',
    noteMonthly: 'Billed monthly, cancel anytime.',
    noteYearly: (total) => `Billed yearly: ${total}`,
    included: 'Included',
    plans: {
      free: {
        name: 'Free',
        description: 'Essential tools to get started.',
        items: [
          'Basic gold overview',
          'News (3 per day)',
          'Basic economic calendar',
          'Community access',
          'Academy: levels 0–1',
        ],
        cta: 'Create an account',
      },
      starter: {
        name: 'Starter',
        description: 'The full AI trading suite.',
        items: [
          'AI daily plan and scenarios',
          'All instruments and key levels',
          'AI mentor (50 messages a day)',
          'Price alerts (10)',
          'Journal with analytics',
          'Academy: levels 0–3',
        ],
        cta: 'Choose Starter',
      },
      premium: {
        name: 'Premium',
        description: 'The complete professional package.',
        items: [
          'Everything in Starter',
          'Bot dashboard (full access)',
          'Prop firm tools',
          'Advanced AI analysis',
          'Unlimited AI mentor and alerts',
          'Full Academy and strategy session',
        ],
        cta: 'Choose Premium',
      },
    },
    guarantee: '30-day money-back guarantee, no questions asked.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        question: 'Is this investment advice?',
        answer:
          'No. SEVORA publishes analysis, tools and educational content. Trading decisions and risk are yours.',
      },
      {
        question: 'Which markets do you cover?',
        answer:
          'Gold and silver, the major forex pairs, crypto, indices and commodities such as oil. Gold has the most detailed daily plan.',
      },
      {
        question: 'What is MT5 and why connect it?',
        answer:
          'MetaTrader 5 (MT5) is the trading platform most brokers offer. Once you connect it to SEVORA, your trades are logged in the journal automatically with full stats, and the bot dashboard can run within the risk rules you set. You connect it with your MT5 account details (server and login ID).',
      },
      {
        question: 'Do I need to connect MT5?',
        answer:
          'Not for analysis, plans or the Academy. You connect MT5 for the automatic journal and the bot dashboard.',
      },
      {
        question: 'Do the bots trade for me?',
        answer:
          'You start and stop the bots, with risk rules you set yourself: risk per trade, a daily loss limit and allowed sessions.',
      },
      {
        question: 'Can I cancel my subscription?',
        answer:
          'Yes, at any time. You also get a 30-day money-back guarantee. [CANCELLATION TERMS]',
      },
    ],
  },
  contact: {
    title: 'Send a message',
    lead: 'Fill in the form and we’ll reply by email. Pick an enquiry type for a faster answer.',
    firstName: 'First name',
    firstNamePlaceholder: 'Jane',
    lastName: 'Last name',
    lastNamePlaceholder: 'Smith',
    email: 'Email',
    emailPlaceholder: 'name@example.com',
    phone: 'Phone number',
    phonePlaceholder: '+44 7xxx xxxxxx',
    phoneHint: 'Optional — if you’d like us to call you.',
    topic: 'Enquiry type',
    topicPlaceholder: 'Choose an enquiry type',
    topics: [
      'Plans and billing',
      'Technical support',
      'Academy',
      'Affiliate program',
      'Partnership',
      'Other',
    ],
    message: 'Message',
    messagePlaceholder: 'Tell us how we can help…',
    consent: {
      before: 'By sending this message you accept our ',
      link: 'privacy policy',
      after: '. We only use your details to reply to you.',
    },
    trap: 'Leave this field empty',
    send: 'Send message',
    sending: 'Sending…',
    doneTitle: 'Message sent',
    doneText: 'Thank you. We’ll reply to your email as soon as we can.',
    again: 'Send another message',
    error: 'The message wasn’t sent. Try again or email us.',
  },
  cta: {
    title: 'Markets move fast. Be ready.',
    lead: 'Create a free account and see today’s plan before London opens.',
  },
  footer: {
    about: 'A trading hub with AI analysis, tools and an academy, in English and Serbian.',
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'Dashboard', href: links.dashboard },
          { label: 'Markets', page: 'home', hash: 'trzista' },
          { label: 'Calendar', page: 'home', hash: 'platforma' },
          { label: 'News', page: 'home', hash: 'platforma' },
          { label: 'Scenarios', page: 'home', hash: 'plan' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'Journal', page: 'home', hash: 'platforma' },
          { label: 'AI mentor', page: 'home', hash: 'platforma' },
          { label: 'Bot dashboard', page: 'home', hash: 'platforma' },
          { label: 'Shop', href: links.shop },
        ],
      },
      {
        title: 'Learn',
        links: [
          { label: 'Academy', page: 'academy' },
          { label: 'Glossary', href: links.glossary },
          { label: 'Blog', href: links.blog },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About us', page: 'about' },
          { label: 'Plans', page: 'plans' },
          { label: 'Affiliate program', href: links.affiliate },
          { label: 'Contact', page: 'contact' },
          { label: 'Terms of use', href: links.terms },
          { label: 'Privacy', href: links.privacy },
        ],
      },
    ],
    risk: 'Risk warning: trading forex, metals, cryptocurrencies, indices and other financial instruments carries a high level of risk and is not suitable for everyone. The content and tools on this site are analytical and educational and are not investment advice. Past performance does not guarantee future results.',
    copyright: '© 2026 SEVORA',
    legal: '[LEGAL ENTITY · TAX ID · ADDRESS]',
  },
  breadcrumb: {
    label: 'Breadcrumb',
    home: 'Home',
  },
  aboutPage: {
    meta: {
      title: 'About us · SEVORA',
      description:
        'Who is behind SEVORA and the principles we work by: clarity before action, risk before profit, learning in your language and honesty. Our journey from a community of traders to a platform with an Academy.',
    },
    name: 'About us',
    title: 'Trading with a plan, in your language',
    lead: 'SEVORA started from a simple idea: traders in our region need one place for analysis, planning and learning — clear, honest and free of noise.',
    statement: [
      { text: 'We don’t sell ' },
      { text: 'quick profits', tone: 'muted' },
      { text: '. We build ' },
      { text: 'tools and knowledge', tone: 'accent' },
      { text: ' that help you make ' },
      { text: 'considered decisions', tone: 'accent' },
      { text: ' — every day.' },
    ],
    stats: [
      { value: '5', label: 'market groups' },
      { value: '10', label: 'platform tools' },
      { value: '138', label: 'Academy lessons' },
      { value: '2', label: 'languages' },
    ],
    why: {
      kicker: 'Why we exist',
      title: 'Too many signals, too little explanation',
      paragraphs: [
        'Most trading content is in English, scattered across ten apps and boils down to “buy here, sell there” — with no explanation of why.',
        'So we brought analysis, the daily plan, a journal, an AI mentor and the Academy together in one platform, in Serbian and English.',
        'We start with risk, not profit. Look at the chart: the same trades, only a different risk per trade — and a completely different drawdown.',
      ],
      chart: {
        title: 'Same trades, different risk',
        subtitle: 'Equity over 40 trades, starting at 100',
        riskLabel: 'Risk per trade',
        label: 'Illustrative equity chart for three levels of risk per trade',
        start: 'Trade 1',
        end: 'Trade 40',
        risk: 'Risk per trade',
        change: 'End of period',
        drawdown: 'Max drawdown',
        note: 'Illustration, not a real result: 40 trades, 14 winners, 1:2 risk-to-reward.',
      },
    },
    principles: {
      title: 'The principles we work by',
      lead: 'Four rules that apply to every tool, every lesson and every daily plan.',
      items: [
        {
          title: 'Clarity before action',
          text: 'Every plan says what is happening, why, and what would invalidate it. If you don’t understand a setup, you shouldn’t trade it.',
          points: [
            'Bias always comes with a reason',
            'Clear invalidation for every scenario',
            'No “secret” signals',
          ],
        },
        {
          title: 'Risk before profit',
          text: 'The traders who last are the ones who control their losses. That’s why risk rules are built into the tools, not left for later.',
          points: [
            'Daily limits and drawdown tracking',
            'Risk calculator free for everyone',
            'Bots only run by your rules',
          ],
        },
        {
          title: 'Learning in your language',
          text: 'Terms, lessons and analysis in Serbian, with English when you need it — so you learn faster and understand more deeply.',
          points: [
            'Academy from zero to professional level',
            'Glossary of trading terms',
            'The whole site and platform in SR and EN',
          ],
        },
        {
          title: 'Honesty',
          text: 'We don’t promise profits or show cherry-picked results. Trading carries risk, and we say so openly.',
          points: [
            'No guaranteed returns',
            'Clear terms and a money-back guarantee',
            'Education, not investment advice',
          ],
        },
      ],
    },
    journey: {
      title: 'Our journey',
      lead: 'From a community of traders to a platform with tools and an Academy.',
      items: [
        {
          year: '[YEAR]',
          title: 'Started in the community',
          text: 'The first daily gold plans and market discussions with traders on Discord. [DETAILS]',
        },
        {
          year: '[YEAR]',
          title: 'The Academy',
          text: 'Six levels and 138 lessons — from absolute zero to professional trading.',
        },
        {
          year: '2026',
          title: 'The SEVORA platform',
          text: 'AI analysis, the daily plan, journal, mentor, alerts and prop firm tools in one place.',
        },
        {
          year: 'Next',
          title: 'What we’re building next',
          text: '[PLANS — e.g. mobile app, new markets, new lessons]',
        },
      ],
    },
    team: {
      title: 'The people behind SEVORA',
      lead: 'A small team of traders, educators and developers.',
      members: [
        {
          initials: 'FL',
          name: '[FULL NAME]',
          role: '[ROLE] · Founder',
          text: '[A short note on experience and market focus.]',
        },
        {
          initials: 'FL',
          name: '[FULL NAME]',
          role: '[ROLE] · Academy',
          text: '[A short note on experience teaching traders.]',
        },
        {
          initials: 'FL',
          name: '[FULL NAME]',
          role: '[ROLE] · Platform',
          text: '[A short note on building the tools and AI analysis.]',
        },
      ],
      join: {
        title: 'Join the team',
        text: 'We’re looking for people who share our principles',
        cta: 'Get in touch',
      },
    },
    cta: {
      title: 'Become part of the SEVORA community',
      lead: 'Create a free account, look at today’s plan and start the Academy from level one.',
      contact: 'Contact us',
    },
  },
  academyPage: {
    meta: {
      title: 'Trading academy: from zero to a professional level · SEVORA',
      description:
        'A trading course in 6 levels: from market basics, charts and indicators to risk management, your own strategy and a demo account. Levels 0 and 1 are free.',
    },
    name: 'Academy',
    title: 'Master the mindset. Master the market.',
    lead: 'The path from absolute zero to professional trader, in six levels. Each level builds on the last — no skipping the basics.',
    path: 'Academy levels',
    statement: [
      { text: 'Six levels, ' },
      { text: '23 modules and 138 lessons', tone: 'accent' },
      { text: ' — with a knowledge check after every module, ' },
      { text: 'in English and Serbian.', tone: 'muted' },
    ],
    level: {
      startFree: 'Start for free',
      includedIn: (plan: string) => `Included in ${plan}`,
      check: 'A check after every module',
      toggle: (n: number) => `See modules (${n})`,
      modules: (n: number) => `${n} ${n === 1 ? 'module' : 'modules'}`,
      lessons: (n: number) => `${n} ${n === 1 ? 'lesson' : 'lessons'}`,
    },
    learn: {
      title: 'How you learn in the Academy',
      items: [
        { title: 'Step-by-step lessons', text: 'Short lessons that build on each other.' },
        {
          title: 'A check after every module',
          text: 'A quiz, a practical task or a simulation before you move on.',
        },
        {
          title: 'Badges for progress',
          text: 'Completed modules earn badges, and finishing the Academy earns the SEVORA diploma.',
        },
        {
          title: 'In English and Serbian',
          text: 'The whole curriculum is available in both languages.',
        },
      ],
    },
    quote: [
      { text: 'Discipline today, freedom tomorrow. ' },
      { text: 'The market rewards patience, ', tone: 'accent' },
      { text: 'not emotion.', tone: 'muted' },
    ],
    quoteBy: 'SEVORA Academy',
    learnFree: 'Start learning for free',
  },
  plansPage: {
    meta: {
      title: 'Plans and pricing: Free, Starter and Premium · SEVORA',
      description:
        'Compare SEVORA plans: a free account, Starter with the AI daily plan, journal and AI mentor, and Premium with the bot dashboard and prop firm tools. Monthly or yearly with 10% off.',
    },
    name: 'Plans',
    title: 'Plans for every stage of trading',
    lead: 'Start for free and upgrade when you need the advanced tools. Monthly or yearly — yearly billing saves you 10% on every plan.',
    comparison: {
      title: 'Compare plans',
      lead: 'Everything you get in each plan, in one place.',
      feature: 'Feature',
      note: 'Features and limits may change as the platform grows.',
      choose: ['Sign up', 'Choose', 'Choose'],
      included: 'Included',
      notIncluded: 'Not included',
      groups: [
        {
          title: 'Analysis and markets',
          rows: [
            { feature: 'Gold overview', cells: [true, true, true] },
            {
              feature: 'All instruments (forex, crypto, indices, commodities)',
              cells: [false, true, true],
            },
            { feature: 'AI daily plan', cells: [false, true, true] },
            { feature: 'Key levels', cells: ['First level', 'All levels', 'All levels'] },
            { feature: 'Scenarios with entry and invalidation', cells: [false, true, true] },
            { feature: 'Advanced AI analysis', cells: [false, false, true] },
          ],
        },
        {
          title: 'Tools',
          rows: [
            { feature: 'Economic calendar', cells: ['Basic', 'Full', 'Full'] },
            { feature: 'News', cells: ['3 per day', 'Unlimited', 'Unlimited'] },
            { feature: 'AI mentor', cells: [false, '50 messages a day', 'Unlimited'] },
            { feature: 'Price alerts', cells: [false, '10', 'Unlimited'] },
            { feature: 'Journal with analytics', cells: [false, true, true] },
          ],
        },
        {
          title: 'Automation',
          rows: [
            { feature: 'Bot dashboard (MT5)', cells: [false, false, 'Full access'] },
            { feature: 'Prop firm tools', cells: [false, false, true] },
          ],
        },
        {
          title: 'Learning and support',
          rows: [
            { feature: 'Academy', cells: ['Levels 0–1', 'Levels 0–3', 'All levels'] },
            { feature: 'Community', cells: [true, 'Discord', 'Discord VIP'] },
            { feature: 'Support', cells: ['Email', 'Email', 'Priority'] },
            { feature: 'Monthly strategy session', cells: [false, false, true] },
          ],
        },
      ],
      trust: [
        {
          title: '30-day guarantee',
          text: 'Not satisfied? We refund the full amount, no questions asked.',
        },
        {
          title: 'Cancel anytime',
          text: 'No contract. Your plan stays active until the end of the paid period.',
        },
        { title: 'Secure payment', text: 'Card payments via [PAYMENT PROVIDER].' },
      ],
    },
    faq: {
      title: 'Billing questions',
      lead: 'Can’t find an answer? Write to us and we’ll help you pick the right plan.',
      contact: 'Contact us',
      items: [
        {
          question: 'How does yearly billing work?',
          answer: 'You pay once a year and get 10% off the monthly price of every plan.',
        },
        {
          question: 'Can I change plans later?',
          answer: 'Yes. Upgrades take effect immediately. [DOWNGRADE TERMS]',
        },
        {
          question: 'How does the money-back guarantee work?',
          answer:
            'If within the first 30 days you decide SEVORA isn’t for you, we refund the full amount, no questions asked.',
        },
        { question: 'Which payment methods do you accept?', answer: '[PAYMENT METHODS]' },
        {
          question: 'Which currency am I charged in?',
          answer:
            'Prices are shown in dinars on the Serbian site and in euros on the English site. [BILLING CURRENCY]',
        },
        {
          question: 'Is there a free trial?',
          answer:
            'The Free plan has no time limit, and paid plans come with a 30-day money-back guarantee.',
        },
      ],
    },
    cta: {
      title: 'Not sure which plan to choose?',
      lead: 'Start for free or write to us — we’ll help you decide.',
      contact: 'Contact us',
    },
  },
  contactPage: {
    meta: {
      title: 'Contact · SEVORA',
      description:
        'Write to the SEVORA team: plans and billing, technical support, the Academy, the affiliate program and partnerships. Email, the Discord community or the message form.',
    },
    name: 'Contact',
    title: 'Contact us',
    lead: 'We’re here for questions about plans, technical help and partnerships. Pick the channel that suits you best.',
    channels: {
      email: {
        title: 'Email support',
        text: 'For questions about your account, plans and billing.',
        value: '[EMAIL ADDRESS]',
      },
      discord: {
        title: 'Discord community',
        text: 'The fastest answers from the team and other traders.',
        value: 'Join the community',
      },
      partners: {
        title: 'Partnerships',
        text: 'Affiliate program, media and business enquiries.',
        value: '[PARTNERSHIP EMAIL]',
      },
    },
    next: [
      {
        title: 'It reaches the right person',
        text: 'The enquiry type tells us who on the team should reply.',
      },
      { title: 'We reply by email', text: 'On weekdays, usually within [TIME].' },
      { title: 'We continue your way', text: 'Email, a call or Discord — your choice.' },
    ],
    fast: {
      title: 'Urgent? Message us on Discord',
      note: 'For urgent technical questions, Discord is the fastest route.',
    },
    info: {
      title: 'Support and company details',
      items: [
        { label: 'Support hours', value: 'Mon – Fri', text: '[HOURS] CET' },
        {
          label: 'Weekends',
          value: 'Discord',
          text: 'The community and team are around even when support is closed.',
        },
        { label: 'Response time', value: 'within [TIME]', text: 'By email, on weekdays.' },
        {
          label: 'Company details',
          value: '[LEGAL ENTITY]',
          text: 'Tax ID [TAX ID] · Reg. no. [REG. NO.] · [ADDRESS]',
        },
      ],
    },
    cta: {
      title: 'Join the SEVORA community',
      lead: 'The fastest answers, market discussion and support from other traders — on Discord.',
      discord: 'Join on Discord',
    },
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved.',
    home: 'Go to the home page',
  },
};
