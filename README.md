# AnEshaEdit

Live site (GitHub Pages): https://bitshank-2338.github.io/AnEshaEdit/

AnEshaEdit is a visually elegant, modern-heritage fashion blog inspired by the sophisticated editorial style of Who What Wear and the boutique aesthetic of Maison Boursier. The goal is to balance rich design elements with clean, high-quality layouts.

## Features
- **Loader Screen**: An introductory screen with the logo, gracefully transitioning into the homepage.
- **Dynamic Grid Layout**: Sections for editorial content like Modern Lineage, Heritage Textures, and more.
- **Pinterest Integration**: Live display of style boards such as "Style Me" and "Indian Suit Sets."
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Sophisticated Typography**: Using Cormorant Garamond for headers and Inter for body.

## Live
- GitHub Pages: https://bitshank-2338.github.io/AnEshaEdit/
- Admin (CMS UI, requires Netlify Identity + Git Gateway): https://bitshank-2338.github.io/AnEshaEdit/admin/

## Installation & Usage
### Clone the Project
```bash
git clone https://github.com/Bitshank-2338/AnEshaEdit.git
cd AnEshaEdit
```

### Running Locally
You can open `index.html` directly, or serve locally:
```bash
npx live-server
```

## Publishing new blog posts
This repo supports Jekyll posts in `_posts/`.

- Create a new Markdown file in `_posts/` (format: `YYYY-MM-DD-title.md`)
- Use the `layout: post` frontmatter
- Push to `main`

RSS feed (for newsletters):
- `https://bitshank-2338.github.io/AnEshaEdit/feed.xml`

## Zero-cost CMS (recommended)
To let the client publish via a dashboard (no code):
1. Create a **Netlify** site from this repo (free)
2. Enable **Identity** + **Git Gateway**
3. Add yourself as an Identity user
4. Open `/admin` and start publishing

## Customizations
1. Update the Pinterest boards directly in the `script.js`.
2. Change the brand colors in `style.css` using the provided CSS variables.

## Acknowledgments
- Fonts: Cormorant Garamond, Inter.
- Design Inspiration: Maison Boursier & Who What Wear.

Feel free to clone and customize this project for your unique requirements.