import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users';

/**
 * SignupPage Component
 *
 * @author ngoclq91<ngocsonqs@gmail.com>
 * @datetime 2019-09-17, 火, 7:19
 */
class SignupPage extends React.Component {

    /**
     * Handle submit Form in Signup Page
     * 
     * @param data Dữ liệu nhập vào từ input form ở signupForm Component
     */
    onSubmit = (data) => {
        this.props.signup(data)
            .then( () =>
                this.props.history.push('/dashboard'));
    };
    
    render() {
        return (
            <div>
                <h1>Sign Up Page</h1>
                <SignupForm submit={this.onSubmit}/>
            </div>
        )
    }
}

/**
 * Define đầu vào của SignupPage Component
 * 
 * @type {{history: shim, signup: shim}}
 */
SignupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
