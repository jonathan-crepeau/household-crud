const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

// test
router.get('/test', controllers.Member.test);

// create
router.post('/', controllers.Member.create);

module.exports = router;