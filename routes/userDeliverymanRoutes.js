const express = require('express');
const router = express.Router();
const userDeliverymanController = require('../controllers/userDeliverymanController');

// Routes for deliveryman APIs
router.get('/', userDeliverymanController.getDeliverymen);
router.post('/', userDeliverymanController.addDeliveryman);

module.exports = router;
