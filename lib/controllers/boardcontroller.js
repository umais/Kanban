module.exports = function (app, service) {

    var boardModel = service.useModel('board');

    //retrieves a board
    app.get('/board/:id', function(req, res) {
        boardModel.Board.findById(req.params.id, function(err, board) {
            if (err) {
                console.log(err);
                res.send(err);
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
                res.send(err);
            }
            res.send(boards);
        });
    });

    //adds a board
    app.post('/board/new', function(req, res) {
        var newBoard = new boardModel.Board();
        newBoard.name = req.body.name;
        newBoard.owner = req.body.owner;

        newBoard.save(function (err) {
            if (err) {
                console.log(err);
                res.send(err)
            }

            res.send(newBoard);
        });
    });

    //deletes a board by id
    app.delete('/board/delete/:id', function(req, res) {
        boardModel.Board.findById(req.params.id, function (err, board){
        if (err) {
            console.log(err);
        }

            board.remove(function(err) {
                console.log(err);
                res.send(err);
            });

            res.send({"Status":"Success"});
        });
    });

    //edit a board
    app.put('/board/edit/:id', function(req, res) {
        boardModel.Board.findById(req.params.id, function (err, board) {

        if (err) {
            console.log(err);
        }
            if (board != null)
            {
                if (board.name != req.body.name) {
                    board.name = req.body.name;
                }

                if (board.owner != req.body.owner) {
                    board.owner = req.body.owner;
                }

                if (board.active != req.body.active) {
                    board.active = req.body.active;
                }


                board.save(function(err){
                  console.log(err);
                });

                res.send(board);
            }
            else
            {
                res.send({"Error":"Board object is null"});
            }
        });
    });

    //add a lane to a board
    app.post('/board/lane/add/:id', function(req, res) {

        boardModel.Board.findById(req.params.id, function(err, board) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            var newLane = new boardModel.Lane();
            newLane.name = req.body.name;
            newLane.position = req.body.position;
            newLane.dateLastUpdated = new Date();

            board.lanes.push(newLane);

            board.save(function (err){
                if (err) {
                    console.log(err);

                }
            });

            res.contentType('json');
            res.send({ text: newComment.body, date: newComment.date });

        });
    });
    //edit a lane
    //remove a lane

    //add a card
    //edit a card
    //remove a card

}