var models = require('../models');

exports.view = function(req, res) {
    //var data = {data: []};
    //res.render("index", data);
    
    models.Message
      .find()
      .sort('-date')
      .exec(displayMessages);

    function displayMessages(err, messages) {
      if(err) {console.log(err); res.send(500); }
      var data = {data: messages};
      res.render("index", data);
    }

//    res.render("index", data);
}
