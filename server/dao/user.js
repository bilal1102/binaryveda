const model = require('../models/user.js')

const signUp = async function(body, response){
    await new model(body).save();
}

const getUser = async function(id){
    let info = await model.findById(id);
    return info;
}

const login = async function(body){
    console.log('body',body)
    let info = await model.findOne({email:body.email, password:body.password})
    console.log(info)
    return info;

}

module.exports = {
    signUp,
    getUser,
    login
}