const userService = require('../services/userService');

// Get All Users
const getUsers = async (req, res) => {
  try {
    const data = await userService.getUsers();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create a New User
const addUser = async (req, res) => {
  try {
    const { name, phone, email, location, latitude, longitude } = req.body;

    if (!name || !phone || !email || !location ) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const data = await userService.addUser({ name, phone, email, location, latitude, longitude });
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getUsers, addUser };
