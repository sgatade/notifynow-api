const express = require("express");
const mongoose = require("mongoose");

const Event = require("../models/event");

const router = new express.Router();

router.get("/events", async (req, res) => {
    try {
        
        const events = await Event.find();
        res.send(events);

    } catch (error) {
        res.status(400).send(error);
    }
});

router.post("/events", async (req, res) => {
    try {
        const event = new Event(req.body);
        await event.save();
        res.send(event);            
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;