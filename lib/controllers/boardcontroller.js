module.exports = function (app, service) {

    var boardModel = service.useModel('board');
    //retrieves a board
    app.get('/board:id', function(req, res) {
        boardModel.Board.find({boardId: 1}, function(err, board) {
            if (err) {
                console.log(err);
            } 
            res.render('board', board)
        });
    });

    //retrieves a list of boards
    app.get('/boards', function(req, res) {
        var query = boardModel.Board.find({});

        query.exec(function (err, boards) {
            if (err) {
                console.log(err);                
            }
            res.render(boardList: boards});
        });
    });

    //adds a board
    app.post('/board/new', function(req, res) {
        var newBoard = new model.Board();
        newBoard.name = req.body.board.name;
        newBoard.owner = req.body.board.owner;

        newBoard.save(function (err) {
            if (err) {
                console.log(err);              
            }

            res.render(board: board);
        });
    });

    //deletes a board
    app.post('/board/delete/:id', function(req, res) {
        model.Board.findById(req.params.id, function (err, board){
        if (err) {
            console.log(err);
        }

            board.remove(function(err) {
                console.log(err);               
            });

            res.render();
        });
    });

}