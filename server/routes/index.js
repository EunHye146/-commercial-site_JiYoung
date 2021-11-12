var express = require('express');
var event = require('./event');
 
const router = express.Router();
router.use('/event',event);
 
module.exports =  router;