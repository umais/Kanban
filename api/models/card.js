module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var CommentSchema = new Schema({
        body    : {type: String, required: true},
        createdBy : String,
        dateCreated : {type: Date, default:Date.now()}
    }, {versionKey: false});

    modelObject.Comment = mongoose.model('comment', CommentSchema, "Comment");

    var CardSchema = new Schema ({
        title       : {type: String, required: true},
        description : {type: String, required: true},
        dateDue     : Date,
        assignedTo  : String,
        comments    : [CommentSchema],
        position    : {type: Number, required: true},
        boardId     : { type: Schema.Types.ObjectId, required: true },
        laneId        : { type: Schema.Types.ObjectId, required: true },
        bgColor     : String,
        createdBy   : {type: String, required: true},
        dateCreated : {type: Date, default:Date.now()},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date
    }, { versionKey: false });

    modelObject.Card = mongoose.model('card', CardSchema, "Card");
    return modelObject;
}