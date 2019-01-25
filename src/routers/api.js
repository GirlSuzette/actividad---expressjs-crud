// configurar rutas

const { Router } = require('express')
const app = Router()
const users = require('../controllers/users/user')

app.get('/users', users.index);
app.get('/users/:id', users.find);



module.exports = app; 