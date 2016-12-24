/**
 * Created by mahasagar on 20/12/16.
 */
var Cart = require('../models/Cart');

function addToCartAPI(req,res){
    var cart = new Cart(req.body);
    cart.save(function(err,result){
        res.json(result);
    });
}

function getCartDetails(req,res){
    Cart.find({businessId : req.body.businessId},function(req,results){
        res.json(results);
    })
};

module.exports.addToCartAPI = addToCartAPI;
module.exports.getCartDetails = getCartDetails;