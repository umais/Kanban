module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var CardSchema = new Schema ({
        title   : {type: String, required: true},
        cardText    : {type: String, required: true},
        position    : {type: Number, required: true},
        bgColor     : String,
        createdBy   : {type: String, required: true},
        dateCreated : {type: Date, default:Date.now},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date
    }, { versionKey: false });

    var LaneSchema = new Schema({
        name    : {type: String, required: true},
        position    : {type: Number, required: true},
        cards   : [CardSchema],
        dateCreated : {type: Date, default:Date.now},
        createdBy : {type: String, required: true},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date
    }, { versionKey: false });

    var BoardSchema = new Schema({
        name	: {type: String, required: true},
        owner	: String,
        active	: Boolean,
        //members   : [Users],
        lanes   : [LaneSchema],
        dateCreated	: {type: Date, default:Date.now}
    }, { versionKey: false });

    modelObject.Card = mongoose.model('card', CardSchema, "Card");
    modelObject.Lane = mongoose.model('lane', LaneSchema, "Lane");
    modelObject.Board = mongoose.model('board', BoardSchema, "Board");
    return modelObject;
}