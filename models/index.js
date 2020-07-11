var mongoose = require('mongoose');

var consumerSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    regno:{
        type: String,
        required:true    
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    }
});

const Book = module.exports = mongoose.model('Book', consumerSchema);

// Get User

module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
}