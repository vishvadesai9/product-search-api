
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/search');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});