module.exports = function (app, service) {

    var boardModel = service.useModel('board');

    app.get('/board', function(req, res) {
        boardModel.Board.findOne({boardId: 1}, function(err, board) {
            if (err) {
                console.log(err);
            }
            if (temp == null){
                console.log('Board object is null')
            }

            res.render('board', board)
        });
    });
}