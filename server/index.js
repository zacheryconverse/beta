const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

app.use('/api/moves', require('../routes/api/moves'));
app.use('/api/users', require('../routes/api/users'));
app.use('/api/auth', require('../routes/api/auth'));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));
  // Serve index.html for any unknown paths
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}
// environmental variable
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
