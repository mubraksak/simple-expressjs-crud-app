// importing product models
const Product = require("../models/product.model.js")


const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSingleProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        //  (err, product) =>{
        res.status(200).json(product);
        // })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProducts = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        // console.log('an error occured')
        // this returns a server error message
        res.status(500).json({ message: error.message });

    }
}

const updateProducts = async (req, res) => {
    try {
        //get products id
        const { id } = req.params;
        // update product data
        const product = await Product.findByIdAndUpdate(id, req.body);
        // check if product exits
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        // check product from database.
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProducts = async (req, res) => {
    try {
        //get products id
        const { id } = req.params;
        // delete product data
        const product = await Product.findByIdAndDelete(id);
        // check if product exits
        if (!product) {
            return res.status(404).json({ message: "product not found!!!" })
        }
        res.status(200).json({ message: "product deleted sucessfully!!!" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    getSingleProducts,
    createProducts,
    updateProducts,
    deleteProducts

}