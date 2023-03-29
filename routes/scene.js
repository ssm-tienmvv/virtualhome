var express = require('express');
var router = express.Router();


router.post('/scene/form', function(req, res, next) {
    res.render('scene/form');
});
module.exports = router;
