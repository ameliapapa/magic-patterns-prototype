# Mae UX Next Steps

## Current State

Recent polish already completed:

- Overview and Memories header buttons use `icons/bubble-chat.svg`.
- Reflect cards use a frosted pencil icon pill instead of the text `Edit` pill.
- `DM Mono` is available and used for small uppercase metadata text, including `Monday, April 27 | Spring` and `Your compass across every role`.

Build status:

- `npm run build` passes.

## Next Session Goal

Improve Mae's core mobile UX without changing the product structure. Keep the current 393px phone frame, warm visual system, bottom nav, existing page names, and current data model.

Prioritize consistent interactions, clear tap targets, accessible labels, obvious edit/add actions, and visual consistency across Overview, Reflect, and Memories.

## Proposed Plan

### Header Actions

- Keep Overview and Memories using `bubble-chat.svg`.
- Both chat buttons should open Mae chat.
- Add `aria-label="Open Mae chat"` to both buttons.
- Set the icon image `alt=""` because the button label provides the accessible name.
- Use `DM Mono` uppercase for small metadata/header subtext on Overview, Reflect, and Memories.

### Reflect UX

- Keep the current Reflect card layout.
- Do not redesign Reflect cards into Memories-style moment cards.
- Keep the frosted pencil pill.
- Make the pencil pill functional:
  - Add an optional `onRoleOpen(roleId: string)` prop to `ReflectPage`.
  - Pass `setActiveRole` from `App` into `ReflectPage`.
  - On pencil click, open the existing `RoleDetailSheet` for that role.
- Add useful labels:
  - Pencil pill: `aria-label="Edit {role.label}"`
  - `+ Add intention`
  - `+ Set your direction`
  - Role filter chips
- Partner card has no intentions; keep layout stable and make `+ Add intention` read clearly as the next action.

### Bottom Navigation

- Add `aria-label`s to Overview, Reflect, Memory, and Add moment.
- Keep the current visual sizing.
- Confirm every nav control has at least a 44px tap target.
- Confirm nav does not overlap the final content in scroll views.

### Accessibility And Copy

- Decorative images should remain `alt=""`.
- Functional icon images should be inside labeled buttons.
- Avoid adding tutorial text or explanatory cards.
- Keep visible copy minimal and calm.

## Test Plan

Run:

```bash
npm run build
```

Manual check at 393x852:

- Overview chat icon opens Mae chat.
- Memories chat icon opens Mae chat.
- Reflect pencil pill opens the correct role detail sheet.
- Add role still opens role wizard.
- Bottom nav switches pages correctly.
- Bottom nav does not hide final scroll content.
- Reflect empty/low-content cards still feel balanced.

Accessibility spot check:

- Header chat buttons have labels.
- Nav buttons have labels.
- Reflect edit buttons have labels.
- Add/set actions have labels.
- Decorative images stay hidden from screen readers.

## Assumptions

- No routing changes.
- No persistence changes.
- No schema or API changes.
- No redesign of the Reflect cards into the Memories card style.
- This is a UX polish session, not a feature expansion.
