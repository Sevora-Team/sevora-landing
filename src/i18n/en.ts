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
      { label: 'Home', href: '#top' },
      { label: 'Markets', href: '#trzista' },
      { label: 'Platform', href: '#platforma' },
      { label: 'Academy', href: '#akademija' },
      { label: 'Tools & partners', href: '#ekosistem' },
      { label: 'Plans', href: '#paketi' },
      { label: 'Contact', href: '#kontakt' },
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
  teaser: {
    title: 'Part of the plan is always free',
    lead: 'The gold overview and the overall bias are open. All levels, scenarios and in-session updates are in Starter and Premium.',
    cta: 'Unlock the full plan',
    snapshot: 'A look at today’s plan',
    unlock: 'Unlock',
    locked: 'Locked',
    levels: {
      title: 'Today’s levels',
      text: 'Where price is most likely to react.',
      footer: '3 more levels in Starter',
    },
    scenarios: {
      title: 'Scenarios',
      text: 'Entry, target and invalidation for both directions.',
      footer: 'Scenarios in Starter',
      rows: ['Scenario A', 'Scenario B', 'Invalidation'],
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
    title: 'Master the mindset. Master the market.',
    lead: 'The Academy takes you from absolute zero to a professional level. Discipline today, freedom tomorrow.',
    cta: 'Start learning',
    stats: [
      { value: '6', label: 'levels' },
      { value: '23', label: 'modules' },
      { value: '138', label: 'lessons' },
    ],
    levels: [
      { level: 'Level 0', title: 'Absolute zero', meta: '4 modules · 28 lessons' },
      { level: 'Level 1', title: 'Basics', meta: '3 modules · 18 lessons' },
      { level: 'Level 2', title: 'Advanced beginner', meta: '4 modules · 23 lessons' },
      { level: 'Level 3', title: 'Intermediate', meta: '3 modules · 21 lessons' },
      { level: 'Level 4', title: 'Advanced', meta: '4 modules · 23 lessons' },
      { level: 'Level 5', title: 'Professional', meta: '5 modules · 25 lessons' },
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
    title: 'Start for free, upgrade when you need it',
    lead: 'Monthly or yearly billing — yearly saves you 10% on every plan.',
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
          'Academy: starter levels',
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
          'Full economic calendar',
          'Discord access',
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
          'Discord VIP and priority support',
          'Monthly strategy session',
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
    title: 'Contact us',
    lead: 'A question about plans, technical help or a partnership — write to us and we’ll get back to you.',
    channels: {
      email: { title: 'Email', text: '[EMAIL ADDRESS]' },
      discord: {
        title: 'Discord community',
        text: 'The fastest answers from the team and traders',
      },
      response: { title: 'Response time', text: 'On weekdays, within [TIME]' },
    },
    name: 'Full name',
    namePlaceholder: 'Jane Smith',
    email: 'Email',
    emailPlaceholder: 'name@example.com',
    topic: 'Topic',
    topics: ['Plans and billing', 'Technical support', 'Affiliate program', 'Partnership', 'Other'],
    message: 'Message',
    messagePlaceholder: 'Tell us how we can help…',
    consent:
      'By sending this message you accept our [privacy policy]. We only use your details to reply to you.',
    send: 'Send message',
    sending: 'Sending…',
    doneTitle: 'Message sent',
    doneText: 'Thank you. We’ll reply to your email as soon as we can.',
    again: 'Send another message',
    error: 'Your message wasn’t sent. Please try again or email us.',
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
          { label: 'Markets', href: '#trzista' },
          { label: 'Calendar', href: '#platforma' },
          { label: 'News', href: '#platforma' },
          { label: 'Scenarios', href: '#plan' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'Journal', href: '#platforma' },
          { label: 'AI mentor', href: '#platforma' },
          { label: 'Bot dashboard', href: '#platforma' },
          { label: 'Shop', href: links.shop },
        ],
      },
      {
        title: 'Learn',
        links: [
          { label: 'Academy', href: '#akademija' },
          { label: 'Glossary', href: links.glossary },
          { label: 'Blog', href: links.blog },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#o-nama' },
          { label: 'Affiliate program', href: links.affiliate },
          { label: 'Contact', href: '#kontakt' },
          { label: 'Terms of use', href: links.terms },
          { label: 'Privacy', href: links.privacy },
        ],
      },
    ],
    risk: 'Risk warning: trading forex, metals, cryptocurrencies, indices and other financial instruments carries a high level of risk and is not suitable for everyone. The content and tools on this site are analytical and educational and are not investment advice. Past performance does not guarantee future results.',
    copyright: '© 2026 SEVORA',
    legal: '[LEGAL ENTITY · TAX ID · ADDRESS]',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved.',
    home: 'Back to the home page',
  },
};
