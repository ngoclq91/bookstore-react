import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types';
import api from '../api';

/**
 * Authentication Action
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

/**
 * Action Type Logged_in (Login Success)
 * 
 * @param user : Login Info
 * @returns {{type: string, user: *}}
 */
export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

/**
 * Action Type Logout
 * 
 * @returns {{type: string}}
 */
export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
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

/**
 * Action Logout
 * 
 * @returns {Function}
 */
export const logout = () => dispatch => {
    localStorage.removeItem('bookStoreJWT');
    dispatch(userLoggedOut());
};
