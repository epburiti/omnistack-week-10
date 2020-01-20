const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes')

const app = express();

mongoose.connect('mongoosemongodb+srv://omnistack:omnistack@cluster0-zya08.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Métodos HTTP: get, post, put, delete

// Tipos de parametros:

//Query params: request.query (Filtros, ordenação, paginação...)
// Route params: request.params (identificar um recurso na alteração | remoção)
// Body: 

app.use(cors())
app.use(express.json());
app.use(routes);
app.listen(3333);

