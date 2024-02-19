const Product = require("../models/projectModel.js");

const createPdt = async (req, res) => {

    const newPdt = new Product(req.body);

    try {
        const savedPdt = await newPdt.save();
        res.status(200).json(savedPdt);
    } catch (error) {
        res.status(404).json("Its not created")
    }
}

const deletePdt = async (req, res) => {

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted")

    } catch (error) {
        res.status(404).json({ error })
    }
}

const updatePdt = async (req, res) => {

    try {
        const updatePdt = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatePdt);

    } catch (error) {
        res.status(404).json({ error })
    }
}

const getAllpdt = async (req, res) => {
    const { category } = req.body;

    const queryObject = {};
    if (category) {
        queryObject.category = category;
    }

    const pdt = await Product.find(req.body);
    if (pdt.length) {
        res.status(200).json({ pdt });
    } else {
        res.status(404).json("Item is not found");
    }
}

module.exports = { createPdt, deletePdt, updatePdt, getAllpdt }