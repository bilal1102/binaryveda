const model = require('../models/user.js')

const signUp = async function(body, response){
    await new model(body).save();
}

const getUser = async function(id){
    let info = await model.findById(id);
    return info;
}

const login = async function(body){
    //
}

module.exports = {
    signUp,
    getUser,
    login
}