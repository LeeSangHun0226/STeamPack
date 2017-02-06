const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const User = require('./routes/user');

// ---------------------server setting-----------------------------
const app = express();
const port = 3000;
const devPort = 4000;

// ---------------------USE-----------------------------
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ---------------------mongodb connection-----------------------------
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mogod server'); });

mongoose.connect('localhost:27017/steampack');

// ---------------------router setting-----------------------------
app.use(User);

// ---------------------server setting-----------------------------
app.listen(port, () => {
  console.log('Express is listening on port', port);
});

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    }
  );
}
