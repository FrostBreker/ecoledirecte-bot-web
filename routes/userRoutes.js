const express = require("express");
const router = express.Router();
const Users = require("../mongoose")

router.route("/").post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userID = req.body.userID;
    const newUser = new Users({
        username,
        password,
        userID
    });


    newUser.save();
})

module.exports = router;