const express = require('express');
const cors = require('cors');
const { LOCAL_CLIENT, CLIENT } = require('../config/default');
const applyMiddleware = (app) => {
  // middleware
  const corsOptions = {
      origin: [
          LOCAL_CLIENT,
          CLIENT
    ],
    credentials: true,
  };

  app.use(cors(corsOptions));
  app.use(express.json());
};

module.exports = applyMiddleware
