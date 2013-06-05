module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var LaneSchema = new Schema({
        name    : {type: String, required: true},
        position    : {type: Number, required: true},
        dateCreated : {type: Date, default:Date.now},
        createdBy : {type: String, required: true},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date
    }, { versionKey: false });

    modelObject.Lane = mongoose.model('lane', LaneSchema, "Lane");

    var BoardSchema = new Schema({
        name	: {type: String, required: true},
        owner	: String,
        active	: {type: Boolean, default: true},
        //members   : [Users],
        lanes   : [LaneSchema],
        dateCreated	: {type: Date, default:Date.now}
    }, { versionKey: false });

    modelObject.Board = mongoose.model('board', BoardSchema, "Board");
    return modelObject;
}