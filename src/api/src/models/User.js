import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';

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
        email: { type: String, required: true, lowercase: true, index: true, unique: true},
        passwordHash: { type: String, required: true},
        confirmed: { type: Boolean, default: false }
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
        confirmed: this.confirmed,
        token: this.generateJWT()
    }
};

/**
 * パスワードをハッシュする
 * 
 * @param password 入力したパスワード
 */
schema.methods.setPassword = function(password) {
    this.passwordHash = bcrypt.hashSync(password, 10);
};

/**
 * 利用するプラグインを定義
 */
schema.plugin(uniqueValidator, { message: 'This email is already taken'});

export default mongoose.model("User", schema);
