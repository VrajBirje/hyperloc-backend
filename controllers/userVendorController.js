const userVendorService = require('../services/userVendorService');

// Get All Vendors
const getVendors = async (req, res) => {
  try {
    const data = await userVendorService.getVendors();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a New Vendor
const addVendor = async (req, res) => {
  try {
    const { business_name, business_type, phone, email, location, latitude, longitude } = req.body;

    if (!business_name || !business_type || !phone || !email || !location ) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const data = await userVendorService.addVendor({ business_name, business_type, phone, email, location, latitude, longitude });
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getVendors, addVendor };
