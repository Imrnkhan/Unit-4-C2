const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: false, default: "female" },
    type: { type: String, required: false, default: "customer" },
    master:{type: mongoose.Schema.Types.ObjectId,
      ref: "master",
      required: true,}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = mongoose.model("users", userSchema);

