const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //누군가 스페이스 쳤을때 그 공백 지워버려주는 역할
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        defalut:0
    },
    image:String,
    token:{
        type:String
    },
    tokenExp:{//토큰의 유효기간.
        type:Number
    }

})
const User = mongoose.model('User',userSchema)
module.exports={User}