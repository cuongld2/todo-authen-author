

const isPaid = function (req, res, next) {
    if (req.user.id == 2)
      return next ();
    res.send ('only paid user is able to delete notes')
 }

 module.exports = isPaid;