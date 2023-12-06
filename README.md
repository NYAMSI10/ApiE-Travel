# ApiE-Travel
C'est une api de reservation de voyage en ligne avec qu'importe le moyen de transport (Train, Bus, Avion,...).

# Les Technos Utilisées

`NodeJs + ExpressJs + Apollo Server + Prisma + Mysql + PayPal`

# Lancement du projet 

- Vous clonez le projet avec :
  `git clone https://github.com/NYAMSI10/ApiE-Travel.git`
- Vous ouvrez le dossier pour vous avez cloner le projet
- Vous installez le dossier node_modules avec la commande
  `npm install`
- vous créez un fichier .env et vous mettez à l'intérieur Url de votre base de donnée comme par exemple
  `DATABASE_URL="mysql://nomdeuser:motdepasse@localhost:3306/nomdevotreBD"`
- Fait des migrations avec Prisma
  `prisma migration dev`
- Lancez le projet
  `nodemon`
