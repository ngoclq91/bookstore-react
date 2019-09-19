import api from '../api';
import { userLoggedIn } from "./auth";

/**
 * 新規登録のアクション
 * 
 * @param data 入力情報
 * @returns {function(*): Promise<T | never>}
 */
export const signup = data => dispatch =>
    api.user.signup(data)
        .then( user => {
            dispatch(userLoggedIn(user));
        });
