module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;

    var CardSchema = new Schema ({
        cardId : ObjectID,
        title   : {type: String, required: true},
        cardText    : {type: String, required: true},
        position    : {type: Number, required: true},
        bgColor     : String,
        createdBy   : {type: String, required: true},
        dateCreated : dateCreated : {type: Date, Date.now},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date

    });

    var LaneSchema = new Schema({
        laneId  : ObjectID,
        name    : {type: String, required: true},
        position    : {type: Number, required: true},
        cards   : [CardSchema],
        dateCreated : {type: Date, Date.now},
        createdBy : {type: String, required: true},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date
    });

    var BoardSchema = new Schema({
        boardId	: ObjectID,
        name	: {type: String, required: true},
        owner	: String,
        active	: Boolean,
        lanes   : [LaneSchema],
        dateCreated	: {type: Date, Date.now}
    });

    modelObject.Board = mongoose.model('board', BoardSchema, "Board");

    return modelObject;
}