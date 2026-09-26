# AI Prompt History Log


> "Initialize a new React app using Vite. I want to build an Airbnb listing clone. Only use raw CSS in a single `styles.css` file—no Tailwind or external component libraries. Set up the basic layout: a top navigation bar, a listing title section, and a 5-image hero gallery."

> "Adjust the photo gallery layout to match Airbnb exactly: the left image should take up 50% of the width, and the right side should be a 2x2 grid. Add a border radius to the outer corners of the grid."


> "Below the photo gallery, create a two-column layout. The left column is the main listing info (host details, description, amenities). The right column is a sticky reservation card. Use Lucide-react for the icons."

> "Let's refine the 'Guest Favourite' section. Instead of a giant hero text block, refactor it into a horizontal card layout with a border radius and subtle drop shadow. It should show the laurel SVG, 'Guest favourite', a divider, '4.95' with 5 stars, another divider, and '19 Reviews'."

> "Add a sticky 'compact header' that slides down from the top of the screen when the user scrolls past the photo gallery. It needs to contain anchor links (Photos, Amenities, Reviews, Location) and a mini reserve button."

> "When clicking 'Show all amenities', build a modal that slides up from the bottom of the screen. The background should dim, and background scrolling should be locked while it's open. Include categories and a close button."

> "Refactor the 'Nearby' static grid into a horizontal scrolling carousel. It needs to hold 10 items across 2 pages. Add left and right arrow buttons that slide the flex container smoothly using CSS transitions."


> "Bug fix: The active underline on the sticky header anchor links is floating 1px above the container's bottom border because of flexbox shrinking the anchor tag. Force the height to exactly match the container so `bottom: -1px` overlaps the border perfectly."

> "Replace the placeholder text logo in the top left with the actual Airbnb Bélo SVG path. Use `#FF385C` for the fill color."

> "Remove the glitchy SVG laurels around the 4.95 rating. Just leave the plain number centered in the review section without any decorations."

> "Check the code for accessibility. Make sure all the icon-only buttons (like the modal close button and carousel arrows) have `aria-label` attributes."
