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
const DashboardPage = ({ isConfirmed }) => (
    <div>
        { !isConfirmed && <ConfirmEmailMessage/>}
    </div>
);

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        isConfirmed: state.user.confirmed
    }
};

export default connect(mapStateToProps)(DashboardPage);

