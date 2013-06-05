module.exports = function(mongoose) {
    var modelObject = {};

    var Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId;
    var crypto = require('crypto');


    //Define user schema
    var UserSchema = new Schema ({
       userName: {type: String, required: true},
       email: {type: String, required: true},
       status: {type: Boolean, default: true},
       passwordHash: {type: String, required: true},
       salt: {type: String},
       createdBy: {type: String},
       lastUpdatedBy: {type: String},
       dateCreated: {type: Date, default: Date.now()},
       dateLastUpdated: {type: Date}
    }, {versionKey: false});

    UserSchema
        .virtual('password')
        .set(function(password) {
            this._password = password;
            this.salt = this.makeSalt();
            this.hashed_password = this.encryptPassword(password);
        })
        .get(function() { return this._password })


    UserSchema.methods = {
        authenticate: function(plainText) {
            return this.encryptPassword(plainText) === this.hashed_password
        },
        makeSalt: function() {
            return Math.round((new Date().valueOf() * Math.random())) + ''
        },

        encryptPassword: function(password) {
            if (!password) return ''
            return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
        }
    }


    modelObject.User = mongoose.model('user', UserSchema, "User");
    return modelObject;
}

