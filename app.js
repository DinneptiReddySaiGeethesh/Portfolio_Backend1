require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contacts');
const projectRoutes = require('./routes/projects');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB connection error:", err));
app.use('/contact', contactRoutes);
app.use('/projects', projectRoutes);
app.get('/', (req, res) => { res.send('Portfolio Backend is running'); });
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
