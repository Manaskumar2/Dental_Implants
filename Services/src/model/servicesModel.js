const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    serviceName: {
        type: String,
        required:true
    },
    descriptions: {
        type: String,
        required:true
    },
    coverImage: {
        type: String,
        required:true
    },
    isDeleted: {
        type: Boolean,
        default:false
    },
    createdBy: {
        type:mongoose.Schema.Types.ObjectId,
        ref :"Admin"
    }
}, { timestamps: true })

module.exports = mongoose.model("Service",servicesSchema)