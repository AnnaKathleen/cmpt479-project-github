const mongoose = require('mongoose')

const readingSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Reading = mongoose.model('VictimInfo', readingSchema)

module.exports = Reading