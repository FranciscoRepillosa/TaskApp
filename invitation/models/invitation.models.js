const mongoose = require("mongoose");

const InvitationSchema = new mongoose.Schema({
    guestEmail: {
        type: String,
        required: [true, "guest email is required"]
    },
	status: {
            type: String,
            enum: ["active", "pending", "decline"]
    },
	userId: String,
    hostName: String, 
	companyId: String,
    companyName: String,
    role:  {
        type: String,
        enum: ["admin", "supervisor", "user"]
    },
    departament: String

});

const Invitation = mongoose.model('Invitation', InvitationSchema);

module.exports = Invitation;

