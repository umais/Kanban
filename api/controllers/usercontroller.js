//get user
//add user
//delete user
//edit user

module.exports = function (app, service) {

    var userModel = service.useModel('user');

    app.get('/user', function(req, res) {
        userModel.User.findOne({userId: 1}, function(err, user) {
            if (err) {
                console.log(err);
            }
            if (user == null){
                res.json({Error: "User object is null"})

            }
            res.render(user);
        });
    });

    app.post('/user:id', function(req, res) {


    });

}