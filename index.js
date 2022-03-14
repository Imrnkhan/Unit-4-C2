const express = require("express");

const userController = require("./src/controllers/users.controller");

const branchDetail = require("./src/controllers/branchDetail.controller");

const masterBalance = require("./src/controllers/master.controller");

const connect = require("./src/configs/db");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/branchDetail", branchDetail);
app.use("/balance", masterBalance);

app.listen(2347, async function () {
  try {
    await connect();

    console.log("listening on port 2347");
  } catch (err) {
    console.error("error is:", err.message);
  }
});
