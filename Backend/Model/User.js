const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            enum:['costomer','admin'],
            default:'costomer'
        },
        Cart:{
            type:[{
                product:{
                    type:Schema.Types.ObjectId,
                    ref:Product
                },
                quantity:{
                    type:Number,
                    default:1
                }
            }]
        }
    }
);

module.exports = mongoose.model('User',UserSchema);