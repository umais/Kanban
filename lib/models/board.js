

var Cards = new Schema ({
    cardId : ObjectID,
    title   : {type: String, required: true},
    cardText    : {type: String, required: true},
    position    : {type: Integer, required: true},
    bgColor     : String,
    createdBy   : {type: String, required: true},
    dateCreated : dateCreated : {type: Date, Date.now},
    lastUpdatedBy   : {type: String, required: true},
    dateLastUpdated : Date

});

var Lanes = new Schema({
    laneId  : ObjectID,
    name    : {type: String, required: true},
    position    : {type: Integer, required: true},
    cards   : [Cards],
    dateCreated : {type: Date, Date.now},
    createdBy : {type: String, required: true},
    lastUpdatedBy   : {type: String, required: true},
    dateLastUpdated : Date
});

var Board = new Schema({
    boardId	: ObjectID,
    name	: {type: String, required: true},
    owner	: String,
    active	: Boolean,
    lanes   : [Lanes],
    dateCreated	: {type: Date, Date.now}
});
