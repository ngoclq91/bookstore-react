import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';
import {userLoggedIn} from "./actions/auth";

/**
 * Redux Store
 * @type {any}
 */
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

// nếu isset JWT login thì dispatch action userLoggedIn cho store biết
if (localStorage.bookStoreJWT) {
    const user = {
        token: localStorage.bookStoreJWT
    };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
