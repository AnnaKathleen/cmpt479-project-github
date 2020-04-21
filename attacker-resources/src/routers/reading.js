const express = require('express')
const Reading = require('../models/reading')
const router = new express.Router()

router.post('/victiminfo', async (req, res) => {
    const reading = new Reading(req.body)

    try {
        await reading.save()
        res.status(201).send(reading)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/victiminfo', async (req, res) => {
    try {
        const readings = await Reading.find({})
        res.send(readings)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/readings/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const reading = await Reading.findById(_id)
        if (!reading) {
            return res.status(404).send()
        }
        res.send(reading)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router