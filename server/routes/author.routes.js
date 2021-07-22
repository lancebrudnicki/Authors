const AuthorController = require("../controllers/author.controllers")


module.exports = app => {
    app.get("/api/authors", AuthorController.allAuthors)
    app.post("/api/author", AuthorController.createAuthor)
    app.get("/api/authors/:id", AuthorController.oneAuthor)
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
}


