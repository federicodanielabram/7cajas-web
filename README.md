# 7 Cajas — Sitio institucional

Landing page de **7 Cajas Distribuidora**, mayorista de aceite de girasol alto oleico (marca SEDA) para el sector gastronómico e industrial.

**Sitio en vivo:** https://7cajasdistribuidora.com

## Qué es

La cara pública de la empresa: presenta el producto, la marca y los datos de contacto a clientes potenciales. Es un proyecto aparte de [logistica-7cajas](https://github.com/federicodanielabram/logistica-7cajas), el sistema interno de reparto — este sitio es la vidriera, no la herramienta operativa.

## Stack

HTML, CSS y JavaScript sin framework — a propósito, para que cargue rápido y no dependa de un build. PWA instalable (`manifest.json` + `sw.js`), desplegado en Vercel con dominio propio.

## Features

- Slider de productos en el hero.
- Diseño responsive mobile-first (la mayoría de las visitas llegan desde el celular).
- Instalable como PWA.
- Contacto directo por redes sociales y formulario de contacto con envío de mail.

## Desarrollo local

No requiere build ni dependencias — es HTML/CSS/JS estático. Alcanza con abrir `index.html` en el navegador o servirlo con cualquier servidor estático (por ejemplo `npx serve`).
