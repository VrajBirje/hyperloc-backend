const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const userVendorRoutes = require('./routes/userVendorRoutes');
const userDeliverymanRoutes = require('./routes/userDeliverymanRoutes');

const app = express();

// Allow requests from specific origin (frontend domain)
// const allowedOrigins = ['https://shree-vidya-saraswati-pujan.netlify.app'];
const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        // console.log("errorrrr...")
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Mastermind Server.');
  });

app.use('/api/users', userRoutes);
app.use('/api/vendors', userVendorRoutes);
app.use('/api/deliverymen', userDeliverymanRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//Following code for running the server on specific network i.e. IP
// app.listen(PORT, '10.112.9.12', () => {
//     console.log(`Server running on port ${PORT}`);
//   });
