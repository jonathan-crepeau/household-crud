const db = require('../models');

const test = (req, res) => {
    res.json({message: "Member Test API successful."});
};

const create = (req, res) => {
    db.Member.create(req.body, (err, createdMember) => {
        if (err) return res.status(500).json({member: 'Something went wrong here...', error: err});
        res.json(createdMember);
    });
};

module.exports = {
    test,
    create
}