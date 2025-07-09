# Headphones Landing Page

Welcome to the official landing page for **Gabriel's Headphones**&mdash;a symphony of sound delivered with precision,
elegance, and soul. This responsive, accessible, and beautifully animated page is crafted using HTML, CSS, and vanilla
JavaScript. It is designed to function gracefully across all devices, with custom animations and mobile-specific
behaviours.

See the live site: [Headphones](https://gabs-headphones.vercel.app)

## Table of Content

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [JavaScript Interactions](#javascript-interactions)
- [Acknowledgement](#acknowledgement)
- [Author](#author)

## Project Overview

Gabriel's Headphones is a mock brand designed to showcase a landing page with immersive visuals, smooth navigation, and
animated features. This project focuses on:

- Clean UI with visual hierarchy
- Scroll-based animations
- Desktop-first responsiveness
- Elegant content presentation
- Practical DOM interaction

## Features

- **Fixed and scroll-reactive Navbar:** Changes background upon scrolling.
- **Mobile Navigation Toggle:** Smoothly opens and closes, whilst dynamically calculating and adding space between the
  navigationa and hero content&mdash;to avoid overlap.
- **Responsive Hero Section:** Prominent title, subtitle, CTA button, and eloquent description.
- **Features Section:** Four animated features with custom icons and fade-in effects.
- **Results Section:** Background with stats inside decorative pentagons.
- **Contact Form:** Floating label inputs with validation and polished UI.
- **Scroll-triggered Animations:** Elements fade and rise as they enter the viewport.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, Animations, Media Queries
- **JavaScript (Vanilla)** - DOM manipulation and event listeners
- **Font Awesome & IcoMoon** - Icons

## Setup Instructions

1. **Clone the repository:**

```
git clone https://github.com/Tzienom/alx_html_css.git
```

2. **Open the project:**

```
cd headphones-landing-page
```

3. **Launch in browser:** Open `8-index.html` with your preferred browser or via VSCode Live Server.

## JavaScript Interactions

- **Navbar Scroll Background**
  - Adds `.scrolled` class when the navbar begins scrolling.
- **Mobile Menu Toggle**
  - Opens on clicking the hamburger icon
  - Closes on clicking the `X` icon or any link
- **Dynamic Padding Fix** - Calculates navbar height and pushes hero content using paddingTop

```
window.addEventListener("DOMContentLoaded", () => {
        const navbarWrapper = document.querySelector(".navbar-wrapper");
        const hero = document.querySelector("header");
        const navHeight = navbarWrapper.offsetHeight;

        hero.style.paddingTop = `${navHeight}px`;

    });
```

## Acknowledgement

- Inspired by the ALX Front-End Web Development programme
- Original webpage designed by Nicolas Philippot, UI/UX designer

## Author

Crafted with elegance by **Gabriel Ayuba** - an aspiring Victorian gentleman, software engineer, and symphonic craftsman
of code.
