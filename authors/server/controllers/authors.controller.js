const Author = require('../models/authors.model');  

const createAuthor = (req, res) => {
    Author.create(req.body) 
    .then(createAuthor =>res.json(createAuthor))
    .catch(err =>res.status(400).json(err));
}

const viewAuthors = (req, res) => {
        Author.find({}) 
        .then(viewAuthors =>res.json(viewAuthors))
        .catch(err =>res.json(err));
    }

    const viewOneAuthor = (req, res) => {
        Author.findOne({_id:req.params.id}) 
        .then(viewOneAuthor =>res.json(viewOneAuthor))
        .catch(err =>res.json(err));
    }

    const updateAuthor = (req, res) => {
        console.log("editing...")
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            {new: true, runValidators: true})
        .then(updatedAuthor =>res.json(updatedAuthor))
        .catch(err =>res.status(400).json(err))
    }

    const deleteAuthor = (req, res) => {
        console.log("deleting...")
        //use html reuqests in the controller i.e. deleteMany, deleteOne 
        Author.deleteOne({_id:req.params.id})
        .then(deleteAuthor =>res.json(deleteAuthor))
        .catch(err =>res.json(err));
    }

    module.exports = {
        viewAuthors,
        createAuthor,
        viewOneAuthor,
        updateAuthor,
        deleteAuthor,
}