/**
 * Created by mahasagar on 20/12/16.
 */
/**
 * Created by mahasagar on 20/12/16.
 */
var Products = require('../models/Products');

function addProducts(req,res){
    var newProduct = new Products(req.body);
    newProduct.save(function(err,result){
        res.json(result);
    });
}

function getAllProducts(req,res){
    Products.find({},function(req,results){
        res.json(results);
    })
};

module.exports.addProducts = addProducts;
module.exports.getAllProducts = getAllProducts;