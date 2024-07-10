const express = require('express');
const router = express.Router();
const { addIngrediente } = require('../controllers/ingredientesController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, addIngrediente);

module.exports = router;
