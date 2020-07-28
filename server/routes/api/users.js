const express = require('express');

const router = express.Router();

const { User } = require('../../database/Users');

// @route        GET api/users
// @description  Register new user
// @access       Public
router.get('/', (req, res) => {
  res.send('register');
});

module.exports = router;
