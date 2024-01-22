const http = require('http');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
  if (req.method === 'POST' && req.url === '/strapi-webhook') {
    console.log('Webhook Strapi reçu !');

    try {
      // Fais une nouvelle requête pour obtenir les données mises à jour depuis Strapi
      const response = await axios.get('http://localhost:1337/api/articles?populate=*');
      
      // Assure-toi d'avoir la logique pour mettre à jour tes données dans `articles.js`
      // En fonction de ta structure, tu devrais ajuster cela
      const updatedData = response.data;
      // Assume que `updateData` est une fonction qui met à jour les données dans `articles.js`
      updateData(updatedData);

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Webhook Strapi reçu !');
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erreur lors de la mise à jour des données.');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Endpoint non trouvé');
  }
});

// Assure-toi d'avoir une fonction pour mettre à jour les données dans `articles.js`
function updateData(data) {
  // Implémente ta logique ici pour mettre à jour les données
  console.log('Mise à jour des données :', data);
}

// Port sur lequel le serveur écoutera les requêtes
const port = 1337;

server.listen(port, () => {
  console.log(`Serveur Web en cours d'exécution sur le port ${port}`);
});
