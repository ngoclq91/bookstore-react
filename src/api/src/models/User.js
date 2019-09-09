import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
schema.method('isValidPassword', async (password) => {
    return await bcrypt.compareSync(password, this.passwordHash);
});

export default mongoose.model("User", schema);
