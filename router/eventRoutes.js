'use strict';

const express = require('express');
const eventControll = require('../controller/eventController');
const router = express.Router();

router.get('/events', eventControll.getAllEvents);
router.get('/eventgetID/:id', eventControll.getEvent);
router.post('/event', eventControll.addEvent);
router.put('/event/:id', eventControll.updatEvent);
router.delete('/event/:id', eventControll.deleteEvent);


module.exports = {
    routes: router
}