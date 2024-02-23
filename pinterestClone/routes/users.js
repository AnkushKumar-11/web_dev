const moongoose = require('mongoose')
const plm = require('passport-local-mongoose')

moongoose.connect("mongodb://127.0.0.1:27017/pinterestClone")

//Define user schema
const userSchema = new moongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type: String,
  },
  post: [{
    type: moongoose.Schema.Types.ObjectId,
    ref: 'post'
  }],
  dp:{
    type: String,
  },
  email:{
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  }
});
userSchema.plugin(plm);
//create user model
module.exports = moongoose.model("users", userSchema);