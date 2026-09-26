# Implementation Plan: Airbnb Clone

## 1. Production Architecture Thinking
- **Framework**: React 18 (via Vite) for fast HMR and modern component architecture.
- **Styling**: Vanilla CSS (`styles.css`). Chosen deliberately over utility frameworks (like Tailwind) to demonstrate strong fundamentals in CSS Grid, Flexbox, and complex CSS transitions.
- **Icons & Assets**: `lucide-react` for standard UI icons, augmented with custom inline SVGs (e.g., official Airbnb Bélo logo, Guest Favourite laurels) for 100% visual accuracy.
- **State Management**: React local state (`useState`, `useEffect`) keeping the scope focused and avoiding over-engineered global stores for purely UI-driven interactions.

## 2. Execution Phases

### Phase 1: Foundation & Scaffolding [Completed]
- [x] Initialize Vite/React environment.
- [x] Define global CSS variables, typography, and reset rules.
- [x] Scaffold main content grid and layout boundaries (`max-width: 1120px`).

### Phase 2: Core Visual Fidelity [Completed]
- [x] Build primary navigation header (brand logo, search pill, user menu).
- [x] Implement the hero image gallery with a custom grid layout.
- [x] Construct the "Guest Favourite" horizontal card component using precise typography and SVG integration.
- [x] Build the Reviews section and rating score grid.

### Phase 3: Behavioral Parity & Interactivity [Completed]
- [x] **Sticky Navigation**: Implement scroll-aware compact header that slides down when scrolling past the hero section.
- [x] **Modals**: Build the Amenities slide-up modal with dark backdrop, overflow locking, and smooth CSS transitions.
- [x] **Carousels**: Convert static "Nearby" grid into a fully functional 2-page sliding carousel with state-driven navigation arrows.
- [x] **Photo Lightbox**: Implement full-screen photo tour overlay with proper exit/navigation controls.

### Phase 4: Accessibility & Quality Assurance [Completed]
- [x] Add semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`).
- [x] Ensure `aria-label` attributes on all icon-only buttons (search, close buttons, navigation arrows).
- [x] Verify responsive flex wrapping and padding adjustments for smaller screens.
