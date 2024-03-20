const express = require('express');
const router = express.Router();
const { generateMockProducts } = require('../../utils.js');

// Manejador de ruta para /mockingproducts
router.get('/', (req, res) => {
    const products = generateMockProducts();
    res.json(products);
});

module.exports = router;