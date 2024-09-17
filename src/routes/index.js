const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

module.exports = router;