import { USER_LOGGED_IN } from '../types';
import api from '../api';

/**
 * Authentication Action
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

/**
 * Action user đã login thành công
 * 
 * @param user
 * @returns {{type: string, user: *}}
 */
export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});


/**
 * Take credentials (資格情報(ログイン情報)取得) func
 * 
 * @param credentials 資格情報
 * @returns {function(*): Promise<T | never>}
 */
export const login = credentials => dispatch =>
    // gọi api login và sau đó gởi action login
    api.user.login(credentials)
        .then( user => dispatch(userLoggedIn(user)));
