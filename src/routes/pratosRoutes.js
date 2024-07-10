const express = require('express');
const router = express.Router();
const { addPrato } = require('../controllers/pratosController');
const authMiddleware = require('../middleware/auth');


router.post('/', authMiddleware, addPrato);

module.exports = router;
