const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const app = express();
const port = 5000;

// Adicione suas chaves de API
const publicKey = 'db09d86749d143e63995337baab7cef8';
const privateKey = '54b78265e63b741b6a8e207742773c84ccdea015';

// Middleware para gerar o hash
app.use((req, res, next) => {
  const timestamp = new Date().getTime().toString();
  const hash = crypto.createHash('md5').update(timestamp + privateKey + publicKey).digest('hex');
  req.apiKeyParams = `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
  next();
});

// Rota de exemplo para obter eventos da Marvel API
app.get('/events', async (req, res) => {
  try {
    const response = await axios.get(`https://gateway.marvel.com/v1/public/events?${req.apiKeyParams}`);
    res.json(response.data);
  } catch (error) {
    console.error('Erro ao obter eventos:', error.message);
    res.status(500).json({ error: 'Erro ao obter eventos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
