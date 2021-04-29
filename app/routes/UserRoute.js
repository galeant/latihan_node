module.exports = app => {
    const userController = require("../controllers/UserController.js");
    let router = require("express").Router();
    // Create a new post
    router.post("/", userController.create);
    // Retrieve all posts
    router.get("/", userController.findAll);
    // router.get("/", function (req, res) {
    //     res.send('GET request to the users')
    // });
    // Retrieve single post
    router.get("/:id", userController.findOne);
    // Update post
    router.post("/:id", userController.update);
    // Delete single post
    router.get("/:id/delete", userController.delete);

    app.use("/api/users", router);
}   