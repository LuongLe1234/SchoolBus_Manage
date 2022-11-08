'use strict';

const express = require('express');
const eventControll = require('../controller/eventController');
const router = express.Router();

router.get('/events', eventControll.getAllEvents);
router.get('/eventBusRouter',eventControll.getallBusrouter);
router.get('/eventBusdriver',eventControll.getallBusDriver);
router.get('/eventgetID/:id', eventControll.getEvent);
router.get('/getallAttendacne', eventControll.getAllAttendance);
router.post('/event', eventControll.addUsers);
router.put('/event/:id', eventControll.updatEvent);
router.delete('/event/:id', eventControll.deleteEvent);


module.exports = {
    routes: router
}