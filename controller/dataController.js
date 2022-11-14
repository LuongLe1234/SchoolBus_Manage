'use strict';


const eventData = require('../data');

const getallBusStudent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getBStudent(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAllBusStop = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getBusStop(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getallAbsentStudentToday = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getAllAbsentStudent_TD(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getCountAbsent = async (req, res, next) => {
    try {
        const busStudentId = req.params.id;
        const event = await eventData.getCountAorA(busStudentId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getallbusStudentSemester = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getnow(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getallBusrouter = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getallBusrouter(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getallBusDriver = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getallBusDriver(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAllAttendance = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getallAttendance(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getEvent = async (req, res, next) => {
    try {
        const studentCode = req.params.id;
        const event = await eventData.getById(studentCode);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getBusrouterbyID = async (req, res, next) => {
    try {
        const busId = req.params.id;
        const event = await eventData.getBusRTID(busId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getStudentonBusRouter = async (req, res, next) => {
    try {
        const busId = req.params.id;
        const event = await eventData.getStudentOnBus(busId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAttendanceCode = async (req, res, next) => {
    try {
        const busStudentId = req.params.id;
        const event = await eventData.getAttendancebyCode(busStudentId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAttendanceDetail = async (req, res, next) => {
    try {
        const studentCode = req.params.id;
        const event = await eventData.getDetailAttend(studentCode);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAttendanceCurrent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getAttendanceToday(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUsers = async (req, res, next) => {
    try {
        const eventdata = req.body;
        const insert = await eventData.createUser(eventdata);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createnewBusRouter = async (req, res, next) => {
    try {
        const eventdata = req.body;
        const insert = await eventData.createBusRouter(eventdata);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const createNewBusStudent = async (req, res, next) => {
    try {
        const eventdata = req.body;
        const insert = await eventData.createBusStudent(eventdata);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getManager = async (req, res, next) => {
    try {
        const roleId = req.params.id;
        const event = await eventData.getManagerbyrole(roleId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateUserSManager = async (req, res, next) => {
    try {
        const userId =  req.params.id;
        const data = req.body;
        const updated = await eventData.updateUsers(userId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updatEvent = async (req, res, next) => {
    try {
        const eventId =  req.params.id;
        const data = req.body;
        const updated = await eventData.updateEvent(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEvent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await eventData.deleteEvent(eventId);
        res.send(deletedEvent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getallBusDriver,
    getAllAttendance,
    getallBusrouter,
    createNewBusStudent,
    getallBusStudent,
    getEvent,
    getStudentonBusRouter,
    getBusrouterbyID,
    createnewBusRouter,
    updateUserSManager,
    addUsers,
    getAllBusStop,
    getAttendanceCode,
    updatEvent,
    getAttendanceDetail,
    getallAbsentStudentToday,
    getCountAbsent,
    getManager,
    getAttendanceCurrent,
    getallbusStudentSemester,
    deleteEvent
}