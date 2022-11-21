'use strict';

const express = require('express');
const eventControll = require('../controller/dataController');
const router = express.Router();

router.get('/events', eventControll.getallBusStudent);


router.get('/busStop', eventControll.getAllBusStop);

router.get('/campus', eventControll.getAllCampus);


router.get('/busStudentSemester/:id', eventControll.getallbusStudentSemester);

router.get('/eventBusRouter',eventControll.getallBusrouter);

router.get('/eventBusdriver',eventControll.getallBusDriver);

router.get('/eventgetID/:id', eventControll.getEvent);

router.get('/allPickUpId/:id', eventControll.getAllPickUpId_Router);

router.get('/busRouterbyID/:id', eventControll.getBusrouterbyID);

router.get('/studentbyBusRouter/:id', eventControll.getStudentonBusRouter);


router.get('/manager', eventControll.getManager);

router.get('/countA/:id', eventControll.getCountAbsent);

router.get('/attendanceCode/:id', eventControll.getAttendanceCode);

router.get('/attendanceCurrent', eventControll.getAttendanceCurrent);

router.get('/attendanceCodeDetail/:id', eventControll.getAttendanceDetail);

router.get('/getallAttendacne', eventControll.getAllAttendance);

router.get('/getAllStudentAbsentToday',eventControll.getallAbsentStudentToday);

router.post('/createNewBusStudent',eventControll.createNewBusStudent);

router.post('/createBus_Stop',eventControll.createnewBusStop);


router.post('/event', eventControll.addUsers);

router.post('/createBusRouter', eventControll.createnewBusRouter);


router.put('/updateManager/:id', eventControll.updateUserSManager);


router.put('/event/:id', eventControll.updatEvent);

router.delete('/event/:id', eventControll.deleteEvent);











router.get('/rateAttendance', eventControll.getCountAborAttend_30dayneariest);

router.get('/amountBusRouter', eventControll.getAmountBusrouter);
router.get('/amountBusStudent', eventControll.getAmountBusStudent);
router.get('/amountDriver', eventControll.getAmountDriver);
router.get('/studentCurrently', eventControll.getBusStudent_Currently);
router.get('/studentCreate_thismonth', eventControll.getBusStudent_ThisMonth);
router.get('/studentCreate_thisyear', eventControll.getBusStudent_Thisyear);






module.exports = {
    routes: router
}