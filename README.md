# Sans Mushroom Box

This repository contains a polished, mobile-first static website for Sans Mushroom Box. It is designed to work directly on GitHub Pages without a build step.

## Current site structure

- index.html — single-page layout with hero, recipe cards, gallery, tutorial video, trust/contact section, and footer
- style.css — responsive styling with an earthy visual system, mobile-safe spacing, and a lightbox for the gallery
- script.js — bilingual content rendering and gallery lightbox behavior
- assets/images/ — mushroom photography placeholders and JPG images
- assets/recipe.pdf — downloadable recipe PDF
- assets/videos/packing-tutorial.mp4 — local tutorial video target
- favicon.svg — site favicon

## What to update later

You can still refine the following content when needed:

- assets/images/ — swap in higher-quality product photos
- assets/recipe.pdf — replace with the final PDF if the printed handout changes
- assets/videos/packing-tutorial.mp4 — replace with a real recorded tutorial once available
- script.js — update the bilingual recipe text and contact copy as the business evolves

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
