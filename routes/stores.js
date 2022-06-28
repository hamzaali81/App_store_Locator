const express = require('express');
const { addStore, getStores } = require('../controllers/store');

const router = express.Router();

router
  .route('/')
  .get(getStores)
  .post(addStore);

module.exports = router;