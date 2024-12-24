const BusinessRegistration = require('../models/BusinessRegistration.js');
const BusinessType = require('../models/BusinessType.js');

// Register a new business
export const registerBusiness = async (req, res) => {
  try {
    const {
      businessName,
      ownerName,
      contactInfo,
      businessAddress,
      businessType,
      registrationNumber,
      uploadedDocuments,
      legalInformation,
    } = req.body;

    // Ensure the business type exists
    const typeExists = await BusinessType.findById(businessType);
    if (!typeExists) {
      return res.status(400).json({ success: false, error: 'Invalid business type' });
    }

    const newBusiness = await BusinessRegistration.create({
      businessName,
      ownerName,
      contactInfo,
      businessAddress,
      businessType,
      registrationNumber,
      uploadedDocuments,
      legalInformation,
    });

    res.status(201).json({ success: true, data: newBusiness });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Get all registered businesses
export const getAllBusinesses = async (req, res) => {
  try {
    const businesses = await BusinessRegistration.find().populate('businessType');
    res.status(200).json({ message:"Successfuly Registered Your Business"});
  } catch (error) {
    res.status(500).json({ message: "Failed to Registered Business"});
  }
};

// Update a business registration
export const updateBusinessRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBusiness = await BusinessRegistration.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    ).populate('businessType');
    res.status(200).json({ message: "Successful updated Your Business "});
  } catch (error) {
    res.status(400).json({ message: "Successfuly Registered Your Business " });
  }
};

// Approve or Reject a Business
export const updateBusinessStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['Pending', 'Approved', 'Rejected'].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedBusiness = await BusinessRegistration.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedBusiness });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete a business registration
exports.deleteBusinessRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    await BusinessRegistration.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Business registration deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
