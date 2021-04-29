const { Op } = require("sequelize");
const models = require('../../models');
const User = models.Company;

// exports.create = (req, res) => {
//     const post = {
//         email: req.body.email,
//         firstName: req.body.firstname,
//         lastName: req.body.lastname,
//         companyId: req.body.company_id,
//     };

//     // Save Post in the database
//     User.create(post)
//         .then((data) => {
//             res.send(data);
//         }).catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Post."
//             })
//         });
// };

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    User.findAll(
    //     {
    //     attributes: ['id','email', 'firstName']
    // }
    )
        .then((data) => {
            console.log(data)
            res.send({
                code:200,
                message:'success',
                result:data
            });
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while find post"
            });
        });
};

// Find a single Post with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     User.findOne({
//         attributes: ['id','email', 'firstName'],
//         where:{
//             id:id
//         }
//     }).then((data) => {
//         res.send(data);
//     }).catch((err) => {
//         res.status(500).send({
//             message: "Error retrieving post with id=" + id
//         });
//     });
// };

// Update a Post by the id in the request
// exports.update = (req, res) => {
//     const fill = {
//         email: req.body.email,
//         firstName: req.body.firstname,
//         lastName: req.body.lastname,
//         companyId: req.body.company_id,
//     }
//     const id = req.params.id;

//     User.update(fill, {
//         where: { id: id }
//     }).then((result) => {
//         if ( result == 1 ) {
//             res.send({
//                 message: "Post was updated successfully"
//             });
//         } else {
//             res.send({
//                 message: `Cannot update Post with id=${id}.`
//             })
//         }
//     }).catch((err) => {
//         res.status(500).send({
//             message: "Error updating post with id=" + id
//         })
//     });
// };

// Delete a Post with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     User.destroy({
//         where: { id: id }
//     }).then((result) => {
//         if (result == 1) {
//             res.send({
//                 message: "Post was deleted successfully"
//             })
//         } else {
//             res.send({
//                 message: `Cannot delete post with id=${id}`
//             })
//         }
//     }).catch((err) => {
//         res.status(500).send({
//             message: "Could not delete post with id=" + id
//         })
//     });
// };

