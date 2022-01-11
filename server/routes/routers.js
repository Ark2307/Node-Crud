const express = require('express') ;
const route = express.Router()

const controller = require("../controller/controller");

const services = require('../services/render');

route.get('/', services.homeRoutes);

route.get('/add_user', services.addUser);

route.get('/update_user', services.updateUser);

//API routes will be written here
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route