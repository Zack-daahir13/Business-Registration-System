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

// For admin only

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
