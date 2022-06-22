const express = require("express"); //引入express
const router = express.Router();
let Mock = require("mockjs"); //引入mock

// user
router.get("/api/user/list", function (req, res) {
  const { pageNum, pageSize } = req.query;
  let result = [];
  for (let i = 0; i < pageSize; i++) {
    result.push({
      id: Mock.Random.id(),
      ntAccount: Mock.Random.string("Upper", 7),
      department: "CN/ESC-PJ-Digi",
      userName: Mock.Random.name(),
      email: Mock.Random.string("Upper", 7) + "@bosch.com",
      isAdmin: "NO",
    });
  }
  res.json({
    code: 200,
    message: "success",
    data: {
      result,
      total: 120,
      pageNum: pageNum,
      pageSize: pageSize,
      pages: Math.floor(120 / pageSize),
    },
  });
});

// role
router.get("/api/role/list", function (req, res) {
  const { pageNum, pageSize } = req.query;
  let result = [];
  for (let i = 0; i < pageSize; i++) {
    result.push({
      id: Mock.Random.id(),
      description: Mock.Random.sentence(),
      roleName: Mock.Random.name(),
    });
  }
  res.json({
    code: 200,
    message: "success",
    data: {
      result,
      total: 8,
      pageNum: pageNum,
      pageSize: pageSize,
      pages: Math.floor(8 / pageSize),
    },
  });
});

// form
router.get("/api/form/list", function (req, res) {
  const { pageNum, pageSize } = req.query;
  let result = [];
  for (let i = 0; i < pageSize; i++) {
    result.push({
        id: Mock.Random.id(),
        title: Mock.Random.title(2),
        bonusValue: Mock.Random.integer(1, 100),
        description: Mock.Random.sentence(),
        accepetedUser: Mock.Random.name(),
        rewardStatus: "Finished",
    });
  }
  res.json({
    code: 200,
    message: "success",
    data: {
      result,
      total: 80,
      pageNum: pageNum,
      pageSize: pageSize,
      pages: Math.floor(80 / pageSize),
    },
  });
});
module.exports = router;
