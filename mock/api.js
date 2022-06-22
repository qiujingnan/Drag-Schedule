const express = require("express"); //引入express
const login = require("./login.js");
const user = require("./user.js");

const app = express(); //实例化express
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , token"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    // console.log(req)
    next();
  }
});

app.use(login);
app.use(user);

app.listen("10000", () => {
  console.log("监听端口 10000");
});
