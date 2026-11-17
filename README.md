# Community of Community — Project Page

**Make friends and Shared possibilities.**

This public repository hosts the illustration-led, bilingual website for Community of Community (CoC): little friends, independent community homes, and one shared campfire. English is the default; the language switch remembers a visitor's choice. The founding members, community Issues, and Discussions live in the [main repository](https://github.com/Community-of-Community/Community-of-Community).

- **Website:** https://community-of-community.github.io/
- **Issues:** https://github.com/Community-of-Community/Community-of-Community/issues
- **Discussions:** https://github.com/Community-of-Community/Community-of-Community/discussions

## Preview and deployment

The site is plain HTML, CSS, and JavaScript; no build dependencies are required. Preview from this repository with `python3 -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000/.

GitHub Pages publishes the repository root from `main` (`/`). The entry point is `index.html`; `.nojekyll` keeps deployment static.

## Artwork and publishing boundaries

The homepage uses the existing CoC logo and the supplied `assets/coc-friends-*.jpg` illustrations. The cream, teal, and coral palette follows the logo; optimized JPEGs keep the image-led page lightweight. The six existing Founding Members and their links are retained, including ResearchBoost Agent (RBA).

Twitter/X video materials are **not website content**. The former `promo/` demo and its soundtrack have moved outside this repository into the sibling `../Community-of-Community-Twitter-Promo/` directory. Do not restore a public `promo/` path, link to a promotional player, or publish the MP4 with GitHub Pages. Upload the standalone MP4 directly to Twitter/X instead.

## Collaboration form

The folded form uses FormSubmit’s official browser POST + `_next` redirect (no AJAX). The action uses the FormSubmit hash endpoint. If FormSubmit activation cannot be completed, use **Open in email app** on the page (mailto fallback) or email `wayneyjin@gmail.com` directly. Never submit confidential information.

## Organization

This repository is `Community-of-Community/Community-of-Community.github.io` and publishes at https://community-of-community.github.io/.
