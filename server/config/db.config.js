let mongoose = require("mongoose");
const port =5555;
const dburi = 'mongodb+srv://hackerbill:hackerbill@cluster0.db44y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dburi,{
    useNewUrlParser:true,
    useUnifiedTopology: true ,
}).then(()=>{
    console.log('DB connection established');

}).catch(error=>{
    console.error('could not establish mongoose connection');
});
