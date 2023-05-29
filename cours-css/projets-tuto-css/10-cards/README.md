## PROJET CARDS

#### Setup

- créer un fichier (10-cards)
- créer index.html (structure générale - emmet !)
- créer un fichier css (ex: main, styles, etc...)
- lier le css dans le html (dans élément <head>)

#### Assets

- récupérer deux images sur le site Pexels
- lien CDN font Awesome

#### HTML

- une section avec la classe "blogs"
  - une div avec la classe "section-title"
    - un h2 avec le texte "derniers articles"
  - une div avec la classe "blogs-center"
    - un article avec la classe "blog"
      - img
      - une div avec la classe "blog-content"
        - une span avec du texte et n'importe quel icône
        - un h3
        - un p (lorem15)
        - un a (href="#") "en savoir plus
  - copier/coller plusieurs fois .blog

#### Reset

- reset (margin: 0, padding: 0, box-sizing: border-box)

#### Variables

:root {
--primary: #645cff;
--primary-dark: #3c3799;
--grey-light: #f1f5f9;
--grey: #64748b;
--grey-dark: #0f172a;
--fluid-width: 90vw;
--max-width: 1170px;
--black: #222;
--white: #fff;
--letter-spacing: 2px;
--border-radius: 0.15rem;
--shadow-light: 0 5px 15px rgba(0, 0, 0, 0.1);
--shadow-dark: 0 5px 15px rgba(0, 0, 0, 0.2);
--transition: 0.3s ease-in-out all;
}

#### CSS

- body (font-family, line-height, background, color)
- .blogs (padding)
- .section-title (text-align, text-transform,letter-spacing, margin-bottom)

- .blogs-center (width, max-width, margin)
- .blog (max-width, padding, background, border-radius, box-shadow, transition, margin-bottom)
- .blog:hover (box-shadow)

- .blog img (width, display, object-fit, border-radius, margin-bottom)

- .blog-content (padding-bottom)
- .blog-content span (text-transform, color, letter-spacing, font-weight)
- .blog-content h3 (text-transform, letter-spacing)
- .blog-content p (color, margin-bottom)
- .blog-content
  a (text-transform, color, letter-spacing, font-weight)
