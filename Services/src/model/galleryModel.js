const mongoose = require('mongoose')



const galleryModel = new mongoose.Schema({
    uploadedBy: {
        type: mongoose.Types.ObjectId,
        ref:'Admin'
    },
    photos: {
     type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('Gallery',galleryModel)