const express = require("express");
const businessController = require("./../controllers/businessController");
const authController = require("./../controllers/authController"); // Assuming you have an auth controller

const router = express.Router();

// Protect all routes
router.use(authController.protect);

// Routes for users to create, update, get, and delete their business
router.route("/").post(
  authController.restrictTo("user"), // Only users can create businesses
  businessController.uploadBusinessDocuments,
  businessController.createBusiness
);

router
  .route("/:id")
  .get(businessController.getBusiness) // Get a single business
  .patch(
    authController.restrictTo("user"), // Only users can update their business
    businessController.uploadBusinessDocuments,
    businessController.updateBusiness
  )
  .delete(
    authController.restrictTo("user"), // Only users can delete their business
    businessController.deleteBusiness
  );

// Admin routes (only admins can access these)
router.use(authController.restrictTo("admin")); // Apply admin restriction for the following routes

// Admin can get all businesses
router.route("/").get(businessController.getAllBusinesses);

// Admin can approve or reject businesses
router
  .route("/:id/approve")
  .patch(businessController.approveBusiness);
router.route("/:id/reject").patch(businessController.rejectBusiness);

module.exports = router;
