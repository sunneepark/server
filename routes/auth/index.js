var express = require('express');
var router = express.Router();

router.use('/signup', require('./signup.js'))
router.use('/signin', require('./signin.js'))
router.use('/', require('./delete.js'))



module.exports = router;