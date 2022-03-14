const express = require("express");

const masterDetail = require("../modules/master.model");
const user=require("../modules/users.model")
const router = express.Router();
router.post("", async (req, res) => {
  try {
    const masterBalance = await masterDetail.create(req.body);

    return res.status(201).send(masterBalance);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const masterBalance = await masterDetail.find().lean().exec();

    return res.status(200).send(masterBalance);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
