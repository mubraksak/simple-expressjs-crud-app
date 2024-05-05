const express = require("express")
const Product = require("../models/product.model.js")
const router = express.Router();
const { getProducts, getSingleProducts, createProducts, updateProducts, deleteProducts } = require("../controllers/product.controller.js");


router.get('/', getProducts);
router.get('/:id', getSingleProducts);
router.post('/', createProducts);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);




// exporting router model
module.exports = router;