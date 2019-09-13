import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/**
 * User Model
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

/**
 * Define User Schema
 */
const schema = new mongoose.Schema(
    {
        email: { type: String, required: true, lowercase: true, index: true},
        passwordHash: { type: String, required: true}
    },
    {
        timestamps: true
    }
);

/**
 * Valid password
 */
schema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

/**
 * Generate JSON WEB Token
 * 
 * @returns {*}
 */
schema.methods.generateJWT = function(){
    return jwt.sign({
        email: this.email,
    }, process.env.JWT_SECRET)
};

/**
 * Result authentication to JSON
 * 
 * @returns {{email: *, token: *}}
 */
schema.methods.toAuthJSON = function() {
    return {
        email: this.email, 
        token: this.generateJWT()
    }
};

export default mongoose.model("User", schema);
