const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
connectDB(); // connect to MongoDB

app.use(cors());
app.use(express.json()); // for parsing JSON
app.use('/api/users', userRoutes); // Register user routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


