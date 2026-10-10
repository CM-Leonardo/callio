# Callio Design System

Callio is a mobile **reading tracker and social reading app** for Brazilian readers (Portuguese, pt-BR). Users log reading sessions and pages, keep streaks, earn XP and levels, take on reading missions, discover books, and follow friends and book clubs. The name comes from Calliope (Calíope), the Greek muse of epic poetry and writing, truncated for branding — tagline on the naming board: *"a musa está em todo mundo"*. Personality: **Jovem · Expressivo · Acolhedor · Criativo**.

The project appears to be a university final project (TCC). One product surface is represented: the **Callio mobile app** (Android 360 grid, frames drawn at 412×915).

## Sources
- Figma file **TCC.fig** (attached, mounted read-only). Pages: Capa (cover slide), Design-System (palettes, logo, components, icon set), Imagens (personas, empathy map, user flows), Baixa-fidelidade (wireframes, moodboard), Média fidelidade (10 dark-theme app screens), WIREFRAME (empty). No Figma URL, codebase or GitHub repo was provided.

## Index
- `styles.css` — global entry (imports only).
- `tokens/` — `fonts.css` (self-hosted @font-face), `fig-tokens.css` (41 Figma variables + Light/Dark modes), `fig-typography.css` (empty: the file defines 0 text styles), `colors.css` (5 palettes + neutrals), `semantic.css` (app aliases, type families, scale, radii).
- `fonts/` — woff2 files for DM Sans (official) and Cousine.
- `assets/` — `logo.svg` (official, purple), `logo-yellow.svg`, `logo-lightblue.svg`; `symbol.svg` (official "ll" symbol, purple), `symbol-lightblue.svg`, `symbol-yellow.svg`; `icons/icon-flame.svg`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives materialized from Figma (see list below).
- `ui_kits/callio-app/` — interactive recreation of the mid-fidelity app (not shown in the Design System tab).
- `SKILL.md` — agent-skill entry point.

## Components
Built from the 18 Figma component sets + standalone symbols.
- **forms/**: `Button` (112 variants), `Input`, `TextArea`, `VerificationCode`, `CheckBox`, `CheckBoxBase`, `RadioButton`, `Switch`, `ToggleSwitch`, `SwitchLargeDefaultTrue`, `SwitchLargeDefaultFalse`, `Tag` (63 variants), `Ranks`, `IconPlus`, `IconChevronDown`, `IconCreditCard`.
- **display/**: `ElementTagLabel`, `ElementNotification`, `ElementCategoryHeading`, `Stars`, `Star`.
- **annotation/** (spec-sheet helpers, "_"-prefixed in Figma): `DesignNote`, `MeasureSpacingGuide`, `MeasureLineBase`.
- **icons/**: `Icon` — 441 glyphs in 14 categories (Arrow, Calendar, Communication, Edit, Environment, File, Interface, Media, Menu, Navigation, Shape, System, User, Warning). `InterfaceSettings` had no decodable geometry and is omitted.

Intentional additions: none beyond the `Icon` wrapper (renders the icon set from one data file).

## UI kits
- `ui_kits/callio-app/` — Onboarding, Gêneros, Login, Home, Descobrir, Comunidade, Desafios, Semana em leitura, Perfil, Modo Leitura session, register sheet, success modal.

## Content fundamentals
- **Language**: Brazilian Portuguese, informal. Second person singular via *você* and imperative verbs: "Registre suas leituras", "Foque, sem distrações", "Termine um livro de um gênero novo pra você".
- **Tone**: warm, playful, a little cheeky, never judgmental — "Sem julgamento — mangá conta.", "Isso não foi sorte — foi você.", "Que tipo de história te prende?". Colloquial contractions are fine ("pra você").
- **Casing**: sentence case for titles and buttons ("Iniciar sessão", "Adicionar à estante", "Ver tudo"). ALL CAPS only for tiny eyebrow labels ("LENDO AGORA", "LEITURA DO MÊS", "CONQUISTA DA SEMANA", "FAVORITOS").
- **Greeting**: first-name, "Olá, Veronica" + date "Sexta, 9 de outubro".
- **Gamification vocabulary**: streak ("7 dias seguidos"), XP ("+122 XP", "XP +200"), levels with explorer names ("Nível 4 — Explorador", "próx. Cartógrafo"), missions ("Semana em chamas", "Fora da zona"), achievements ("Faísca Inicial", "Primeiro clube", "Maratonista").
- **Numbers**: Brazilian formatting — "1.240 / 2.000 XP", "4,6 ★ · 2,1 mil". Metadata joined with a middle dot " · ".
- **Em dashes** are used as a stylistic pause in headings ("Nível 4 — Explorador", "2 — 8 de outubro").
- **Emoji**: not used in UI chrome. Unicode ★ and ♥ appear inline in ratings and counters.
- Community posts are lowercase-casual user voice ("alguém mais só consegue ler no ônibus?").

## Visual foundations
- **Mood**: dark, cozy, night-reading. Near-black violet canvas `#1a1626`, deep-violet cards `#2a2050`, raised/track `#3d2e6e`, bottom nav `#0f0d1e`. The light-mode component library (white bg, DM Sans) exists alongside for forms.
- **Color**: primary purple-500 `#62449a` for all main actions; yellow-500 `#f5de8a` for streaks, XP and the high-emphasis secondary CTA (dark text on yellow); light-blue-500 `#bbdafd` for links, icons and info; green for success modals; orange/red for destructive. Muted text is lavender `#9b8bc0`. Each palette is a 50–900 ramp.
- **Type**: **DM Sans is the official brand font** (confirmed by the user) — used for all app UI and components (700 for titles/buttons, 600 for component buttons/labels, 400 for body). Scale: 64 timer, 24 hero, 22 page title, 16 card title/button, 14 body, 12 caption, 10 nav/eyebrow. The Figma file also used Inter, Poppins and Plus Jakarta Sans; these were replaced by DM Sans and removed from the system. Exception: Cousine mono for spec annotations.
- **Logo**: custom display wordmark "Callio" (looped double-l, bold geometric bowls). **Official version: purple (`assets/logo.svg`)**. The logo never sits on a background plate or container. Yellow and light-blue variants exist in the source.
- **Symbol**: the double "ll" of the wordmark is the brand's visual symbol, used on its own (`assets/symbol.svg`, cut from the vector wordmark). Same rule: official purple, no background plate.
- **Backgrounds**: flat solid fills. No gradients except progress bars (purple-400 → light-blue-500). No textures or photography.
- **Imagery**: book covers are the only imagery in-app (placeholders labelled "capa" in mid-fi).
- **Corner radii**: chips 8, inputs 12, small buttons 10, icon buttons 14, cards/primary buttons 16, modals ~20, onboarding illustration 24, phone 34, pills full. Figma radius variables: 4 / 8 / 12 / 16 / 24 / 1000. Component-library buttons use 20.
- **Cards**: flat `#2a2050` fills, radius 16, 16px padding, no shadow. Emphasis cards swap the fill (purple-500 "Modo Leitura") or add a 1px colored stroke on a dim tint of the same hue (yellow XP card, green success card).
- **Borders**: hairlines are 0.5px purple-500 on inputs, chips and dividers; 1px for outline buttons. Light-mode components use `#e9ebf8` / `#d1d5dc` strokes.
- **Shadows**: essentially none in the dark app. Light components use `0 1px 2px rgba(16,24,40,.08)`; spec sheets use `rgba(255,255,255,.08)` hairline rings.
- **Spacing**: 4-based variables (4, 6, 8, 12, 16, 20, 24, 32, 48, 64). Screen side margin 20–24px; vertical gap between cards 12–16px.
- **Layout**: single column, content width ~364–372px, fixed 80px bottom tab bar (Home, Descobrir, Comunidade, Desafios, Perfil), primary CTA pinned near the bottom on onboarding/forms.
- **States**: active tab = violet `#a16ff2` icon+label; selected chip = purple-500 fill + white text vs. outlined muted chip. The Button component defines Default / Hover / Pressed / Disabled per type. Kit press state: scale(0.98).
- **Transparency & blur**: modals sit on a dark scrim over the dimmed screen; no blur. Tinted fills (~12% alpha) behind colored strokes.
- **Animation**: not specified in the file. Keep it minimal — short ease transitions on progress bars and state swaps.

## Iconography
- The file ships a full **line icon set** (~442 symbols, "Category / Name" naming, 24px, outlined strokes) — materialized as `components/icons/icon-data.js` and rendered with `<Icon name="…" size={…} />` in `currentColor`.
- Mid-fidelity screens use similar lucide-style 1.5px line icons drawn inline (home, search, users, target, user, bell, eye, share, flame). The kit maps them to the DS set; the flame is copied verbatim to `assets/icons/icon-flame.svg`.
- Icons are monochrome, tinted light-blue or muted lavender on dark; active nav uses violet.
- No icon font, no PNG icons, no emoji. Unicode ★ / ♥ only in rating and like counts.

## Fonts
Official font: **DM Sans** (`--font-app`, `--font-ui`, `--font-body`). All families are Google Fonts and were self-hosted from Google's CDN (latin + latin-ext). No font binaries were in the Figma file. Arial and Georgia appear on the naming board only (system fonts).
