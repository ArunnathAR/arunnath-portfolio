# Arunnath Portfolio Code Notes

This project was written as a small, clean React app with most of the page assembled from simple data arrays instead of overly abstract components. That keeps the code feeling hand-written and easy to edit later.

## File structure

`src/App.jsx`

- Holds the page content and layout.
- Uses three small arrays for projects, experience, and dock links.
- Maps over those arrays to render repeatable UI without making the file feel over-engineered.

`src/styles.css`

- Contains the full visual system for the landing page.
- Builds the dark background, dot-grid texture, glass cards, floating connect button, dock navigation, and responsive layout.
- Includes the entrance animation and hover transitions.

`src/main.jsx`

- Standard React entry file.
- Mounts the app and imports the global stylesheet.

`vite.config.js`

- Minimal Vite config for React.

`index.html`

- Defines the root node and loads the Manrope font for the clean premium look.

## Design choices used in the code

- The layout follows the reference structure: intro section, project bento grid, experience timeline, large floating call-to-action, and bottom dock.
- Since there were no real screenshots or illustrations provided, the project cards use crafted UI mock previews with layered gradients and glass surfaces so the design still feels premium.
- Motion was done with CSS on purpose to keep the app fast and simple.
- The mobile layout collapses each section naturally instead of using complicated breakpoints or separate components.

## How to customize fast

- Change the main text in `src/App.jsx` to match your real bio, work, and links.
- Replace the project titles and summaries in the `projects` array.
- Replace the timeline entries in the `experience` array.
- Update the mail and social URLs in `dockLinks`.

## Why the code looks human

- The component structure is intentionally straightforward.
- There is very little abstraction for abstraction's sake.
- Class names are descriptive and section-based.
- The CSS is grouped by real page sections instead of generated utility noise.
