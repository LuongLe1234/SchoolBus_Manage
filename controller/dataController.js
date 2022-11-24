'use strict';


const eventData = require('../service');

const getallBusStudent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getBStudent(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllCampus = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getCampus(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCountAborAttend_30dayneariest = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getCount(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}







const getAmountBusrouter = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getBusAmount(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAmountBusStudent = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getBusStudentAmount(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAmountDriver = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getDriverAmount(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getBusStudent_Currently = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getStudentCurrently(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getBusStudent_ThisMonth = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getStudent_thisMonth(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getBusStudent_Thisyear = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getStudent_thisYear(eventId);
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
        const studentCode = req.params.id;
        const event = await eventData.getCountAorA(studentCode);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getallbusStudentSemester = async (req, res, next) => {
    try {
        const page = req.params.id;
        const event = await eventData.getnow(page);
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
const getAllPickUpId_Router = async (req, res, next) => {
    try {
        const busId = req.params.id;
        const event = await eventData.getPickUpId(busId);
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
        res.send(insert)
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const createnewBusStop = async (req, res, next) => {
    try {
        const eventdata = req.body;
        const insert = await eventData.createBusStop(eventdata);
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

const getBusIdandQrCode = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await eventData.getbusandqr(eventId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getQrCode = async (req, res, next) => {
    try {
        const busId = req.params.id;
        const event = await eventData.getQrCodebyBusId(busId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getRolebyEmail = async (req, res, next) => {
    try {
        const email = req.params.id;
        const event = await eventData.getbyEmail(email);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getDetailbyEmailofStudent = async (req, res, next) => {
    try {
        const email = req.params.id;
        const event = await eventData.getDetailStudent(email);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateStudent = async (req, res, next) => {
    try {
        const eventId =  req.params.id;
        const data = req.body;
        const updated = await eventData.updateDetailofStudent(eventId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAttendancebyDay_Student = async (req, res, next) => {
    try {
        const day = req.params.id;
        const email=req.params.email;
        const event = await eventData.getAttendancebyDay(day,email);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const get7dayAttendance_neariest = async (req, res, next) => {
    try {
        const email = req.params.id;
        const event = await eventData.getCountAttendance(email);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getallAcount_ActiveandInActive = async (req, res, next) => {
    try {
        const email = req.params.id;
        const event = await eventData.getAccount_ActiveorInactive(email);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getCheckQrCodeScan_Student = async (req, res, next) => {
    try {
        const qrCode = req.params.id;
        const email=req.params.email;
        const event = await eventData.getCheckQrCode(qrCode,email);
        res.send(event);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAllAccountinSystem = async (req, res, next) => {
    try {
        const roleId = req.params.id;
        const event = await eventData.getAccountinSystem(roleId);
        res.send(event);
    } catch (error) {
        res.status(400).send(error.message);
    }
}










module.exports = {
    getAllAccountinSystem,
    
    getCheckQrCodeScan_Student,
    getallAcount_ActiveandInActive,
    get7dayAttendance_neariest,
    getAttendancebyDay_Student,
    
    updateStudent,
    getDetailbyEmailofStudent,
    getRolebyEmail,
    getQrCode,
    getBusIdandQrCode,
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
    createnewBusStop,
    getAttendanceDetail,
    getallAbsentStudentToday,
    getCountAbsent,
    getManager,
    getAttendanceCurrent,
    getallbusStudentSemester,
    deleteEvent,
    getAllPickUpId_Router,
    getAmountBusrouter,
    getAmountBusStudent,
    getAmountDriver,
    getBusStudent_Currently,
    getBusStudent_ThisMonth,
    getBusStudent_Thisyear,
    getAllCampus,
    getCountAborAttend_30dayneariest
}