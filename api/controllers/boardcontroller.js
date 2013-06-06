module.exports = function (app, service) {

    var boardModel = service.useModel('board');

    //retrieves a board
    app.get('/board/:id', function(req, res) {
        boardModel.Board.findById(req.params.id, function(err, board) {
            if (err) {
                console.log(err);
                res.send(err);

            } 
	    res.contentType('json');
            res.send(board)

            }
           
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
            res.contentType('json');
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
            res.contentType('json');
            res.send(newBoard);
        });
    });

    //deletes a board by id
    app.delete('/board/:id/delete/', function(req, res) {
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
    app.put('/board/:id/edit/', function(req, res) {
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
                res.contentType('json');
                res.send(board);
            }
            else
            {
                res.send({"Error":"Board object is null"});
            }
        });
    });

    //add a lane to a board
    app.post('/board/:id/lane/new', function(req, res) {

        boardModel.Board.findById(req.params.id, function(err, board) {
            if (err) {
                console.log(err);

            }
            var newLane = new boardModel.Lane();
            newLane.name = req.body.name;
            newLane.position = req.body.position;
            newLane.createdBy = req.body.createdBy;
            newLane.lastUpdatedBy = req.body.lastUpdatedBy;
            newLane.dateLastUpdated = new Date(Date.now());

            board.lanes.push(newLane);

            board.save(function (err){
                if (err) {
                    console.log(err);

                }
            });

            res.contentType('json');
            res.send(newLane);

        });
    });

    //edit a lane
    app.put('/board/:id/lane/:lane_id/edit', function(req, res) {
        boardModel.Board.findById(req.params.id, function (err, board) {
            if (err) {
                console.log(err);
            }
            if (board != null) {
                var lane = board.lanes.id(req.params.lane_id);

                if (lane != null) {
                    if (lane.name != req.body.name) {
                        lane.name = req.body.name;
                    }
                    if (lane.position != req.body.position){
                        lane.position = req.body.position;
                    }

                    lane.lastUpdatedBy = req.body.lastUpdatedBy;
                    lane.dateLastUpdated = new Date(Date.now());

                board.save(function(err){
                    console.log(err);
                });
                res.contentType('json');
                res.send(board);
                }
                else
                {
                    res.send({"Error":"Lane object is null"});
                }
            }
            else
            {
                res.send({"Error":"Board object is null"});
            }
        });
    });

    //remove a lane
    app.post('/board/:id/lane/:lane_id/delete', function(req, res) {
        boardModel.Board.findById(req.params.id, function (err, board){
            if (err) {
                console.log(err);
            }
            if (board != null)
            {
                var lane = board.lanes.id(req.params.lane_id).remove();
                board.save(function(err) {
                console.log(err);
                res.send(err);
                });

                res.send({"Status":"Success"});
            }
            else
            {
                res.send({"Error":"Board object is null"});
            }
        });
    });

}
