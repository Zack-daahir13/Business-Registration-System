const mongoose = require('mongoose');

const BusinessRegistrationSchema = new mongoose.Schema({
  businessName: {
    type: String,
    required: true,
    trim: true
  },
  ownerName: {
    type: String,
    required: true,
    trim: true
  },
  contactInfo: {
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true }
  },
  businessAddress: {
    type: String,
    required: true,
    trim: true
  },
  businessType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BusinessType',
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  uploadedDocuments: {
    type: [String], 
    required: true
  },
  legalInformation: {
    licenses: { type: String, required: false, trim: true }
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const  BusinessRegistration= mongoose.model('BusinessRegistration', BusinessRegistrationSchema);

export default BusinessRegistration
