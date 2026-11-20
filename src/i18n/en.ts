import { links } from '@/data/links';
import type { Dictionary } from './sr';

export const en: Dictionary = {
  meta: {
    title: 'SEVORA · Daily AI gold plan and a trading academy',
    description:
      'A daily gold plan before London: bias, key levels and what cancels the plan. An AI mentor, alerts, a journal and a 6-level Academy, in English and Serbian. Start free.',
    shareAlt: 'The SEVORA logo above a gold horizon',
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
    now: 'Today’s gold plan is ready',
    title: { before: 'Your ', gold: 'gold', after: ' plan, ready before London.' },
    lead: 'Bias, key levels and what cancels the plan, every morning. Then alerts, an AI mentor, a journal and the Academy in one account, in English and Serbian.',
    primary: 'Open a free account',
    secondary: 'See what a day looks like',
    dashLabel:
      'SEVORA dash, Gold page: price, chart with levels, AI summary and daily plan. Sample data.',
    dashNote: 'A screen from the SEVORA dash. Sample data, not investment advice.',
    tickerTitle: 'Markets we follow',
  },
  dash: {
    overview: 'Overview',
    groups: [
      { label: 'Markets', items: ['Gold', 'Scenarios', 'Calendar'] },
      { label: 'Trading', items: ['Journal', 'Alerts'] },
      { label: 'Learn', items: ['AI mentor', 'Academy'] },
    ],
    live: 'Live',
    range: 'Daily range',
    atr: 'ATR (14, D)',
    bias: 'Bias',
    biasValue: 'Long · 68%',
    makePlan: 'Build daily plan',
    setAlert: 'Set alert',
    chart: 'Chart · H1',
    summaryTitle: 'AI summary',
    summary:
      'Gold holds above the 4,018.6 pivot after bouncing off S1. While H1 stays above the pivot, buyers have the edge; the target is 4,052.4.',
    updated: 'Updated 07:45 · next after Core PCE',
    planTitle: 'AI daily plan',
    plan: [
      'Look for a long only on a pullback into 4,021–4,024.',
      'Open nothing from 14:15 to 14:45 (Core PCE).',
      'The plan fails if H1 closes below 3,996.2.',
    ],
  },
  hub: {
    title: 'Ten tools. One account.',
    lead: 'Instead of ten apps that don’t talk to each other: analysis, plans, alerts and the journal share the same data, so the mentor knows what you planned and what you did.',
    tools: {
      analysis: { title: 'AI market analysis', text: 'bias, levels, setups' },
      plan: { title: 'Daily plan', text: 'before every session' },
      scenarios: { title: 'Scenarios', text: 'bullish, bearish, neutral' },
      alerts: { title: 'Price alerts', text: 'when price hits a level' },
      calendar: { title: 'Calendar and news', text: 'with a risk rating' },
      journal: { title: 'Smart journal', text: 'stats and AI review' },
      mentor: { title: 'AI mentor', text: 'explains the why' },
      bots: { title: 'Bot dashboard', text: 'MT5 and risk rules' },
      propFirm: { title: 'Prop firm tools', text: 'limits and drawdown' },
      academy: { title: 'Academy', text: '6 levels, 138 lessons' },
    },
  },
  day: {
    title: 'Your trading day, from plan to lesson.',
    lead: 'This is how SEVORA works with you from morning to night.',
    now: 'Now',
    plan: {
      when: 'before London opens',
      title: 'You read the plan over coffee.',
      text: 'Overnight, the AI went through every timeframe. Bias, key levels and three scenarios are waiting, with the level that cancels the plan.',
      tools: ['AI analysis', 'Daily plan', 'Scenarios'],
      label: 'Example: gold levels',
      rows: ['R1 · Target 1', 'Price', 'Pivot · entry zone', 'Invalidation'],
    },
    london: {
      when: 'London opens',
      title: 'You don’t sit in front of the chart.',
      text: 'An alert tells you when price reaches your level. Bots only trade by the risk rules you set yourself.',
      tools: ['Price alerts', 'Bot dashboard'],
      label: 'Example: price alert',
      alert: 'XAU/USD reached the 4,018.6 pivot. The entry zone from your plan.',
      alertMeta: 'Alert · 2 min ago',
    },
    newYork: {
      when: 'New York and the news',
      title: 'You ask the mentor what the news means.',
      text: 'The calendar flags the events that move gold. The mentor reads the market, the calendar and your journal, and tells you why.',
      tools: ['Calendar and news', 'AI mentor'],
      label: 'Example: AI mentor',
      question: 'Core PCE is out in 15 minutes. What should I do?',
      answer:
        'Wait 15 minutes after the release. Levels can break without confirmation, and your plan stays long only above 4,018.6.',
    },
    close: {
      when: 'end of session',
      title: 'You watch your challenge limits.',
      text: 'For prop firm accounts: daily loss limit, drawdown and challenge progress in one place, before it’s too late.',
      tools: ['Prop firm tools'],
      label: 'Example: prop firm tools',
      limit: 'Daily loss limit',
      goal: 'To the challenge target',
    },
    evening: {
      when: 'in the evening',
      title: 'You log the trade and learn something.',
      text: 'Trades from MT5 land in the journal on their own. The AI shows what worked, and an Academy lesson fills the gap.',
      tools: ['Smart journal', 'Academy'],
      label: 'Example: smart journal',
      trade: 'XAU/USD long · to plan',
      note: 'Entry at the pivot, exit before R1. Your third good trade in a row when you wait for confirmation after the news.',
    },
  },
  academyBand: {
    title: 'From absolute zero to professional.',
    lead: 'Six levels, 23 modules and 138 lessons, in English and Serbian. A knowledge check after every module. The first two levels are free.',
    note: 'Starter unlocks levels up to 3; Premium unlocks the whole Academy and a strategy session.',
    cta: 'Start learning for free',
    free: 'Free',
  },
  homePlans: {
    title: 'Start for free. Pay when you need more.',
    lead: 'Monthly, or yearly with a 10% discount. Cancel any time.',
    compare: 'Compare all plans',
  },
  trust: {
    promisesTitle: 'What we promise, and what we don’t.',
    promises: [
      {
        title: 'Not investment advice',
        text: 'We publish analysis, tools and education. The decisions and the risk are yours.',
      },
      {
        title: 'Every plan says when it fails',
        text: 'A target always comes with the level that cancels the plan. Without it, it’s not a plan.',
      },
      {
        title: 'Risk before profit',
        text: 'We don’t sell quick money. We build a habit: plan, trade, journal, lesson.',
      },
    ],
    more: 'More about us',
  },
  price: {
    up: 'up',
    down: 'down',
    flat: 'unchanged',
  },
  academy: {
    stats: [
      { value: '6', label: 'levels' },
      { value: '23', label: 'modules' },
      { value: '138', label: 'lessons' },
    ],
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
          { label: 'Markets', page: 'home', hash: 'top' },
          { label: 'Calendar', page: 'home', hash: 'dan' },
          { label: 'News', page: 'home', hash: 'dan' },
          { label: 'Scenarios', page: 'home', hash: 'dan' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'Journal', page: 'home', hash: 'dan' },
          { label: 'AI mentor', page: 'home', hash: 'dan' },
          { label: 'Bot dashboard', page: 'home', hash: 'dan' },
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
    title: 'A trading course from zero to professional',
    lead: 'Master the mindset, then the market. Six levels in English and Serbian, from absolute zero to professional trader. Each level builds on the last, with no skipped basics.',
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
