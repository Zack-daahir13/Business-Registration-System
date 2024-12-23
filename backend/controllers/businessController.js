const multer = require("multer");
const Business = require("./../models/businessModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");

// Set up Multer storage and filters
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/business-docs"); // Store PDFs in a folder on the server
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1]; // Get file extension
    cb(null, `business-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(
      new AppError(
        "Not a PDF! Please upload only PDF documents.",
        400
      ),
      false
    );
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// Define the document upload middleware
exports.uploadBusinessDocuments = upload.fields([
  { name: "proofOfAddres", maxCount: 1 },
  { name: "license", maxCount: 1 },
]);

// Controller to handle creating a business (with documents)
exports.createBusiness = catchAsync(async (req, res, next) => {
  // Handle uploaded files
  if (req.files) {
    if (req.files.proofOfAddres) {
      req.body.proofOfAddres = req.files.proofOfAddres[0].path;
    }
    if (req.files.license) {
      req.body.license = req.files.license[0].path;
    }
  }

  // Create the business
  const business = await Business.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      business,
    },
  });
});

// Other business operations (like getting, updating, deleting)
exports.getBusiness = factory.getOne(Business);
exports.getAllBusinesses = factory.getAll(Business);
exports.updateBusiness = factory.updateOne(Business);
exports.deleteBusiness = factory.deleteOne(Business);

// Aggregation Helper Functions

// Get businesses by status (Approved, Rejected, Pending)
exports.getBusinessesByStatus = catchAsync(async (req, res, next) => {
  const { status } = req.params; // Expected: "Approved", "Rejected", or "Pending"

  const businesses = await Business.aggregate([
    {
      $match: { status: { $eq: status } }, // Match businesses by status
    },
    {
      $project: {
        _id: 1,
        name: 1,
        type: 1,
        status: 1,
        createdAt: 1,
      }, // Project fields to return
    },
    {
      $sort: { createdAt: -1 }, // Sort by creation date (descending)
    },
  ]);

  res.status(200).json({
    status: "success",
    results: businesses.length,
    data: { businesses },
  });
});

// Get businesses by type (e.g., LLC, Partnership)
exports.getBusinessesByType = catchAsync(async (req, res, next) => {
  const { type } = req.params; // Expected: "Sole Proprietorship", "Partnership", "LLC", etc.

  const businesses = await Business.aggregate([
    {
      $match: { type: { $eq: type } }, // Match businesses by type
    },
    {
      $project: {
        _id: 1,
        name: 1,
        type: 1,
        status: 1,
        createdAt: 1,
      }, // Project fields to return
    },
    {
      $sort: { createdAt: -1 }, // Sort by creation date (descending)
    },
  ]);

  res.status(200).json({
    status: "success",
    results: businesses.length,
    data: { businesses },
  });
});

// Get total businesses by status (for dashboard cards)
exports.totalBusinessesByStatus = catchAsync(
  async (req, res, next) => {
    const total = await Business.aggregate([
      {
        $group: {
          _id: "$status",
          total: { $sum: 1 }, // Count businesses per status
        },
      },
    ]);

    res.status(200).json({
      status: "success",
      data: { total },
    });
  }
);

// Get total businesses by type (for dashboard cards)
exports.totalBusinessesByType = catchAsync(async (req, res, next) => {
  const total = await Business.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: 1 }, // Count businesses per type
      },
    },
  ]);

  res.status(200).json({
    status: "success",
    data: { total },
  });
});

// Controller to handle approving a business registration
exports.approveBusiness = catchAsync(async (req, res, next) => {
  const business = await Business.findByIdAndUpdate(
    req.params.id,
    { status: "Approved" },
    { new: true, runValidators: true }
  );

  if (!business) {
    return next(new AppError("No business found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Business approved successfully",
    data: {
      business,
    },
  });
});

// Controller to handle rejecting a business registration
exports.rejectBusiness = catchAsync(async (req, res, next) => {
  const business = await Business.findByIdAndUpdate(
    req.params.id,
    { status: "Rejected" },
    { new: true, runValidators: true }
  );

  if (!business) {
    return next(new AppError("No business found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    message: "Business rejected successfully",
    data: {
      business,
    },
  });
});
