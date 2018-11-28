const express = require('express');
const router = express.Router();

const Mensajes = require('../models/mensajes');

router.get('/area', async(req, res) => {
    const mensajes = await Mensajes.find();
    res.json(mensajes);
});

router.post('/area', async(req, res) => {
    const { title, description } = req.body;
    const mensajes = new Mensajes({ title, description });
    await mensajes.save();
    res.json({ status: 'Task saved' });
});

module.exports = router;