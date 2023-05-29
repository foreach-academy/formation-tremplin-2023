## PROJET LES UNITÉS CSS

#### Setup

- créer un fichier (03-units)
- créer index.html (structure générale - emmet !)
- créer un fichier css (ex: main, styles, etc...)
- lier le css dans le html (dans élément <head>)

#### HTML (strucutre)

- créer une div avec l'id "navbar" et placer dedans :
  - une span avec la classe "logo" et le texte logo
- juste après la première div, faire une autre div avec la classe "hero" et placer dedans :
  - une span avec le texte "NOUS SOMMES LES MEILLEURS"
  - un h1 avec le texte "Nous Croyons en la Créativité"
  - un p avec du lorem10
  - un bouton avec la class "hero-btn" et le texte "En Savoir Plus"

#### CSS (styles)

- définir les marges à 0 pour tous les élements (\* {margin: 0})
- pour la navbar - définir height et ajouter un background-color
- pour le logo - définir font-size et ajouter une color
- pour le hero - définir color, background, et une min-height avec calc() (soustraire la hauteur de la navbar de toute la hauteur de l'écran)
- pour le bouton - ajouter background et color
