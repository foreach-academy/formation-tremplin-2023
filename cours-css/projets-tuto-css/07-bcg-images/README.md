## PROJET BACKGROUND IMAGE

- linear-gradient(
  to right,
  rgba(105, 62, 27, 0.5),
  rgba(105, 62, 27, 1)
  )

#### Setup

- créer un fichier (07-bcg-images)
- créer index.html (structure générale - emmet !)
- créer un fichier css (ex: main, styles, etc...)
- lier le css dans le html (dans élément <head>)

#### Backgroung Image

- récupérer une image sur pexels (café)

#### save Project

- on ajoutera des features plus tard

#### HTML (strucutre)

- une div avec une class "nav"
  - une div avec une classe "nav-center"
    - une span avec la classe "nav-title" et un logo (texte)
- une div avec la classe "hero"
  - une div avec la classe "hero-center"
    - un h1
    - un p
    - un bouton avec la classe "hero-btn"

#### CSS (styles)

- reset (margin, padding, box-sizing)
- body = system fonts and line-height
- .nav = height, background (#222), padding
- .nav-title = font-size, text-transform, font-weight, color (#fff), letter-spacing

- .nav-center = width, max-width, margin (placer au center)

- .hero = background (linear-gradient, image), min-height (soustraire la hauteur de la nav)

- .hero-center (doit avoir la même largeur que nav-center) = width, max-width, margin, padding, color (#fff)

- sélectionner le h1 à l'intérieur de .hero-center = letter-spacing, text-tranform, margin-bottom

- sélectionner p à l'intérieur .hero-center = max-width, margin-bottom

- .hero-btn = background, border, padding, text-transform, color (#fff), letter-spacing
