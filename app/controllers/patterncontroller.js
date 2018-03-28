var exports = module.exports = {}
var db = require('../models');

exports.mypatterns = function(req, res) {

    db.Pattern.findAll({
        where: {
            pattern_author: req.user.username
        }
    }).then(function(patterns) {
        res.render('mypatterns', { user: req.user, myPatterns: patterns})
    })

}


exports.addpatterns = function(req, res) {

    res.render('addpatterns', { user: req.user });

}

