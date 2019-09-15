import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Redirect, Route} from "react-router-dom";

/**
 * UserRoute Component
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 * @datetime 2019-09-15, 日, 23:37
 */

/**
 * Define UserRoute Component
 * 
 * @param isAuthenticated ログイン済みかどうか
 * @param Component コンポーネント名
 * @param rest プロパティ情報（配列）
 * @returns {*} 該当コンポーネントをレンダー (ログイン済み場合、指定コンポーネントをレンダー、まだログインしない場合、ROOTをレンダー)
 */
const UserRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={ props => 
            isAuthenticated 
                ? <Component {...props} /> 
                : <Redirect to="/"/> 
        }
    />
);

/**
 * Define propTypes for UserRoute Component
 * 
 * @type {{component: shim, isAuthenticated: shim}}
 */
UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

/**
 * Storeが持つstateをどのようにpropsに混ぜ込むかを決める
 * 
 * @param state 全体state
 * @returns {{isAuthenticated: boolean}}
 */
const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.user.token
    }
};

export default connect(mapStateToProps)(UserRoute);
