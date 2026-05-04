# Mae — Color Scales Reference

Three semantic color scales. Edit the hex values in each table, then ask Claude to apply them to the codebase.

---

## Scale 1 — Forest Green (Roles)

Semantic role:  
Current base: **700 = `#29422a`** (H:123° S:23.5% L:21%)

| Step | Hex       | Current use |
|------|-----------|-------------|
| 50   | `#F6FDE8` | 
| 100  | `#EBFBCC` | 
| 200  | `#D6F6A0` | 
| 300  | `#BAEE68` | 
| 400  | `#9BE033` | 
| 500  | `#7FC71B` | 
| 600  | `#619F11` | 
| 700  | `#457809` | 
| 800  | `#2F6F1B` | 
| 900  | `#044A28` | **Brand green** — CTAs, active nav, Mae motifs (solid) |

---

## Scale 2 — Golden Amber (Highlights)

Semantic role: highlights, starred moments, gold-star icons, calendar dots.  
Current bases: **600 = `#9c6b3a`** (attentive amber) · **500 = `#b9833d`** (celebratory gold)

| Step | Hex       | Current use |
|------|-----------|-------------|
| 50   | `#FFFCEB` | 
| 100  | `#FFF5C6` | 
| 200  | `#FFED93` | 
| 300  | `#FFDB4A` | 
| 400  | `#FFC820` | 
| 500  | `#F9A707` | 
| 600  | `#DD7F02` | 
| 700  | `#B75806` | 
| 800  | `#94440C` | 
| 900  | `#7A380D` | 

---

## Scale 3 — Terracotta Orange (Memory)

Semantic role: memory screen, memory-specific surfaces and accents.  
**This scale does not exist in the codebase yet.** 

| Step | Hex       | Notes |
|------|-----------|-------|
| 50   | `#FEF0E3` | 
| 100  | `#FEEAD6` | 
| 200  | `#FBD1AD` |
| 300  | `#F8B079` | 
| 400  | `#F48643` | 
| 500  | `#F1651E` | 
| 600  | `#E24B14` |
| 700  | `#BC3712` | 
| 800  | `#952D17` | 
| 900  | `#782816` | 

---

## Notes

- All three scales follow the same warm-undertone philosophy: no cool greys, no blues, no digitally vivid hues.

---

## Project Token Names

The scales above are available in project files in three forms:

### CSS variables

Defined in `src/index.css`.

- Raw scale tokens: `--mae-green-50` through `--mae-green-900`
- Raw scale tokens: `--mae-amber-50` through `--mae-amber-900`
- Raw scale tokens: `--mae-terracotta-50` through `--mae-terracotta-900`

Semantic CSS tokens:

- App surfaces: `--color-canvas`, `--color-page`, `--color-surface`, `--color-warm-surface`
- Text and borders: `--color-ink`, `--color-ink-secondary`, `--color-muted`, `--color-mid`, `--color-border`, `--color-border-strong`
- Brand and roles: `--color-brand`, `--color-brand-soft`, `--color-brand-active`, `--color-role-accent`, `--color-role-surface`
- Highlights: `--color-highlight-accent`, `--color-highlight-surface`, `--color-highlight-strong`
- Memory: `--color-memory-accent`, `--color-memory-surface`, `--color-memory-strong`

### Tailwind tokens

Defined in `tailwind.config.js`.

- Raw scales: `mae-green`, `mae-amber`, `mae-terracotta`
- Semantic scales: `role`, `highlight`, `memory`
- Semantic colors: `canvas`, `page`, `surface`, `warm`, `ink`, `ink-secondary`, `muted`, `mid`, `brand`, `brand-soft`, `brand-active`, `brand-contrast`

Examples:

- `bg-role-50`
- `text-role-900`
- `bg-highlight-50`
- `text-memory-700`
- `bg-brand`
- `bg-brand-soft`

### TypeScript tokens

Defined in `src/styles/colorTokens.ts`.

- `COLOR_SCALE.green[50]`
- `COLOR_SCALE.amber[600]`
- `COLOR_SCALE.terracotta[700]`
- `COLORS.brand`
- `COLORS.role[50]`
- `CSS_COLORS.brandSoft`
