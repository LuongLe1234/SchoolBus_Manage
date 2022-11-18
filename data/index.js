'use strict';
const utils = require('./utils');
const config = require('../config');
const sql = require('mssql');

const getBStudent = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.listStudents);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}


const getBusAmount = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.countAmountBusRouter);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getBusStudentAmount = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.countAmountBusStudent_Current);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getDriverAmount
= async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.countAmoutDriver);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getStudentCurrently

= async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.getBusStudent_recentlycreated);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getStudent_thisMonth

= async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.getBusStudent_create_thisMonth);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getStudent_thisYear


= async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.getBusStudent_create_thisYear);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}





































const getBusStop = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.listAllBusStop);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getCountAorA = async(busStudentId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('busStudentId', sql.NVarChar(50), busStudentId)
                            .query(sqlQueries.countAbsent);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getnow = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.getStudentBusthisSemester);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getallAttendance = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.getAttendance);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getAllAbsentStudent_TD
= async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.listallAbsentStudentToday);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}


const getallBusrouter = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.listBusRouter);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getallBusDriver = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.listRouterDriver);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getCampus = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.getCampus);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}






const getById = async(studentCode) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('studentCode', sql.NVarChar(50), studentCode)
                            .query(sqlQueries.studentbyID);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getPickUpId = async(busId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('busId', sql.VarChar(20), busId)
                            .query(sqlQueries.getAllPickUpId);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getBusRTID = async(busId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('busId', sql.NVarChar(50), busId)
                            .query(sqlQueries.searchBusRouter);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getStudentOnBus = async(busId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('busId', sql.NVarChar(50), busId)
                            .query(sqlQueries.listStudentonBusRouter);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const getManagerbyrole = async(roleId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('roleId', sql.Int, roleId)
                            .query(sqlQueries.listallAccount);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getAttendancebyCode = async(studentCode) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('studentCode', sql.NVarChar(50), studentCode)
                            .query(sqlQueries.getAttendance);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getDetailAttend = async(studentCode) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('studentCode', sql.NVarChar(50), studentCode)
                            .query(sqlQueries.detailAttendance);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const getAttendanceToday = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.attendanceStudentToday);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}
const updateUsers = async (userId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const update = await pool.request()
                        .input('userId', sql.NVarChar(50), userId)
                        .input('roleId', sql.Int, data.roleId)
                        .input('name', sql.NVarChar(50), data.name)
                        .input('phoneNumber',  sql.NVarChar(50), data.phoneNumber)
                        .input('campusId',  sql.Int, data.campusId)
                        .query(sqlQueries.updateUsers);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}


const createUser = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const insertEvent = await pool.request()
                            .input('userId', sql.NVarChar(50), eventdata.userId)
                            .input('email', sql.NVarChar(50), eventdata.email)
                            .input('status', sql.Bit, eventdata.status)
                            .input('image', sql.VarBinary(sql.MAX), eventdata.image)
                            .input('phoneNumber', sql.NVarChar(50), eventdata.phoneNumber)
                            .input('campusId', sql.Int, eventdata.campusId)
                            .input('name', sql.NVarChar(50),eventdata.name)
                            .input('roleId',sql.Int,eventdata.roleId)
                            .query(sqlQueries.insertUser);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}
const createBusStop = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const insertEvent = await pool.request()
                            .input('pickUpId', sql.NVarChar(50), eventdata.pickUpId)
                            .input('address', sql.NVarChar(50), eventdata.address)
                     
                            .query(sqlQueries.addnewBusStop);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const createBusStudent = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const insertEvent = await pool.request()
                            .input('studentCode', sql.VarChar(15), eventdata.studentCode)
                            .input('userId', sql.VarChar(20), eventdata.userId)
                            .input('birthday', sql.Date, eventdata.birthday)
                            .input('parentPhoneNumber', sql.VarChar(15), eventdata.parentPhoneNumber)
                            .input('gender', sql.Bit, eventdata.gender)
                            .input('semesterId', sql.VarChar(10),eventdata.semesterId)
                            .input('busId',sql.VarChar(20),eventdata.busId)
                            .query(sqlQueries.insertToStudentTable);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}
const createBusRouter = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const insertEvent = await pool.request()
                            .input('busId', sql.Int, eventdata.busId)
                            .input('pickUpId1', sql.NVarChar(50), eventdata.pickUpId1)
                            .input('campusId', sql.Int, eventdata.campusId)
                            .input('plateNumber', sql.NVarChar(50), eventdata.plateNumber)
                            .input('pickUpId2',sql.NVarChar(50),eventdata.pickUpId2)
                            .input('pickUpId3',sql.NVarChar(50),eventdata.pickUpId3)
                            .query(sqlQueries.addNewBusRouter);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}


const updateEvent = async (eventId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const update = await pool.request()
                        .input('email', sql.NChar(40), eventId)
                        .input('pickUpId', sql.Int, data.eventTitle)
                        .input('parentPhoneNumber', sql.NChar(15), data.eventDescription)
                        .input('semester',  sql.NChar(25), data.startDate)
                        .input('codeStudent',  sql.NChar(10), data.startDate)
                        .query(sqlQueries.updateEvent);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteEvent = async (eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const deleteEvent = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getallBusDriver,
    getallBusrouter,
    getallAttendance,
    getBStudent,
    getById,
    getnow,
    getStudentOnBus,
    getBusRTID,
    getAttendancebyCode,
    updateUsers,
    createBusStudent,
    createUser,
    getCountAorA,
    createBusRouter,
    createBusStop,
    
    getAllAbsentStudent_TD
,
    updateEvent,
    getBusStop,
    getManagerbyrole,
    getAttendanceToday,
    getDetailAttend,
    deleteEvent,
    getPickUpId,
    getBusAmount,
    getBusStudentAmount,
    getDriverAmount,
    getStudentCurrently,
    getStudent_thisMonth,
    getStudent_thisYear,
    getCampus
}