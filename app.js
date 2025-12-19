require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


//  Middleware to parse JSON requests
app.use(express.json());





// IN MEMORY DATA STORE





// ROUTES






// STARTING THE SERVER
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});