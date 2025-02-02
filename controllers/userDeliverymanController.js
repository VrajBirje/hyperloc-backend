const userDeliverymanService = require('../services/userDeliverymanService');

// Get All Deliverymen
const getDeliverymen = async (req, res) => {
  try {
    const data = await userDeliverymanService.getDeliverymen();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Add a New Deliveryman
const addDeliveryman = async (req, res) => {
  try {
    const { id, name, phone, email, location, latitude, longitude } = req.body;

    if (!name || !phone || !email || !location ) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const data = await userDeliverymanService.addDeliveryman({ name, phone, email, location, latitude, longitude });
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getDeliverymen, addDeliveryman };
