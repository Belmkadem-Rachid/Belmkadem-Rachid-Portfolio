@"
# Belmkadem-Rachid-Portfolio

Personal portfolio site built with plain HTML, CSS, and vanilla JavaScript -- no frameworks, no build step.

**Live site:** [add your GitHub Pages URL here once you enable Pages]

## About

M.Sc. student in Data and Discourse Studies at TU Darmstadt. This site showcases projects
at the intersection of data analysis and discourse/text analysis.

## Features

- Dark-first theme with a light-mode toggle
- Animated node-network canvas background
- Glassmorphism card UI for Skills, Projects, and Certifications
- Swiper.js carousel for the Work/Projects section
- Fully responsive (mobile, tablet, desktop breakpoints)

## Tech stack

- HTML5
- CSS3 (custom properties / CSS variables for theming)
- Vanilla JavaScript (Canvas API for the network background, no libraries)
- RemixIcon for icons
- Swiper for carousels

## Running locally

No build tools or dependencies required.

git clone https://github.com/Belmkadem-Rachid/Belmkadem-Rachid-Portfolio.git
cd Belmkadem-Rachid-Portfolio

Then just open index.html in your browser, or use the VS Code Live Server extension
for auto-reload while editing.

## Structure

Belmkadem-Rachid-Portfolio/
- index.html      (all page content/markup)
- styles.css      (all styling, theming, and responsive breakpoints)
- main.js         (theme toggle, carousels, scroll effects, network animation)
- images/         (project screenshots, profile photo, backgrounds)
- cv/             (downloadable CV/resume)

## License

Personal project -- feel free to use this as a structural reference, but please don't
copy the content/branding as your own.
"@ | Set-Content -Path README.md -Encoding UTF8