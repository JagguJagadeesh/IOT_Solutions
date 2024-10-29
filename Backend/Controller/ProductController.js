const Product = require('../Model/Product.js');

const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({'message':error.message})
    }
}

const getSingleProduct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json({'Error':"Product Not Found....."});
        }
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({'message':error.message})
    }
}
const createProduct = async (req,res) => {
    try {
        const product = req.body;
        // console.log(product);
        // const product = new Product({ name, description, price });
        // if (!name || !description || !price) {
        //     return res.status(400).json({ 'Error': 'All fields are required: name, description, price' });
        // }
        const p = await Product.create(product);        
        res.status(200).json({'Message':'Producted Cretated ...','Product':p});

    } catch (error) {
        return res.status(500).json({'Error':error.message});
    }
}
const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(product){
            return res.status(200).json({'message':'deleted','product':product});
        }
        return res.status(200).json({'Message':'Product Not Found...'});
    } catch (error) {
        return res.status(500).json({'Error':error.message});
    }
}
const updateProduct = async (req,res) => {
    try {
        const { id } = req.params;
        // Await the result of findByIdAndUpdate to get the updated product
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true }); // new: true returns the updated document

        // Check if the product was found and updated
        if (!product) {
            return res.status(404).json({ 'Message': 'Product not found.' });
        }

        res.status(200).json({ 'Message': 'Product Updated.', 'product': product });
    }
    catch (error) {
        return res.status(500).json({'Error':error.message});
    }
}
module.exports = 
{
    getAllProducts,getSingleProduct,createProduct,deleteProduct,updateProduct
}