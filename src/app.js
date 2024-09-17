const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Importar rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Escuchar en el puerto
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://localhost:${port}`);
});