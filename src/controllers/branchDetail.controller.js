const express = require("express");

const branchDetail = require("../modules/branchDetail.model");
const router = express.Router();
router.post("", async (req, res) => {
  try {
    const BankDetail = await branchDetail.create(req.body);

    return res.status(201).send(BankDetail);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const BankDetail = await branchDetail.find().lean().exec();

    return res.status(200).send(BankDetail);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
