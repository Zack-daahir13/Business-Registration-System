const mongoose = require("mongoose");
const validator = require("validator");

const businessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true,
  },
  ownerName: {
    type: String,
    required: true,
    trim: true,
  },
  businessEmail: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  contactAddress: {
    type: String,
    required: true,
    trim: true,
  },
  businessAddress: {
    type: String,
    required: true,
    trim: true,
  },
  businessType: {
    type: String,
    enum: [
      "Sole Proprietorship",
      "Partnership",
      "Limited Liability Company (LLC)",
      "Corporation",
      "Non-Profit Organization",
    ],
    required: true,
  },
  taxID: {
    type: String,
    required: true,
  },
  proofOfAddres: {
    type: String,
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
