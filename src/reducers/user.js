import {USER_LOGGED_IN} from "../types";

/**
 * USER LOGINED_IN用のREDUCER
 * 
 * @param state
 * @param action
 * @returns {SemanticShorthandItem<FeedUserProps> | Function | default.user | {login}}
 */
export default function (state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN: return action.user;
        default: return state;
    }
}
