module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;


    //Define user schema
    var UserSchema = new Schema ({
        cardId : ObjectId,
        email   : {type: String, required: true},
        name    : {type: String, required: true},
        password : {type: String, required: true},
        salt    : {type : String},
        lastLogin : {type: Date},
        createdBy   : {type: String, required: true},
        dateCreated : {type: Date, default: Date.now},
        lastUpdatedBy   : {type: String, required: true},
        dateLastUpdated : Date

    });

    modelObject.User = mongoose.model('user', UserSchema, "User");
    return modelObject;
}

