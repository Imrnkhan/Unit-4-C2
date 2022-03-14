const mongoose = require("mongoose");

const masterSchema = new mongoose.Schema(
  {
    balance: { type: Number, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("masterBalance", masterSchema);
