const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/player_controller');

/**
 * @description Root Route
 * @method GET /
 */
//page routes and player data rederized
route.get('/', services.index);
route.get('/scoreTable', services.playerList);

//API
route.post('/api/players', controller.create);
route.get('/api/players', controller.find);
route.put('/api/players/:id', controller.update);
route.delete('/api/players/:id', controller.delete);

module.exports = route