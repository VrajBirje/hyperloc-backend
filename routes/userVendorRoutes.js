const express = require('express');
const router = express.Router();
const userVendorController = require('../controllers/userVendorController');

// Routes for vendor APIs
router.get('/', userVendorController.getVendors);
router.post('/', userVendorController.addVendor);

module.exports = router;
