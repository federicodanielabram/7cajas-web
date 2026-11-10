# 7 Cajas — Institutional Website

Landing page for **7 Cajas Distribuidora**, a wholesale distributor of high-oleic sunflower oil (SEDA brand) for the food service and industrial sector.

**Live site:** https://7cajasdistribuidora.com

## What it is

The public face of the company: presents the product, the brand, and contact details to potential customers. It's a separate project from [logistica-7cajas](https://github.com/federicodanielabram/logistica-7cajas), the internal delivery system — this site is the storefront, not the operational tool.

## Stack

Framework-free HTML, CSS, and JavaScript — on purpose, so it loads fast and doesn't depend on a build step. Installable PWA (`manifest.json` + `sw.js`), deployed on Vercel with its own domain.

## Features

- Product slider in the hero section.
- Mobile-first responsive design (most visits come from phones).
- Installable as a PWA.
- Direct contact via social media and a contact form with email delivery.

## Local development

No build or dependencies required — it's static HTML/CSS/JS. Just open `index.html` in the browser, or serve it with any static server (e.g. `npx serve`).
