const { Schema, model} = require ('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required:true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
            match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        },

        password: {
            type: String,
            required: true
        }

    }
);



const User = model ('user', userSchema);

module.exports = User;