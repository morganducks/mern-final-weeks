const mongoose = require('mongoose');
const AuthorsSchema = new mongoose.Schema({
    authorName: {
    type: String,
    minlength: [3, "Author name must be at least 3 characters long"],
    required: [true, "Must enter name"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Authors', AuthorsSchema);

