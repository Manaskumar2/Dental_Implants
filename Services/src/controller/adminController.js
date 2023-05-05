 const adminModel = require("../model/adminModel")
const validation = require("../validation/validation") 
const cache = require('memory-cache');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcryptjs")





const signUp = async (req, res) => {
    try {
        let data = req.body;

        let { name, email, password, confirmPassword } = data

        if (validation.isValidBody(data)) return res.status(400).send({ status: false, message: "provide all required fields" })

        if (!validation.isValid(name)) return res.status(400).send({ status: false, message: `Username is Required` });
        if (!validation.isValidName(name)) return res.status(400).send({ status: false, message: "please enter a valid name" })
        data.name = name

        if (!validation.isValid(email)) return res.status(400).send({ status: false, message: `E-mail is Required` })
        let uniqueEmail = await adminModel.findOne({ email: email })
        if (!validation.isValidEmail(email)) return res.status(400).send({ status: false, message: `This E-mail is Invalid` })
        if (uniqueEmail) return res.status(400).send({ status: false, message: `This E-mail has already registered Please Sign In`, })
        data.email = email.toLowerCase()

        if (!validation.isValidPwd(password)) return res.status(400).send({ status: false, message: "Password should be 8-15 characters long and must contain one of 0-9,A-Z,a-z and special characters", })
        if (password !== confirmPassword) return res.status(400).send({ status: false, message: "both the password does not match" })


        const hashedPassword = await bcrypt.hash(password, 10)
        data.password = hashedPassword
        data.confirmPassword = hashedPassword
        const createUser = await adminModel.create(data)

        res.status(201).json({ status: true, message: "SignUp sucessFully please  log in" , data: createUser})
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

const signIn = async (req, res) => {
    try {
            let data = req.body
            let { email, password } = data
    
            if (validation.isValidBody(data)) return res.status(400).send({ status: false, msg: "provide all  details to login" })
    
            if (!validation.isValid(email)) return res.status(400).send({ status: false, message: "email is required" })
            email = email.toLowerCase()
    
            if (!validation.isValid(password)) return res.status(400).send({ status: false, message: "Pasworrd is required" })
    
            let findUser = await adminModel.findOne({ email: email })
            if (!findUser) return res.status(400).send({ status: false, message: "The email-id is wrong" })
    
            let bcryptPass = await bcrypt.compare(password, findUser.password)
            if (!bcryptPass) return res.status(400).send({ status: false, message: "Password incorrect" })
            if (findUser.isVerified == false) {
                return res.status(400).send({ status: false, message: "Please confirm your email to login" })
            }
    
            let token = jwt.sign({ email: findUser.email, userId: findUser._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
    
            const response = {
                name: findUser.name,
                email:findUser.email,
                _id:findUser._id
            }
            res.status(200).send({ status: true, token: token, message: "User login successfully", user:response })
        
    } catch (error) {
    console.log(error)
        res.status(500).send({ status: false, error: error.message })
    }
}

const getUserDetails = async (req, res) => {
    try {
        const userId = req.params.userId;

        if (!userId) {
            return res.status(403).send({ status: false, message: 'userId is missing, provide userId' });
        }
        if (!validation.isValidObjectId(userId)) {
            return res.status(400).send({ status: false, message: 'provide valid userId' });
        }

        const key = `userDetails_${userId}`;

        const cachedData = cache.get(key);
        if (cachedData) {
            return res.status(200).send({ status: true, data: cachedData });
        }

        const userDetails = await adminModel.findById({ _id: userId }).select({name:1,email:1,phone:1,photo:1,role:1,targetExam:1,teachingExperience:1,desiredClass:1,isVerified:1});
        if (!userDetails) {
            return res.status(400).send({ status: false, message: 'Please fill your details' });
        }

        cache.put(key, userDetails,60 * 60 * 1000);

        return res.status(200).send({ status: true, data: userDetails });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        const userId = req.decodedToken.userId

        const data = req.body

        if (!validation.isValid(userId)) {
            return res.status(400).send({ status: false, message: "You Are not authorized, Please login" });
        }
        if (!validation.isValidObjectId(userId)) {
            return res.status(400).send({ status: false, message: "You Are not authorized, Please login" });
        }
        if (!(validation.isValidreqBody(data))) {
            return res.status(400).send({ status: false, message: "Enter a valid details" });
        }

        let { name, password, confirmPassword, gender} = data;
        let updateData = {};

        if (name) {
            if (!validation.isValidName(name)) { return res.status(400).send({ status: false, message: "Enter valid Name" }); }

            updateData.name = name;
        }
        if (gender) {
            if (!validation.isValidGender(gender)) return res.status(400).send({ status: false, message: "invalid request Parameter in the Gender, It should be 'MALE', 'FEMALE', 'OTHERS' " })
            updateData.gender = gender
        }
        if (password) {
            if (!validation.isValidPwd(password)) { return res.status(400).send({ status: false, message: "please enter a valid password between 8 to 15 digit" }) }
            if (password !== confirmPassword) return res.status(400).send({ status: false, message: "both the password does not match" })
            updateData.password = await bcrypt.hash(password, 10);

        }

        const key = `userDetails_${userId}`;


        const updateUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true })



        const response = {
            name: updateUser.name,
            email: updateUser.email,  
           gender:updateUser.gender
        } 
        cache.put(key, response,60 * 60 * 1000)
        res.status(200).send({ status: true, message: "User profile updated", data:response })

    } catch (error) {
        res.status(500).send({ status: false, error: error.message })
    }
}

module.exports = {signUp,signIn,getUserDetails,updateUser}