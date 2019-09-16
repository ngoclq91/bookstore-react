import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from '../messages/ConfirmEmailMessage';

/**
 * DashboardPage Component
 *
 * @author ngoclq91<ngocsonqs@gmail.com>
 * @datetime 2019-09-15, 日, 2:54
 */

/**
 * Define DashboardPage Component
 * 
 * @param isConfirmed メール確認したかどうか
 * @returns {*} 確認してない場合、メッセージ表示
 */
const DashboardPage = ({ isConfirmed }) => (
    <div>
        { !isConfirmed && <ConfirmEmailMessage/>}
    </div>
);

/**
 * Define propTypes for DashboardPage Component
 * 
 * @type {{isConfirmed: shim}}
 */
DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

/**
 * Storeが持つStateをどうのようにPropsに混ぜ込むかを決める
 * 
 * @param state 全体State
 * @returns {{isConfirmed: *}}
 */
const mapStateToProps = (state) => {
    return {
        isConfirmed: state.user.confirmed
    }
};

export default connect(mapStateToProps)(DashboardPage);

