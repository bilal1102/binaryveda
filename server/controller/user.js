const dao = require("../dao/user.js")

//add new user using signup
const signUp = async function(request,response){
    try{
        await dao.signUp(request.body);
        return response.status(200).json({ message: 'Saved Successfully' });
    
     } catch (err) {
         return response.status(500).json({ message: 'Internal Server Error' });
    
     }
    
}

//login 
const login= async function (request, response) {
    try {
        const record = await dao.login(request.body);
        return response.status(200).json(record);

    } catch (err) {
        return response.status(500).json({  message: 'Internal Server Error' });

    }
}

//get user details after login 
const getUser= async function (request, response) {
    try {
        const record = await dao.getUser(request.params.id);
        return response.status(200).json(record);

    } catch (err) {
        return response.status(500).json({  message: 'Internal Server Error' });

    }
}

module.exports = {
    signUp,
    login,
    getUser
}