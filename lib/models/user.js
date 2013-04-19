module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;


    //Define user schema
    var UserSchema = new Schema ({
        cardId : ObjectID,
        email   : {type: String, required: true},
        name    : {type: String, required: true},
        password : {type: String, required: true},
        salt    : {type : String},
        lastLogin : {type: Date},
        createdBy   : {type: String, required: true},
        dateCreated : dateCreated : {type: Date, Date.now},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date

    });

    modelObject.Board = mongoose.model('board', BoardSchema, "Board");
    return modelObject;
}

