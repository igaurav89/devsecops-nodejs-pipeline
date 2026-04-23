const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('DevSecOps Pipeline Running');
});

module.exports = app;

// Start server only when run directly
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}