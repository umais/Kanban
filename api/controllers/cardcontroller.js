module.exports = function (app, service) {
    var mongoose = require('mongoose');
    var cardModel = service.useModel('card');

    //get a card
    app.get('/card/:id', function(req, res) {
        cardModel.Card.findById(req.params.id, function(err, card) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.contentType('json');
            res.send(card);
        });
    });

    //retrieves all cards for a board
    app.get('/board/:id/cards', function(req, res) {

        var query = cardModel.Card.find({});

        query.exec(function (err, cards) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.contentType('json');
            res.send(cards);
        });
    });

    //retrieves all cards for a specific lane
    app.get('/lane/:id/cards', function(req, res) {
        var query = cardModel.Card.find({});

        query.exec(function (err, cards) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.contentType('json');
            res.send(cards);
        });
    });

    //add a new card
    app.post('/card/new', function(req, res) {
        var newCard = new cardModel.Card();
        newCard.title = req.body.title;
        newCard.description = req.body.description;
        newCard.dateDue = new Date(req.body.dateDue);
        newCard.assignedTo = req.body.assignedTo;
        newCard.position = req.body.position;
        newCard.bgColor = req.body.bgColor;
        newCard.createdBy = req.body.createdBy;
        newCard.lastUpdatedBy = req.body.lastUpdatedBy;
        newCard.dateLastUpdated =  new Date(Date.now());
        newCard.boardId = new mongoose.Types.ObjectId(req.body.boardId);
        newCard.laneId = new mongoose.Types.ObjectId(req.body.laneId);


        newCard.save(function (err) {
            if (err) {
                console.log(err);
                res.send(err)
            }
            else
            {
                res.contentType('json');
                res.send(newCard);
            }

        });
    });

   //update a card
    app.put('/card/:id/edit', function(req, res){
        cardModel.Card.findById(req.params.id, function (err, card) {

            if (err) {
                console.log(err);
            }
            if (card != null)
            {
                if (card.title != req.body.title) {
                    board.title = req.body.title;
                }
                if (card.description != req.body.description) {
                    board.description = req.body.description;
                }
                if (card.dueDate != req.body.dueDate) {
                    board.dueDate = req.body.dueDate;
                }
                if (card.assignedTo != req.body.assignedTo) {
                    board.assignedTo = req.body.assignedTo;
                }
                if (card.position != req.body.position) {
                    board.position = req.body.position;
                }
                if (card.bgColor != req.body.bgColor) {
                    board.bgColor = req.body.bgColor;
                }

                card.lastUpdatedBy = req.body.lastUpdatedBy;
                card.dateLastUpdated =  new Date(Date.now());
                card.laneId = req.body.laneID;

                card.save(function(err){
                    console.log(err);
                });
                res.contentType('json');
                res.send(card);
            }
            else
            {
                res.send({"Error":"Card object is null"});
            }
        });
    });

   //delete a card
    app.delete('/card/:id/delete', function(req, res){
        cardModel.Card.findById(req.params.id, function (err, card){
            if (err) {
                console.log(err);
            }

            card.remove(function(err) {
                console.log(err);
                res.send(err);
            });

            res.send({"Status":"Success"});
        });

    });

    //move a card
    app.post('/card/:card_id/move/:lane_id', function (req, res){
        cardModel.Card.findById(req.params.id, function (err, card) {

            if (err) {
                console.log(err);
            }
            if (card != null)
            {
                card.lastUpdatedBy = req.body.lastUpdatedBy;
                card.dateLastUpdated =  new Date(Date.now());
                card.laneId = req.body.laneID;

                card.save(function(err){
                    console.log(err);
                });
                res.contentType('json');
                res.send(card);
            }
            else
            {
                res.send({"Error":"Card object is null"});
            }
        });
    });

   //add a comment to a card
    app.post('/card/:card_id/comment/:id/new', function(req, res){
        cardModel.Card.findById(req.params.card_id, function (err, card)
        {

        })
    });

    //get all comments by card
    app.get('/card/:card_id/comments', function (req, res){

    });




    //get comment by id
    app.get('/card/:card_id/comment/:id', function (req, res){

    });



}