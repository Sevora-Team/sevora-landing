# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Serbian-speaking retail traders, beginner to intermediate, who trade gold (XAU/USD) and forex,
some of them on prop-firm challenges. They want a ready daily plan before the London session and
education in their own language instead of scattered English-only content and "buy here, sell
there" signals.

## Product Purpose

SEVORA is a trading hub: an AI daily plan for gold (bias, key levels and the level that cancels
the plan), scenarios, price alerts, an economic calendar, a smart journal fed from MT5, an AI
mentor, a bot dashboard, prop-firm tools and a six-level Academy, in one account, in Serbian and
English. This site is its public landing: it explains the product, sells the plans and ranks in
search. Success is a visitor opening a free account.

## Positioning

One account where analysis, the plan, alerts, the journal and the mentor share the same data, so
the mentor knows what you planned and what you did; every plan states when it fails; all of it in
Serbian first, English second.

## Operating Context

The trading day drives everything: plan over morning coffee before London, alerts during the
session, news around New York, prop-firm limits at the close, journal and a lesson in the
evening. Trades come from MetaTrader 5.

## Capabilities and Constraints

- Plans: Free (no time limit), Starter and Premium; monthly or yearly with 10% off; prices in RSD
  on the Serbian site and EUR on the English one (`src/data/pricing.ts`, not final).
- Academy: 6 levels (0–5), 23 modules, 138 lessons, a knowledge check after every module; levels
  0–1 free, Starter unlocks up to level 3, Premium everything plus a strategy session.
- Markets: gold and silver, major forex pairs, crypto, indices, commodities; gold has the most
  detailed plan.
- Each inner page (About, Academy, Plans, Contact) targets its own search intent; its title, meta
  description and headings were set deliberately and stay unless the user changes them.

## Brand Commitments

- Name SEVORA; logo mark in `src/assets/brand/`.
- Voice: plain, honest, second person ("ti"), no hype. Never promises profit.
- Every page carries the risk warning; content is analysis and education, not investment advice.
- Serbian (Latin) is the primary language; every string exists in Serbian and English.

## Evidence on Hand

- Sample market data for product UI (`src/data/markets.ts`, `src/lib/chart.ts`), clearly marked as
  sample data.
- Academy curriculum: `src/content/academy/level-0.json` … `level-5.json`.
- No real testimonials, user counts, performance results or press. Do not invent them.
- Team names, timeline years, contact emails, support hours, payment provider and company details
  are placeholders in brackets; the user fills them in before launch. Design around them.

## Product Principles

1. Clarity before action: every plan says what, why, and what cancels it.
2. Risk before profit: risk rules are built into the tools, not added later.
3. Learning in your language: Serbian first, the whole path from zero.
4. Honesty: no guaranteed returns, no cherry-picked results.

## Accessibility & Inclusion

WCAG AA contrast, keyboard access and visible focus, `prefers-reduced-motion` respected; the site
reads and navigates without JavaScript.
