const express = require('express');
const cors = require('cors');
const app = express();

// CORS middleware for specific routes
const corsOptions = {
  origin: 'https://2024.projetfeudecamp.be',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Apply CORS only to specific routes
app.get('backend-pfdc.jcloud.ik-server.com', cors(corsOptions), (req, res) => {
  // Your route logic goes here
  res.send('Hello from your backend route!');
});

// Your other routes and configurations go here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
