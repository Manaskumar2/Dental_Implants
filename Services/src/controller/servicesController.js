// const serviceModel = require("../model/servicesModel")
// const adminModel = require("../model/adminModel")
// const validation = require("../validation/validation")
// const aws = require("../fileUploader/aws")
// const { v4: uuidV4 } = require("uuid");


// const createService = async (req, res) => {
//     try {
//         const data = req.body
//         const adminId = req.decodedToken.userId
//         const files = req.files

//         const { serviceName, descriptions } = data
//         if (!(validation.isValidreqBody(data) || files)) return response.status(400).send({ status: false, message: "body should not empty" })
//         if (!adminId) return response.status(403).send({ status: false, message: "please logIn" })
//         data.createdBy = adminId
        
//         if (!validation.isValid(serviceName)) return response.status(400).send({ status: false, message: "service name should not be empty" })
//         if (!validation.regexSpaceChar(serviceName)) return response.status(400).send({ status: false, message: "service name should be  a valid string" })
        
//         if (!validation.isValid(descriptions)) return response.status(400).send({ status: false, message: "service name should not be empty" })
//         if (!validation.regexSpaceChar(descriptions)) return response.status(400).send({ status: false, message: "service name should be  a valid string" })


        
//         const  checkServiceName = await serviceModel.findOne({ serviceName:serviceName });
//         if (checkServiceName) return res.status(409).send({ status: false, message: "service name  already exist" })

//         if (!files || files.length == 0) return res.status(400).send({ status: false, message: "Please upload Service Image" })
//      if (files.length > 0) {
//   if (validation.isValidImage(files))
//     return res
//       .status(400)
//       .send({ status: false, message: "Enter a valid image file" });

//   let fileWithNewId = files[0];
//   fileWithNewId = { ...fileWithNewId, id: uuidV4() };

//   let uploadedServiceImage = await uploadFile(fileWithNewId);

//   data.coverImage = uploadedServiceImage;
// }
        
//         const createServices = await serviceModel.create(data)

//         return res.status(200).send({status:true,message:"success",result :createServices});
        
//     } catch (error) {
//         return res.status(500).send({status:false,message:error.message})
//     }
// }
// const getServices = async (req, res) => {
//     try {

//         const query = { isDeleted: false }

//       if (req.query.serviceName) {
//       query.serviceName = { $regex: req.query.serviceName.trim(), $options: "i" };
//         }
        

//         const findServices = await serviceModel.find(query).sort({ createdAt: -1 })
//         if (!findServices.length > 0) return res.status(404).send({ status: false, message: "services not found" })
        
//         return res.status(200).send({ status: true, message: "succesfully get Services", result: findServices })
        
//     } catch (error) {
//         return res.status(500).send({status:false,message:error.message})
//     }
// }

// module.exports = {createService,getServices}