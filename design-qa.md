# Design QA — Whimsy Forest English V5.3

## Scope

- Reference: `C:\Users\wsyeu\.codex\generated_images\019f5d2e-f046-7df3-8d4b-9bfa49818c2e\exec-cf387150-0184-4a8f-968d-113ef5725c1e.png`
- Implementation: `http://127.0.0.1:49321/index.html`
- Primary reference size: 1487 × 1058 px
- Responsive verification: 390 × 844 px, document width 375 px, no horizontal overflow
- Browser console errors: none

## Comparison history

### Iteration 1

- Opened the reference and implementation captures together in one comparison input.
- P1: hero heading wrapped to two lines and occupied more vertical space than the reference.
- P1: the separate hero CTA became partially hidden behind the stage cards.
- P2: the stage cards retained more instructional detail than the concept image; this is intentional so students can choose a stage confidently without losing existing functionality.
- Fixes: widened the hero copy area, reduced the maximum heading size, removed the redundant hero CTA, and kept each stage card itself as the accessible primary action.

### Iteration 2

- Reopened the reference and updated implementation together in one comparison input.
- Heading now follows the reference's single-line composition at desktop width.
- Schoolyard watercolor background, three bird guides, green/blue/orange stage distinction, central hierarchy, and direct stage actions match the selected visual direction.
- No P0 or P1 visual issues remained.

## Interaction checks

- Three stage cards render and can be activated by mouse or keyboard.
- Selecting 基礎 unlocks the learning map with 5 theme nodes.
- Selecting a theme unlocks the correct 2 lesson cards.
- Starting a lesson opens the preserved 4-line dialogue practice.
- Listen, Repeat, and Role Play modes remain available; Role Play correctly reveals the role selector.
- Existing question bank remains at 30 dialogue lessons across 3 stages.

final result: passed
