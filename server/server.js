const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require( './config/db.config')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));






// // simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Binaryveda application." });
// });

// Login route
app.get("/login", (req, res) => {
    res.json({ message: "Welcome to Binaryveda application." });
  });

// signup route
app.get("/singup", (req, res) => {
    console.log('hello')
    res.json({ message: "Welcome to Binaryveda application." });
    
  });

// // user route
// app.get("user/id", (req, res) => {
//     res.json({ message: "Welcome to Binaryveda application." });
//   });

// set port, listen for requests
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});