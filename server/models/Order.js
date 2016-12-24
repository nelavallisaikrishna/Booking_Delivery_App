/**
 * Created by mahasagar on 20/12/16.
 */
/**
 * Created by mahasagar on 20/12/16.
 */

var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = mongoose.model('Order',{
    businessId: {type : mongoose.Schema.Types.ObjectId},

    orderId : {type: String},
    businessName : {type: String},
    orderStatus: {type: String},
    orderType : {type: String},
    grandTotal : {type: Number},
    businessInfo : {
        to : {
            businessId : {type : mongoose.Schema.Types.ObjectId},
            name : {type: String},
            contactInfo : {
                name : {type: String},
                number :{type: String}
            }
        },
        from : {
            userId : {type : mongoose.Schema.Types.ObjectId},
            name : {type: String},
            contactInfo : {
                name : {type: String},
                number :{type: String}
            }
        }
    },
    items : [
        {
            name: {type: String,require: true},
            brand: {type: String},
            form: {type: String},
            packSize: {type: String},
            packType: {type: String},
            quantity:  {type: Number,require: true},
            totalPricePerItem : {type: Number},
            unitPrice: {type: Number},
            productId : {type: mongoose.Schema.Types.ObjectId, require: true},
            supplierId : {type: mongoose.Schema.Types.ObjectId},
            supplierName : {type: String},
            attedToCartDate : { type : Date , default : Date.now}

        }
    ],
    updatedAt : {type: Date},
    createdDate: {type: Date, require: true, default: Date.now}
});



