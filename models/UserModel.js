const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        userType: { type: String, required: true, enum: ['individual', 'ngo'] },

        // **Common Fields**
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String },

        // **NGO-Specific Fields**
        certificateRegNumber: { type: String },
        contactPersonName: { type: String },
        areaOfOperation: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
