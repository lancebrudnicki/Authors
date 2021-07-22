const Author = require('../models/author.model')



module.exports.allAuthors = ( req, res) =>{
    Author.find({})
        .then (allAuthors => res.json({allAuthors}))
        .catch (err => res.json({err}))
}
module.exports.createAuthor = ( req, res) =>{
    Author.create(req.body)
        .then (newAuthor => res.json({newAuthor}))
        .catch (err => res.status(400).json(err))
}
module.exports.oneAuthor = ( req, res) =>{
    const {id} = req.params
    Author.find({_id:id})
        .then (oneAuthor => res.json({oneAuthor}))
        .catch (err => res.status(400).json(err))
}
module.exports.updateAuthor = ( req, res) =>{
    const {id} = req.params
    Author.findOneAndUpdate({_id:id}, req.body, {new:true, runValidators:true})
        .then (updateAuthor => res.json({updateAuthor}))
        .catch (err => res.status(400).json(err))
}
module.exports.deleteAuthor = ( req, res) =>{
    const {id} = req.params
    Author.deleteOne({_id:id})
        .then (confirmation => res.json({confirmation}))
        .catch (err => res.status(400).json(err))
}

