module.exports = app => {
    const companyController = require("../controllers/CompanyController.js");
    let router = require("express").Router();
    // Create a new post
    // router.post("/", companyController.create);
    // Retrieve all posts
    router.get("/", companyController.findAll);
    // router.get("/", function (req, res) {
    //     res.send('GET request to the users')
    // });
    // Retrieve single post
    // router.get("/:id", companyController.findOne);
    // // Update post
    // router.post("/:id", companyController.update);
    // // Delete single post
    // router.get("/:id/delete", companyController.delete);

    app.use("/api/companies", router);
}   