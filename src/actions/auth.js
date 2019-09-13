import { USER_LOGGED_IN } from '../types';
import api from '../api';

/**
 * Authentication Action
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

/**
 * Action Logged_in (Login Success)
 * 
 * @param user : Login Info
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
    // gọi api login và truyền login info, nếu sucess thì lưu vào localstorage và dispatch userloggedin
    api.user.login(credentials)
        .then( user => {
            localStorage.bookStoreJWT = user.token;
            dispatch(userLoggedIn(user))
        });
