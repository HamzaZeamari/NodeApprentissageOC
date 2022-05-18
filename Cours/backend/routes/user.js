const express = require('express');
const userCtrl = require('../controllers/User');
const router = express.Router();

router.post('/signup',userCtrl.Signup);
router.post('/login',userCtrl.login);


module.exports = router;