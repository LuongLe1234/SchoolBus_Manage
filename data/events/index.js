'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getEvents = async(eventId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const event = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.eventlist);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}


const getById = async(codeStudent) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const event = await pool.request()
                            .input('codeStudent', sql.NChar(10), codeStudent)
                            .query(sqlQueries.eventbyId);
        return event.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatEvent = async (eventdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
        const insertEvent = await pool.request()
                            .input('email', sql.NChar(40), eventdata.email)
                            .input('pickUpId', sql.Int, eventdata.pickUpId)
                            .input('parentPhoneNumber', sql.NChar(15), eventdata.parentPhoneNumber)
                            .input('semester', sql.NChar(25), eventdata.semester)
                            .input('codeStudent', sql.NChar(10), eventdata.codeStudent)
                            .query(sqlQueries.createEvent);                            
        return insertEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateEvent = async (eventId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('events');
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
        const sqlQueries = await utils.loadSqlQueries('events');
        const deleteEvent = await pool.request()
                            .input('eventId', sql.Text, eventId)
                            .query(sqlQueries.deleteEvent);
        return deleteEvent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getEvents,
    getById,
    creatEvent,
    updateEvent,
    deleteEvent
}