import api from '../api';
import { userLoggedIn } from "./auth";

/**
 * 新規登録のアクション(新規登録APIを呼び出す)
 * 
 * @param data 入力した情報
 * @returns {function(*): Promise<T | never>}
 */
export const signup = data => dispatch =>
    api.user.signup(data)
        .then( user => {
            dispatch(userLoggedIn(user));
        });
