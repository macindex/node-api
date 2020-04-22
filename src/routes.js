const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');


routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
/**', (req, res) =>{
     * Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
    });
    return res.send('Hello world');
});*/

module.exports = routes;