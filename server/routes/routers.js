const express = require('express') ;
const route = express.Router()

const services = require('../services/render');

route.get('/', services.homeRoutes);

route.get('/add_user', services.addUser);

route.get('/update_user', services.updateUser);

module.exports = route