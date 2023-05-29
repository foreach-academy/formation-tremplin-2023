## PROJET DiSPLAY PROPERTY

#### Setup

- créer un fichier (06-display-property)
- créer index.html (structure générale - emmet !)
- créer un fichier css (ex: main, styles, etc...)
- lier le css dans le html (dans élément <head>)

#### HTML (strucutre)

- créer une div avec la classe "section"
  - dedans, placer :
    - une div avec la classe "section-title"
      - dedans, placer :
      - un h1
      - une div avec la classe "title-underline"
    - une div avec la classe "section-center"
      - dedans, placer :
      - un p

#### CSS (styles)

- faire le reset (margin, padding, box-sizing)
- sélectionner le body, ajouter les system fonts, background (#f1f5f9), line-height
- sélectionner .section, ajouter padding, background (#fff)
- sélectionner .section-title, ajouter text-align, text-transform
- sélectionner .title-underline, ajouter height, width, background, placer au centre et ajouter une marge en-dessous
- sélectionner .section-center, ajouter width (90vw), max-width (600px) et placer au centre

#### Questions

- Pourquoi .section-title dans une div à part ?
  Il n'y a pas de modèles/composants en HTML donc il faut copier/coller le code. C'est plus pratique de réutiliser une div

- Pourquoi 90vw et 600px ?
  C'est une histore de préférence. Il n'y a pas de règle mais c'est une approche commune d'avoir une max-width

- Le but de .section-center ?
  Avoir une section qui fait 100% de largeur et centrer son contenu
