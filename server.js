const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});