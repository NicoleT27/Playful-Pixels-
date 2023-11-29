const { Schema, model} = require ('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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

//hashes password before saving it
userSchema.pre('save', (next) => {
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);

    next();
})


const User = model ('user', userSchema);

module.exports = User;