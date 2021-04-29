const { Op } = require("sequelize");
const models = require('../../models');
const user = require("../../models/user");
const User = models.User;
const Company = models.Company;

exports.create = (req, res) => {
    const post = {
        email: req.body.email,
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        companyId: req.body.company_id,
    };

    // Save Post in the database
    User.create(post)
        .then((data) => {
            res.send(data);
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            })
        });
};

// Retrieve all Posts from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    (async () => {
        const user = User.findAll({
            include: 'company'
        });
        console.log(user)
    });
    // User.findAll({
    //     include: 'company'
    // })
    //     .then((data) => {
    //         console.log(data)
    //         res.send({
    //             code:200,
    //             message:'success',
    //             result:data
    //         });
    //     }).catch((err) => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occured while find post"
    //         });
    //     });
};

// Find a single Post with an id
exports.findOne = async(req, res) => {
    const id = req.params.id;
    const data = await User.findAll();
    const ret = await Promise.all(data.map(async(data)=>{
        let comp = await data.getCompany();
        return {
            email:data.email,
            company: comp.name
        };
    }));
    console.log(ret)
    // (async () => {
    //     a = await User.findAll({
    //         include: 'company'
    //     });
    //     console.log(a)    
    // });
    
    await res.send(ret);
    // User.findOne({
    //     // attributes: { exclude: ['company'] },
    //     where:{
    //         id:id
    //     },
    //     include: {
    //         model: Company,
    //         as: 'company'
    //     }
    // }).then((data) => {

    //     // const ret = {
    //     //     user:data,
    //     //     company:null
    //     // }
    //     // data.getCompany().then((cm)=>{
    //     //     ret.company = cm;
    //     //     res.send(ret)
    //     // })
    //     res.send(data);
        
    // }).catch((err) => {
    //     console.log(err)
    //     res.status(500).send({
    //         message: err
    //     });
    // });
};

// Update a Post by the id in the request
exports.update = (req, res) => {
    const fill = {
        email: req.body.email,
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        companyId: req.body.company_id,
    }
    const id = req.params.id;

    User.update(fill, {
        where: { id: id }
    }).then((result) => {
        if ( result == 1 ) {
            res.send({
                message: "Post was updated successfully"
            });
        } else {
            res.send({
                message: `Cannot update Post with id=${id}.`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Error updating post with id=" + id
        })
    });
};

// Delete a Post with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    }).then((result) => {
        if (result == 1) {
            res.send({
                message: "Post was deleted successfully"
            })
        } else {
            res.send({
                message: `Cannot delete post with id=${id}`
            })
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Could not delete post with id=" + id
        })
    });
};

// // Delete all Posts from the database.
// exports.deleteAll = (req, res) => {
//     Post.destroy({
//         where: {},
//         truncate: false
//     }).then((result) => {
//         res.send({
//             message: `${result} Posts were deleted successfully!`
//         });
//     }).catch((err) => {
//         res.status(500).send({
//             message: 
//                 err.message || "Some error occurred while removing all posts."
//         });
//     });

// };

// // Find all published Posts
// exports.findAllPublished = (req, res) => {
//     Post.findAll({
//         where: { published: true }
//     }).then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         res.status(500).send({
//             message:
//                 err.message || "Some error occured retrieving posts"
//         })
//     });
// };