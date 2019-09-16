import React from 'react';
import {Redirect, Route} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * GuestRoute Component
 *
 * @author ngoclq91<ngocsonqs@gmail.com>
 * @datetime 2019-09-16, 月, 1:42
 */

/**
 * Define GuestRoute Component
 * 
 * @param isAuthenticated ログイン済かどうか
 * @param Component コンポーネント名
 * @param rest プロパティー情報（配列）
 * @returns {*} 該当コンポーネントをレンダー (ログイン済場合、指定コンポーネントをレンダー、まだログインしない場合、Dashboardをレンダー)
 */
const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={ props => 
            !isAuthenticated 
                ? <Component {...props}/> 
                : <Redirect to="/dashboard" />
        }
    />
);

/**
 * Define GuestRoute propsTypes
 * 
 * @type {{component: shim, isAuthenticated: shim}}
 */
GuestRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.object.isRequired
};

/**
 * Storeが持つStateをどうのようにPropsに混ぜ込むかを決める
 * 
 * @param state 全体State
 * @returns {{isAuthenticated: boolean}}
 */
const mapStatetoProps = (state) => {
    return {
        isAuthenticated: !!state.user.token
    }
};

export default connect(mapStatetoProps)(GuestRoute);
