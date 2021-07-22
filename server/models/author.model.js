const mongoose = require("mongoose")

const AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name must be at least 3 letters long"],
        min: 3
    }
},{timestamps: true})

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author