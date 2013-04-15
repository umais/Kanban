var Board = new Schema({
	boardId	: ObjectID,
	name	: {type: String, required: true},
	owner	: String,
	active	: Boolean,
	lanes   : [Lanes],
	dateCreated	: {type: Date, Date.now}
});

