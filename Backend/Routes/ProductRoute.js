const express = require('express');
const router = express.Router();

const {getAllProducts,getSingleProduct,createProduct,deleteProduct,updateProduct} = require('../Controller/ProductController');


router.get('/',getAllProducts);
router.post('/edit',createProduct);
router.get('/:id',getSingleProduct);
router.delete('/:id',deleteProduct);
router.put('/:id',updateProduct);

module.exports = router;