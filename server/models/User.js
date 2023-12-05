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
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    
    next();
});


const User = model ('user', userSchema);

module.exports = User;