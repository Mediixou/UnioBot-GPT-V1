
# UnioBot-GPT-V1

UnioBot-GPT-V1 est un bot Discord utilisant une API GPT pour interagir de manière intelligente et dynamique avec les utilisateurs. Ce bot est conçu pour offrir une expérience d'assistance automatisée et personnalisée dans les serveurs Discord.

## Fonctionnalités

- Répond de manière intelligente aux messages grâce à l'intégration GPT.
- Utilise une API dédiée pour gérer les interactions textuelles.
- Facile à configurer et à personnaliser.
- Support communautaire disponible via un serveur Discord.

## Pré-requis

- [Node.js](https://nodejs.org/) version 19 ou supérieure.
- Une clé API obtenue auprès de UnioBot pour accéder à l'API GPT.

## Installation

1. Clonez le projet et accédez au dossier :
   ```bash
   git clone https://github.com/votre-repo/UnioBot-GPT-V1.git
   cd UnioBot-GPT-V1
   ```

2. Installez les dépendances nécessaires :
   ```bash
   npm install
   ```

3. Lancez le bot :
   ```bash
   node .
   ```

## Configuration

Dans le fichier `index.js`, remplacez les valeurs par vos informations spécifiques pour l'API et le message.

Lignes à modifier dans `index.js` :
```javascript
const apiUrl = 'https://api.uniobot.fr/v1/gpt';
const apiKey = 'VotreApiKey'; // Ajoutez votre clé API ici
const message = 'TEXTE !';     // Personnalisez le message ici
```

- **apiKey** : Entrez la clé API que vous avez générée avec UnioBot.
- **message** : Saisissez le texte ou le message que vous souhaitez envoyer.

## Support

Pour toute question ou support technique, rejoignez notre serveur Discord :

[Discord Support](https://discord.gg/JYy8J3hJnB)

---

Merci d'utiliser UnioBot-GPT-V1 ! Nous espérons que cette solution vous sera utile pour intégrer GPT dans vos conversations Discord.
