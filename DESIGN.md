---
name: SEVORA
description: A trading hub's landing site, dark ink from gold morning to teal evening, Serbian first.
colors:
  accent: '#42cad7'
  accent-hover: '#7adfe7'
  accent-pressed: '#16a4ad'
  accent-border: '#0e8a92'
  accent-subtle: '#0e242d'
  price-gold: '#f5b544'
  up: '#3dd68c'
  down: '#f0616d'
  page: '#05090f'
  ink: '#03060c'
  bg: '#070d16'
  surface: '#0c1520'
  surface-raised: '#13202d'
  border: '#1e2e3d'
  border-strong: '#5b6e82'
  text: '#f0f0f0'
  text-body: '#a9b4bf'
  text-muted: '#7c8996'
  mist-bg: '#f3f6f9'
  mist-accent-text: '#09707a'
  mist-price: '#8c5a00'
typography:
  display:
    fontFamily: 'Bricolage Grotesque, system-ui, sans-serif'
    fontSize: '64px'
    fontWeight: 700
    lineHeight: '68px'
    letterSpacing: '-0.035em'
  headline:
    fontFamily: 'Bricolage Grotesque, system-ui, sans-serif'
    fontSize: '44px'
    fontWeight: 700
    lineHeight: '50px'
    letterSpacing: '-0.03em'
  title:
    fontFamily: 'Sevora Sans, system-ui, sans-serif'
    fontSize: '25px'
    fontWeight: 400
    lineHeight: '32px'
    letterSpacing: '-0.01em'
  title-sm:
    fontFamily: 'Sevora Sans, system-ui, sans-serif'
    fontSize: '17px'
    fontWeight: 500
    lineHeight: '24px'
  lead:
    fontFamily: 'Sevora Sans, system-ui, sans-serif'
    fontSize: '18px'
    fontWeight: 400
    lineHeight: '28px'
  body:
    fontFamily: 'Sevora Sans, system-ui, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: '26px'
  body-sm:
    fontFamily: 'Sevora Sans, system-ui, sans-serif'
    fontSize: '14px'
    fontWeight: 400
    lineHeight: '22px'
  caption:
    fontFamily: 'Sevora Sans, system-ui, sans-serif'
    fontSize: '12px'
    fontWeight: 400
    lineHeight: '16px'
  data:
    fontFamily: 'Sevora Mono, ui-monospace, monospace'
    fontSize: '16px'
    fontWeight: 500
    lineHeight: '24px'
    fontFeature: 'tnum'
rounded:
  xs: '6px'
  sm: '9px'
  md: '14px'
  card: '20px'
  panel: '28px'
  pill: '999px'
spacing:
  '1': '4px'
  '2': '8px'
  '3': '12px'
  '4': '16px'
  '5': '24px'
  '6': '32px'
  '7': '48px'
  '8': '64px'
  '9': '96px'
components:
  button-primary:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: '10px 20px'
  button-primary-hover:
    backgroundColor: '{colors.accent-hover}'
  button-primary-active:
    backgroundColor: '{colors.accent-pressed}'
  button-ghost:
    backgroundColor: 'transparent'
    textColor: '{colors.text}'
    rounded: '{rounded.pill}'
    padding: '10px 20px'
  button-ghost-hover:
    backgroundColor: '{colors.surface-raised}'
  button-sm:
    rounded: '{rounded.pill}'
    padding: '7px 14px'
  text-field:
    backgroundColor: '{colors.bg}'
    textColor: '{colors.text}'
    rounded: '{rounded.sm}'
    padding: '11px 14px'
  nav-link:
    textColor: '{colors.text-body}'
    rounded: '{rounded.pill}'
    padding: '6px 12px'
  nav-link-current:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.ink}'
  billing-toggle:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.pill}'
    padding: '4px'
  billing-toggle-selected:
    backgroundColor: '{colors.accent}'
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    padding: '8px 18px'
  price-cell:
    textColor: '{colors.text}'
    typography: '{typography.data}'
  price-cell-gold:
    textColor: '{colors.price-gold}'
---

# Design System: SEVORA

## Overview

**Creative North Star: "The Day Line"**

The whole site is one trading day. It opens in a gold morning (the plan before London) and closes in a teal evening (the journal and a lesson), and a single gradient line carries that passage: vertical through the home timeline, the Academy syllabus and the About journey on mobile, laid flat under every inner page's opening band and along the top of the featured plan. Everything else stays quiet so that line, and the real product UI it frames, does the talking.

The ground is dark ink throughout (`page`, with soft teal radial glows drifting down the body), with one light "mist" band for the Academy on the home page. Density is editorial rather than dashboard-like: generous section padding (120px, 72px on phones), long readable measures, and content separated by hairline rules rather than boxed into cards. Panels appear only where they hold something real: a product screen with sample data, the contact form, the plan ladder.

Inner pages share one opening grammar: breadcrumbs, a left-aligned Bricolage headline and lead over a faint dot grid, the page's own artifact beside or below it (the risk chart, the Academy level path, the contact channels, the billing toggle), and the flat day line closing the band. No stock photography anywhere; imagery is the product itself, labelled as sample data.

**Key Characteristics:**

- Dark ink ground, one teal accent, gold reserved for morning, start, free and the gold price.
- The gold-to-teal day line is the one structural colour.
- Bricolage Grotesque 700 for titles and big figures; Plex Sans (Sevora Sans) for reading; Plex Mono (Sevora Mono) only for real data.
- Hairline rules over card shells; panels only for product UI and forms.
- Pill-shaped controls, gently rounded panels.
- One authored motion moment per page, all of it off under `prefers-reduced-motion`.

## Colors

A deep ink night with a single cool teal voice, a warm gold reserved for the start of the day, and market green and red only for market data.

### Primary

- **Lagoon Teal** (`accent`): the one accent. Primary buttons, the current nav item, the selected billing option, links and icons in text (`accent-text`), checkmarks, module numbers, journey nodes, the evening end of the day line. Metadata words such as journey years and team roles stay in Dusk (`text-muted`); teal marks nodes, icons and links, not words. Hover lifts to **Foam Teal** (`accent-hover`), press sinks to **Deep Lagoon** (`accent-pressed`); **Reef Teal** (`accent-border`) marks focused field borders; **Lagoon Shadow** (`accent-subtle`) backs small accent chips such as the yearly saving badge.
- **Teal family** (tokens `--teal-grad`, `--teal-glass`, `--teal-glass-lifted`, `--teal-line`, `--teal-line-soft`, `--haze`): the lit surfaces. `--teal-grad` lights the one featured thing in a group (the featured plan, a hero panel); `--teal-glass` is the translucent panel for product UI and the contact form; the teal lines are hairlines on lit surfaces.

### Secondary

- **Morning Gold** (`price-gold`, CSS `--price`): the start of the day and the price of gold. The free Academy levels and free tier nodes, the first node of the About journey, the "now" time chip, past and current steps on the home timeline, the gold quote in the hero. Never decoration.

### Tertiary

- **Market Green** (`up`) and **Market Red** (`down`): price changes, bias chips and gains inside product UI only. `danger` shares the red for errors.

### Neutral

- **Night Page** (`page`): the ground under every section; heroes and dark bands melt into it.
- **Deep Ink** (`ink`): the deepest tone, for text on accent and gold, the scrolled header and dark bands.
- **Ink** (`bg`), **Slate Surface** (`surface`), **Raised Slate** (`surface-raised`, also `surface-hover`): field backgrounds, product panels and their hover state.
- **Hairline** (`border`) and **Strong Hairline** (`border-strong`): rules between rows and sections, and the outline of ghost buttons, fields and toggles.
- **Paper White** (`text`) for headings and emphasised values, **Fog** (`text-body`) for reading text, **Dusk** (`text-muted`) for labels, breadcrumbs and captions.
- **Mist** (`mist-bg` with `mist-accent-text` and `mist-price`): the one light band, the `data-theme="mist"` Academy band on the home page, where the accent turns to ink and teal and gold darken for contrast.

### Named Rules

**The One Line Rule.** The gold-to-teal day line (`--day-line` vertical, `--day-line-x` flat) is the only structural colour. It runs the home timeline, closes every inner hero, tops the featured plan, fills the Academy syllabus rail and the travelled stretch of the About journey. No other gradient draws structure.

**The Gold Is Morning Rule.** Gold (`--price`) means the morning, the start, free, or the gold price. If it is not one of those, it is not gold.

**The Market Colours Stay In The Market Rule.** Green and red appear only on market data inside product UI, never as brand or status colour for marketing copy.

## Typography

**Display Font:** Bricolage Grotesque 700 (with system-ui, sans-serif)
**Body Font:** Sevora Sans, a self-hosted IBM Plex Sans subset, weights 400 to 600 (with system-ui, sans-serif)
**Label/Mono Font:** Sevora Mono, a self-hosted IBM Plex Mono subset, weights 400 and 500 (with ui-monospace, monospace)

**Character:** A wide, slightly quirky grotesque with tight negative tracking for titles and big numbers, set against a calm, technical sans for everything you read. The Plex files are split into a Latin file and a Serbian-letters file, so only Serbian pages download the second one.

### Hierarchy

- **Display** (700, 64px/68px, -0.035em; 40px/46px on phones): page and section-opening titles. The home hero scales it to `clamp(48px, 8.4vw, 120px)` at 0.92 line height; inner page heroes to `clamp(44px, 5.4vw, 80px)` at 1, max 15ch, balanced.
- **Headline** (700, 44px/50px, -0.03em; 31px/38px on phones): section titles (`.h2`).
- **Title** (400 Plex, 25px/32px; 22px/28px on phones): sub-titles (`.h3`). Component titles that need weight switch to Bricolage 700 at 22 to 40px (timeline steps, plan names, Academy levels, journey milestones).
- **Title small** (500 Plex, 17px/24px): row and card titles (`.h4`), module titles.
- **Lead** (400, 18px/28px, max 56ch; 19px/30px max 50ch in inner heroes): the paragraph under a title.
- **Body** (400, 16px/26px): reading text in `text-body`; longer step texts run 17 to 18px with 52 to 62ch measures.
- **Body small / Caption** (14px/22px; 12px/16px in `text-muted`): metadata, hints, breadcrumbs.
- **Data** (Mono 500, 16px/24px tabular; 31px/38px large): prices, tickers, levels and times inside product UI.
- **Big figures** (Bricolage 700, 48 to 56px, -0.03 to -0.04em): plan prices, timeline hours, level numbers.

### Named Rules

**The Three Voices Rule.** Bricolage speaks titles and big figures, Plex Sans speaks everything you read, Plex Mono speaks only real data (prices, tickers, levels, times). A word set in mono must be something a terminal would print.

**The Plain Sentence Rule.** Headings and sentences are one colour. No eyebrow or kicker labels above titles, no accent-coloured words inside a sentence.

## Layout

A full-width, gutter-based layout rather than a fixed container: `.wrap` pads content with `--gutter` (`clamp(16px, 4.4vw, 72px)`, a fixed 16px on phones), and components cap their own measure (lead 50 to 56ch, timeline 1100px, plan ladder 620px when stacked). Sections are transparent over one continuous body backdrop; `.section` gives 120px vertical padding (72px under 640px), `.section-dark` is a full-bleed band that deepens and fades back out over 220px at each edge. Breakpoints in use: 1240px (nav tightens), 1080px (nav collapses to the menu, two-column heroes and the plan ladder stack), 860px (About journey turns vertical), 640px (phone type and spacing).

Section intros are start-aligned (`.intro`) on inner pages; the home page uses centred intros (`.intro-center`) above some sections. Inner heroes use a 7:5 text-to-artifact grid with a 72px column gap, stacking under 1080px, or a full-width `below` slot for an artifact that needs the width (the Academy level path). The header is sticky, 84px tall over the hero and 68px once scrolled; heroes slide under it with a matching negative margin. About, Academy and Plans end on the shared closing call (ClosingCta); Contact ends on its support details with no closing call.

Spacing follows the 4px-based scale (4, 8, 12, 16, 24, 32, 48, 64, 96); large section and hero rhythms (40, 56, 72, 88, 120px) are set per component.

### Named Rules

**The Left-Aligned Opening Rule.** Every page below home opens with breadcrumbs, a left-aligned headline and lead, the page's own artifact beside or below, and the flat day line as its baseline. Only the home hero is centred.

**The Show Every Word Rule.** Pages are read by search engines: no tabs or carousels hiding copy. Disclosure (`<details>`) is used only for long reference lists such as Academy lessons and FAQs, and their text is in the HTML.

## Elevation & Depth

Depth is tonal and luminous, not shadowed. Surfaces sit flat on the ink ground; depth comes from translucent teal glass, soft radial teal glows in the body backdrop and band corners, a faint dot grid behind hero headlines, and the horizon glows. Shadows are rare and ambient: the horizon and baseline glows, and one soft drop under a floating product-UI panel.

### Shadow Vocabulary

- **Gold horizon** (`box-shadow: 0 -2px 0 0 var(--horizon-gold), 0 -14px 60px 6px var(--horizon-gold-glow)`): the sunrise ellipse behind the home hero.
- **Teal horizon** (`box-shadow: 0 -2px 0 0 var(--horizon-teal), 0 -20px 80px 10px var(--horizon-teal-glow)`): the evening edge behind the closing call.
- **Baseline glow** (`box-shadow: 0 -6px 24px 0 var(--horizon-gold-glow)`): the warm halo over the inner hero day line.
- **Panel drop** (`box-shadow: 0 40px 80px -40px rgb(0 0 0 / 0.7)`): under a floating product-UI panel.

### Named Rules

**The Light Not Lift Rule.** A thing is raised by being lit (teal gradient, teal hairline, glow), not by a hard drop shadow. One lit item per group.

## Shapes

Controls are pills (`--radius-pill`): buttons, nav items, the billing toggle, the menu button, time and bias chips. Fields use a small 9px radius, inner rows and current-row highlights 9 to 14px, product and form panels 20px (`--radius-card`), large frames up to 28px. The Academy level path's steps are rounded only on top and stand on the day line. Dots and nodes on the day line are circles with a 2px ring: hollow ahead, filled once passed, ringed at the current step. Rules are 1px hairlines; the day line and timeline tracks are 2px (1px when laid flat as a baseline). Tracks not yet travelled are dashed.

## Components

### Buttons

Confident, compact pills with a nudging arrow.

- **Shape:** fully rounded pill (999px).
- **Primary:** Lagoon Teal fill, Deep Ink text, Plex Sans 500 14px/20px, 10px 20px padding.
- **Hover / Focus:** fill lifts to Foam Teal over 0.2s; press scales to 0.98 and sinks to Deep Lagoon; a trailing icon slides 2px up-right on hover. Focus is the global 2px teal outline at 3px offset.
- **Ghost:** transparent with a Strong Hairline border and Paper White text; hover fills with Raised Slate.
- **Small:** 7px 14px padding, 13px text.

### Chips

- **Time chip:** Morning Gold pill with Deep Ink mono text, the "now" marker on the hero and timeline.
- **Saving badge:** Lagoon Shadow pill with teal mono text inside the yearly toggle option; it inverts when the option is selected.
- **Bias chip:** a 12% green wash with Market Green text, inside product UI only.

### Cards / Containers

- **Corner Style:** 20px for panels.
- **Background:** `--teal-glass` for product UI and the contact form; `--teal-grad` for the one featured item.
- **Shadow Strategy:** see Elevation; the panel drop only, under a floating product-UI panel. The featured item is lit, never shadowed.
- **Border:** a 1px teal hairline (`--teal-line-soft` or `--teal-line`).
- **Internal Padding:** 20 to 44px.
- Copy is not boxed: lists of channels, modules, comparison rows and principles are separated by 1px `border` rules with no shell.

### Inputs / Fields

- **Style:** Ink background, 1px Strong Hairline border, 9px radius, 11px 14px padding, Plex 14px/22px; label above in Paper White 500 14px; an optional caption hint below, wired with `aria-describedby`.
- **Focus:** the border shifts to Reef Teal plus the global teal focus outline.

### Navigation

- **Header:** sticky, transparent over the hero, turning solid ink (86%) with a hairline and shrinking from 84 to 68px over the first 160px of scroll (scroll-driven in CSS, with a script fallback; solid without JS), with a 14px backdrop blur.
- **Links:** Plex 500 14px in Fog, pill-padded; hover goes to Paper White; the current page is a filled teal pill.
- **Mobile (under 1080px):** a 44px ghost pill menu button opens a full-width list of 20px rows separated by hairlines; the current page turns teal.
- **Breadcrumbs:** 14px Dusk with a `/` separator, current page in Fog, at the top of every inner hero.

### Page Hero (signature)

The opening band of every inner page: breadcrumbs, Display headline, lead and an optional slot (toggle or actions) rising in with a staggered 0.06s delay, the artifact beside it at 0.24s, and the flat day line drawing from the left over 1.6s with its gold glow. The artifact is the page's own, never a row of counts: the risk chart (About), a glass panel replaying the same trades at three risk levels behind a pill radio switch with no script; the rising six-step level path standing on the line (Academy), which on phones (640px and below) keeps all six risers in one row showing only the level number; the contact channel rows (Contact); the billing toggle (Plans).

### Day Line Rails (signature)

- **Home timeline:** a vertical 2px track with the day line filling it as the section scrolls; big Bricolage hours stick beside each step, dots fill gold as the day passes.
- **Academy syllabus rail:** a vertical track with the day line filling on scroll; tier nodes ringed gold for free tiers and teal for paid; big level numbers beside each level; modules as hairline-ruled `<details>` rows.
- **About journey:** a horizontal dashed track with the gold-to-teal line over the stretch already travelled, turning vertical under 860px.

### Plan Ladder

Three separate, fully rounded plan panels 12px apart, each starting 32px higher than the one before with their bottoms aligned (an offset, never a forced height, so no column ends in empty space; no shared edges, so no square corner meets a round one); the featured plan is lit with `--teal-grad`, a full teal hairline border (`--teal-line`) and the flat day line along its top, with no shadow or glow beneath it. Prices are big Bricolage figures with the period in muted Plex.

### Plan Comparison

A hairline-ruled table with a sticky header of plan names, prices and buttons; the featured column carries a faint teal wash. On phones (640px and below) each row restacks: the feature name on its own line, then the three plan columns side by side, each labelled with its plan name in muted 12px text.

### Price Cell

Mono 500, tabular figures, value in Paper White (Morning Gold for the gold quote), change in Market Green or Red; it briefly flashes green or red when the sample price ticks.

## Do's and Don'ts

### Do:

- **Do** open every inner page with `PageHero`: breadcrumbs, left-aligned headline and lead, the page's own artifact beside or below, closed by the flat day line (`--day-line-x`).
- **Do** use the day line (`--day-line`, `--day-line-x`) as the only structural colour, gold at the start and teal at the end.
- **Do** reserve Morning Gold (`--price`) for morning, start, free and the gold price.
- **Do** separate copy with 1px hairline rules (`--border`); keep panels for product UI and forms.
- **Do** set titles and big figures in Bricolage Grotesque 700 with negative tracking, reading text in Sevora Sans, and only real data (prices, tickers, levels, times) in Sevora Mono with tabular figures.
- **Do** show real product UI with sample data, and label it as sample data.
- **Do** give each page one authored motion moment (hero rise and baseline draw; the Academy rail filling on scroll) and let `prefers-reduced-motion` switch all animation off.
- **Do** keep every word in the HTML; use `<details>` only for long reference lists.

### Don't:

- **Don't** put eyebrow or kicker labels above headings.
- **Don't** end a scroll reveal at a share of the element's height or of the viewport (`cover 30%`): a tall block near the end of a short page never gets there and stays half-faded. Reveals end a fixed distance after entry (`entry 0% entry 220px`), and a page's main task (the contact form) isn't revealed at all.
- **Don't** use a row of counts or metrics as a hero artifact; the artifact is the page's own product or tool.
- **Don't** colour individual words inside a heading or sentence with the accent or gold.
- **Don't** hide copy in tabs or carousels; these pages rank in search.
- **Don't** use stock photography or illustration; the product is the image.
- **Don't** wrap copy in card shells or stack bordered boxes for lists of text.
- **Don't** introduce a second structural gradient or colour beside the day line.
- **Don't** use green or red outside market data, or gold for anything that isn't morning, start, free or the gold price.
- **Don't** set labels, headings or prose in mono.
