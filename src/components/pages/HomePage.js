import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

/**
 * HomePage Component
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */

/**
 * Define HomePage Component
 * 
 * @param isAuthenticated ログイン済みフラグ
 * @param logout ログアウト
 * @returns {*}
 * @constructor
 */
const HomePage = ({ isAuthenticated, logout }) => (
    <div>
        <h1>HomePage</h1>
        {isAuthenticated 
            ? <button onClick={ () => logout() }>Logout</button> 
            : <Link to="/login">Login</Link>}
    </div>
);

/**
 * Define PropTypes for HomePageComponent
 * 
 * @type {{isAuthenticated: shim}}
 */
HomePage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

/**
 * Store が持つ状態stateをどのようにpropsに混ぜ込むかを決める
 * 
 * @param state 全体のstate
 * @returns {{isAuthenticated: boolean}}
 */
const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.user.token
    }
};

export default connect(mapStateToProps, { logout: actions.logout })(HomePage);
