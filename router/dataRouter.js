'use strict';

const express = require('express');
const eventControll = require('../controller/dataController');
const router = express.Router();

router.get('/events', eventControll.getallBusStudent);

router.get('/busStudentSemester', eventControll.getallbusStudentSemester);

router.get('/eventBusRouter',eventControll.getallBusrouter);

router.get('/eventBusdriver',eventControll.getallBusDriver);

router.get('/eventgetID/:id', eventControll.getEvent);

router.get('/busRouterbyID/:id', eventControll.getBusrouterbyID);

router.get('/studentbyBusRouter/:id', eventControll.getStudentonBusRouter);


router.get('/manager/:id', eventControll.getManager);

router.get('/countA/:id', eventControll.getCountAbsent);

router.get('/attendanceCode/:id', eventControll.getAttendanceCode);

router.get('/attendanceCurrent', eventControll.getAttendanceCurrent);

router.get('/attendanceCodeDetail/:id', eventControll.getAttendanceDetail);

router.get('/getallAttendacne', eventControll.getAllAttendance);


router.post('/event', eventControll.addUsers);

router.put('/event/:id', eventControll.updatEvent);

router.delete('/event/:id', eventControll.deleteEvent);


module.exports = {
    routes: router
}