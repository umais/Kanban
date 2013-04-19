module.exports = function (app, service) {

    var boardModel = service.useModel('board');
    //retrieves a board
    app.get('/board:id', function(req, res) {
        boardModel.Board.findById({boardId: 1}, function(err, board) {
            if (err) {
                console.log(err);
            } 
            res.send('board', board)
        });
    });

    //retrieves a list of boards
    app.get('/boards', function(req, res) {
        var query = boardModel.Board.find({});

        query.exec(function (err, boards) {
            if (err) {
                console.log(err);                
            }
            res.send(boardList: boards});
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

            res.send(board: board);
        });
    });

    //deletes a board
    app.delete('/board/delete/:id', function(req, res) {
        model.Board.findById(req.params.id, function (err, board){
        if (err) {
            console.log(err);
        }

            board.remove(function(err) {
                console.log(err);               
            });

            res.send();
        });
    });

    //edit a board
    app.put('/board/edit/:id', function(req, res) {
        model.Board.findById(req.params.id, function (err, board) {

        });
    });

    //add a lane
    //edit a lane
    //remove a lane

    //add a card
    //edit a card
    //remove a card

}