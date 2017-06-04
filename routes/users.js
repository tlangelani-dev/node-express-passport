const express = require('express');
const router = express.Router();

// login
router.get('/login', function(req, res) {
    res.render('login');
});

// register view
router.get('/register', function(req, res) {
    res.render('register');
});

// register post
router.post('/register', function(req, res) {
    let name = req.body.name;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let confirm_password = req.body.confirm_password;

    // validate
    req.checkBody('name', 'Name is required!').notEmpty();
    req.checkBody('email', 'Email is required!').notEmpty();
    req.checkBody('email', 'Name is not valid!').isEmail();
    req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('password', 'Password is required!').notEmpty();
    req.checkBody('confirm_password', 'Passwords do not match!').equals(req.body.password);

    let errors = req.validationErrors();

    if (errors) {
        res.render('register', { errors: errors });
     }
    else {

    }
});

module.exports = router;
