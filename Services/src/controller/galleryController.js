const galleryModel = require("../model/galleryModel")
const admin = require("../model/adminModel")
const validation = require('../validation/validation')
const fileUploader = require('../fileUploader/aws')



const uploadPhotos = async (req, res) => {
    try {
        const adminId = req.decodedToken.userId

        files = req.files

        const createData = {};


        
        if (!adminId) return res.status(403).send({ status: false, message: 'please logIn' })
        const CheckAdmin = await admin.findById(adminId)
        if(!CheckAdmin) return res.status(403).send({ status: false,message: 'account not exist' })
        createData.createdBy = adminId
     if (files.length > 0) {
            let uploadedTopicImages = [];
            for (let i = 0; i < files.length; i++) {
                if (validation.isValidImage(files[i])) return res.status(400).send({ status: false, message: "Enter a valid image file" });
                let uploadedFileDetails = await fileUploader.uploadFile(files[i]);
               
                uploadedTopicImages.push(uploadedFileDetails);
            }
            createData.photos = uploadedTopicImages;
        }

        const uploadphotoes = await galleryModel.create(createData)

        return res.status(200).send({status:true,message:"success",data:uploadphotoes});
        
    } catch (error) {
        return res.status(500).send({status:false, message:error.message})
    }
}

const getPhotos = async (req, res) => {
    try {
        

    const { pageNo = 1} = req.query;
    const limit = 6;
    
   const getPhotos = await galleryModel
        .find(query)
       .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((pageNo - 1) * limit)
      .exec();

        if (getPhotos.length < 1) {
          return res
            .status(400)
            .send({ status: false, message: "No photos found" });
        } else {
            return res.status(200).send({ status: true, message:"success",results: getPhotos});
        }
             
    } catch (error) {
        return res.status(500).send({status:false, message:error.message})
    }
}
 
module.exports ={uploadPhotos,getPhotos}