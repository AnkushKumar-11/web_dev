const moongoose = require('mongoose')

const postSchema = new moongoose.Schema({
    postText:{
        type: String,
        required: true,
    },
    user:{
        type: moongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    likes: {
        type: Array,
        default: [],
    },
});

//create post model
module.exports = moongoose.model('post', postSchema);