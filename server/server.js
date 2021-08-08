const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require( './config/db.config')

// const router = express.Router();

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};
// app.use("/", router)
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
.use((request,response,next)=>{
  response.header("Access-Control-Allow-Origin","*");
  response.header(
      "Access-Control-Allow-Methods",
      "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  response.header(
      "Access-control-Allow-Headers",
      "Acess-Control-Allow-Headers,Origin,X-Requested-With,Content-type,Accept,Authorization,refreshToken");
  next();

})
.use("/api", require('./routes/user'))


// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Binaryveda application.Home" });
//   res.end()
// });

// router.post("/hello",(req,res)=>{
//   console.log('test');
//   res.json({message:"hello"})
//   res.end()
// })

// Login route
// router.post("/login", (req, res) => {
//     res.json({ message: "Login" });
//   });

// // signup route
// router.post("/singup", (req, res) => {
//     console.log('hello')
//     res.json({ message: "Signup" });
//   });

// // user route
// app.get("user/id", (req, res) => {
//     res.json({ message: "Welcome to Binaryveda application." });
//   });

// set port, listen for requests
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});