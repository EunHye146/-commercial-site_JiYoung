var express = require('express');
var Event = require('../models/event');
var mongoose = require('mongoose');
 
const router = express.Router();
 
router.post('/', (req, res) => {
  if (req.body.contents === "") {
    return res.status(400).json({
      error: "EMPTY CONTENTS",
      code: 2
    });
  }
 
  let event = new Event({
    contents: req.body.contents
  });
 
  event.save(err => {
    if (err) throw err;
    return res.json({ success: true });
  });
});
 
module.exports = router;