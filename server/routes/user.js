const express = require('express');
const router = express.Router();
const controller = require('../controller/user.js')

// login route
router.post("/login", controller.login);

// signup route
router.post("/signup", controller.signUp);

// simple route
router.get("/test", (req, res) => {
  res.json({ message: "Welcome to application." });
  res.end()
});

// test('add data', async function () {
//   const res = await request(app)
//     .post('/admin/addOrganizationFacility')
//     .send(organizationFacilityLog.organizationFacilityValue)
//   assert.equal(res.status, 200);
// });

  module.exports=router;