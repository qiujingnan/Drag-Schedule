const express = require("express"); //引入express
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
let Mock = require("mockjs"); //引入mock

// token
router.post("/api/token", jsonParser, function (req, res) {
  res.json({
    code: 200,
    message: "success",
    data: {
      token: "Bearer " + Mock.Random.string("lower", 50),
    },
  });
});
// login
router.post("/api/userInfo", jsonParser, function (req, res) {
  res.json({
    code: 200,
    message: "success",
    data: {
      userName: Mock.Random.name(),
      nt: Mock.Random.string("Upper", 7),
      department: "CN/ESC-PJ-Digi",
    },
  });
});

module.exports = router;
