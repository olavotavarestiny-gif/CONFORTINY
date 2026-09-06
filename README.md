# ConforTiny

Site vitrine en français pour les soins et le bien-être ConforTiny.

## Modifier les informations

Les éléments qui changent régulièrement se trouvent au début de `src/main.js`, dans le bloc `content` :

- `brand` : phrase de marque et introduction de la page d’accueil ;
- `contact` : téléphone, e-mail, adresse, stationnement, horaires, Salonkee, WhatsApp, Instagram et carte Google ;
- `serviceCategories` : catégories, noms, durées, prix et descriptions des soins ;
- `instagramPosts` : liens des publications présentées dans le carrousel ;
- `youtube` : titre et lien de la vidéo de présentation ;
- `reviews` : vrais témoignages, nom de la personne et source de l’avis.

Les valeurs vides ou marquées « À compléter » sont volontairement visibles tant que les informations définitives n’ont pas été fournies. Pour un tarif, renseignez uniquement le nombre, par exemple `95`.

## Modifier les photos

1. Placez la nouvelle photographie dans `public/images`.
2. Dans `src/main.js`, remplacez le chemin correspondant par `/public/images/nom-de-la-photo.jpeg`.

Le logo principal est `public/images/logo.png`. Les images actuellement affichées sont référencées directement dans `src/main.js`.

## Typographie

- Titres : Kepler Std (`public/fonts/KeplerStdRegular.otf` et `KeplerStdSemibold.otf`).
- Corps, navigation et boutons : Akmorn Grotesque Light, Regular, Medium et SemiBold dans `public/fonts`.

Les fontes sont intégrées localement avec `@font-face` : elles ne dépendent pas de Google Fonts ni des fontes installées sur l’appareil du visiteur.

Après une modification, enregistrez simplement le fichier. Aucun outil de compilation n’est nécessaire.

## Voir le site localement

```sh
python3 -m http.server 4173
```

Puis ouvrez `http://localhost:4173` dans un navigateur.

## Déployer sur Netlify

Le fichier `netlify.toml` configure déjà le site comme un projet statique sans commande de compilation.

1. Dans Netlify, choisissez **Add new project** puis **Import an existing project**.
2. Connectez GitHub et sélectionnez le dépôt `site-confortiny`.
3. Laissez la commande de build vide et utilisez `.` comme dossier de publication.
4. Lancez le déploiement avec **Deploy site**.

Chaque nouvelle modification envoyée sur la branche `main` sera ensuite publiée automatiquement par Netlify.

## Déployer sur Vercel

Le fichier `vercel.json` configure le projet comme un site statique et publie la racine du dépôt.

1. Importez le dépôt `site-confortiny` depuis GitHub.
2. Utilisez **Other** comme Framework Preset.
3. Gardez `.` comme Root Directory.
4. Lancez le déploiement. Aucune commande de build ou d'installation n'est nécessaire.

## Évolution recommandée

Pour permettre à la propriétaire de modifier les tarifs et la galerie depuis une interface, sans ouvrir les fichiers, la prochaine étape conseillée est de connecter ce même contenu à un CMS visuel (par exemple Decap CMS ou Sanity) lors du choix de l’hébergement et du nom de domaine.
