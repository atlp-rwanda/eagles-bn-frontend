const path = require('path');
const helmet = require('helmet');
const express = require('express');
const { limit } = require('express-limit');

const port = process.env.PORT || 3000;
const app = express();
app.use(helmet());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', limit({ max: 3, period: 60000 }), function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, console.log(`Server started at ${port}`));
