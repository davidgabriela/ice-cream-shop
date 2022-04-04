const mongoose = require("mongoose");

const FlavourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
    trim: true,
    maxlength: [20, "Name cannot be more than 10 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [100, "Description cannot be more than 100 characters"],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Flavour", FlavourSchema);
