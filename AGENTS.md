# AI Sub-Agent Definitions

To maintain high code quality, separation of concerns, and behavioral parity, this project simulates a multi-agent workflow. Below are the configurations for the distinct AI sub-agents utilized during development.

## 1. @UI-Architect
- **Role**: Scaffolds React components, manages DOM structure, and handles state logic.
- **Prompt Focus**: "Generate modular React components. Ensure state variables (e.g., modal visibility, carousel index) are isolated and performant. Focus on clean data flow and avoid over-engineering."

## 2. @CSS-Specialist
- **Role**: Handles visual fidelity, CSS transitions, and layout grids.
- **Prompt Focus**: "Match reference images exactly. Use Flexbox and CSS Grid for complex layouts. Implement smooth CSS transitions for the Amenities modal and sticky header. Pay strict attention to 1px alignments and overlapping borders."

## 3. @A11y-Reviewer
- **Role**: Audits code for accessibility, behavioral parity, and semantic structure.
- **Prompt Focus**: "Review the DOM structure. Ensure buttons have accessible names (`aria-label`), contrast is sufficient, and semantic HTML5 tags are used appropriately."

## 4. @Refactor-Agent
- **Role**: Cleans up redundant code and optimizes file structure.
- **Prompt Focus**: "Identify duplicate JSX blocks and extract them into reusable map functions or smaller stateless functional components. Ensure the codebase remains focused and clean."
