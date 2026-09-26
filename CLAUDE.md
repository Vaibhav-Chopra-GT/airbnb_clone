# AI Assistant Guidelines & Rules

This project uses an AI-assisted workflow. When interacting with the codebase, the AI must adhere to the following rules to ensure code quality, consistency, and visual fidelity.

## 1. Code Style & Architecture
- **Framework**: Stick to React functional components and hooks.
- **Styling**: All styling MUST go into `src/styles.css`. Do not introduce Tailwind, styled-components, or other CSS-in-JS libraries. This demonstrates mastery of vanilla CSS.
- **Simplicity**: Favor clean, readable implementations over premature abstractions. Keep the scope focused.

## 2. Visual & Behavioral Parity
- **Pixel Perfection**: Match reference screenshots exactly. Pay special attention to padding, border-radius, font weights, and layout alignments.
- **Animations**: Use CSS transitions for interactive elements (e.g., hover states, modals sliding up, headers sticking).
- **SVGs**: When brand-specific icons are required (e.g., Airbnb logo, Guest Favourite laurels), use exact SVG paths rather than approximating with standard icons.

## 3. Accessibility (A11y)
- Use semantic HTML (`<nav>`, `<header>`, `<main>`, `<section>`).
- Always include `aria-label` for icon buttons.
- Ensure proper contrast ratios for text (e.g., using `#222` instead of pitch black, `#777` for secondary text).

## 4. Component Structure
- Keep state as localized as possible.
- Use modular helper components (e.g., `<Review />`, `<AmenitiesSection />`) even if they reside in the same file for scope constraints, to ensure logical separation of concerns.
