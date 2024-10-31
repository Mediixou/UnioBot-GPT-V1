const axios = require('axios');

const apiUrl = 'https://api.uniobot.fr/v1/gpt';
const apiKey = 'VotreApiKey'; 
const message = 'TEXTE !';

axios.post(apiUrl, {
    content: message
}, {
    headers: {
        Authorization: apiKey
    }
})
.then(response => {
    if (response && response.data) {
        console.log('Réponse:', response.data);
    } else {
        console.log('Aucune donnée dans la réponse');
    }
})
.catch(error => {
    console.error('Erreur:', error.response ? error.response.data : error.message);
});