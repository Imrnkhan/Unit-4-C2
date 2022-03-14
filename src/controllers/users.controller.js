const express = require("express");

const Bank = require("../modules/users.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const bank = await Bank.create(req.body);

    return res.status(201).send(bank);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("", async (req, res) => {//
    try {
      const bank = await Bank.find().lean().exec();
  
      return res.status(200).send(bank);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


module.exports = router;
