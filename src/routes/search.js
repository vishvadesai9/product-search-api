const express = require('express');
const Products = require('../models/product'); // adjust the path to your Products model
const router = express.Router();
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');


router.get('/search', async (req, res) => {
    const { tags, category, price, type } = req.query;

    const tagsArray = tags ? tags.split(',') : null;

    try {
        const products = await Products.findAll({
            where: {
                ...(tagsArray && {
                    [Op.or]: tagsArray.map(tag => 
                        Sequelize.literal(`tags::text ILIKE '%${tag.toLowerCase()}%'`)
                    )
                }),
                ...(category && { category: { [Op.iLike]: `%${category}%` } }),
                ...(type && { type: { [Op.iLike]: `%${type}%` } }),
                ...(price && { price: { [Op.eq]: price } })
            }
        });

        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
