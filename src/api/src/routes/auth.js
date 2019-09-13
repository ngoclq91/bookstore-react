import express from 'express';
import User from '../models/User';

/**
 * Route for API Auth
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

/** API Auth Route */
const router = express.Router();

router.post('/', (req, res) => {
    
    /** Auth Info (lấy từ input login) */
    const { credentials } = req.body;
    
    User.findOne({ email: credentials.email})
        .then( user => {
            if (user && user.isValidPassword(credentials.password)) {
                res.json({
                    user: user.toAuthJSON()
                })
            } else {
                res.status(400).json({
                    errors: {
                        global: "Invalid credentials"
                    }
                })
            }
    });
});

export default router;
