const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/api/test', require('./routes/testRoutes'));

connectDB().then(() => {
  app.listen(PORT, () => console.log(`** Server running on port ${PORT} **`));
});
