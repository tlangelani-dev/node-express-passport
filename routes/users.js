const express = require('express');
const router = express.Router();

// login
router.get('/login', function(req, res) {
    res.render('login');
});

// register
router.get('/register', function(req, res) {
    res.render('register');
});

module.exports = router;
