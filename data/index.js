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


const createUser = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('query');
        const insertEvent = await pool.request()
                            .input('userId', sql.NVarChar(50), eventdata.userId)
                            .input('email', sql.NVarChar(50), eventdata.email)
                            .input('status', sql.Bit, eventdata.status)
                            .input('image', sql.Binary(50), eventdata.image)
                            .input('phoneNumber', sql.NVarChar(50), eventdata.phoneNumber)
                            .input('campusId', sql.Int, eventdata.campusId)
                            .query(sqlQueries.insertUser);                            
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
    createUser,
    getCountAorA,
    updateEvent,
    getManagerbyrole,
    getAttendanceToday,
    getDetailAttend,
    deleteEvent
}