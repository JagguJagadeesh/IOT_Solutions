const mongoose = require('mongoose');
const notfoundimg = '/images/NotFound.jpeg';

const ProductSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
            default: notfoundimg
        },
        price:{
            type:Number,
            required:true
        }
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model('Product',ProductSchema);