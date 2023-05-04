const mongoose = require('mongoose')



const appointmentSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
    phone: {
        type: String,
        required:true
    },
    name: {
        type: String,
       required:true 
    },
    comment: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('Appointment',appointmentSchema)