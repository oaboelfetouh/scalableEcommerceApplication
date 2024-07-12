const express = require('express');
const app = express();
const PORT = process.env.PORT || 50001; 





app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
