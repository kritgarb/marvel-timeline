// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const config = require('./config');
const app = express();
const PORT = 5000;

// Configurar middleware CORS
app.use(cors());

const publicKey = config.marvel.publicKey;
const privateKey = config.marvel.privateKey;

const getMarvelApiUrl = (endpoint) => {
  const timestamp = new Date().getTime();
  const hash = require('crypto').createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');
  return `https://gateway.marvel.com/v1/public/${endpoint}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
};

// Rota para obter eventos importantes ao longo do tempo (comics)
app.get('/important-events', async (req, res) => {
  try {
    const response = await axios.get(getMarvelApiUrl('comics'), {
      params: {
        formatType: 'comic',
        orderBy: '-focDate',
        limit: 10,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter eventos importantes:', error.message);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
