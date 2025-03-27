const express = require('express');
const { submitFormData } = require('../controllers/sheetController');
const isAuthenticated = require('../middleware/isAuthenticated');

const router = express.Router();

router.post('/submit-form', isAuthenticated, submitFormData);

module.exports = router;
