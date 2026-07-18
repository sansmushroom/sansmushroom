# Sans Mushroom Box

This repository contains a polished, mobile-first static website for Sans Mushroom Box. It is designed to work directly on GitHub Pages without a build step.

## Current site structure

- index.html — single-page layout with hero, recipe section, gallery, tutorial video, trust/contact section, and footer
- style.css — responsive styling with an earthy visual system, mobile-safe spacing, a gallery lightbox, and a per-dish recipe modal
- script.js — bilingual content rendering, gallery lightbox, and the recipe modal that opens each dish in a popup
- assets/images/ — mushroom photography placeholders and JPG images
- assets/recipe.pdf — downloadable recipe PDF
- assets/videos/packing-tutorial.mp4 — local tutorial video target
- favicon.svg — site favicon

## Recipe display

Each dish is shown on the main page as a compact, text-only card (numbered badge, dish name, ingredient count, and a "View Recipe" affordance — no image). Tapping or clicking a card opens a per-dish popup modal with the full ingredients list and numbered steps, rendered in the currently active language (English or Malayalam). The modal updates live if you switch language while it is open, and closes via the X button, tapping outside, or the Escape key. The general Health Benefits and Cooking Rules stay inline on the main recipe section.

## What to update later

You can still refine the following content when needed:

- assets/images/ — swap in higher-quality product photos when available
- assets/recipe.pdf — replace with the final PDF if the printed handout changes
- assets/videos/packing-tutorial.mp4 — replace with a real recorded tutorial once available
- script.js — update the bilingual recipe text and contact copy as the business evolves

## Open Graph note

The current `og:image` and `twitter:image` meta tags use a relative image path, and the `canonical` link uses a placeholder GitHub Pages URL (`https://sansmushroombox.github.io/`). Once the site is published, replace these with the full absolute URL for the deployed site so WhatsApp, Twitter, and search engines render the preview image and canonical correctly.

## Local preview

1. Open the repository folder in a browser, or run a simple local server from the project root.
2. For example, with Python:
   python -m http.server 8000
3. Then visit http://localhost:8000/

## GitHub Pages setup

1. Open your GitHub repository settings.
2. Go to Pages.
3. Under Source, choose Deploy from a branch.
4. Select the main branch and the root folder (/root).
5. Save the settings.

Your site will be available at:
https://<your-github-username>.github.io/<repository-name>/

## QR code note

Once the live URL is active, generate a QR code from that URL for customers to scan.
