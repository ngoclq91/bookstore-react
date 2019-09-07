import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

/**
 * Login Page Component
 *
 * @author ngoclq91<ngocsonqs@gmail.com>
 */
class LoginPage extends React.Component {
    /**
     * Login Form submit handle
     * 
     * @param data
     */
    submit = (data) => 
        // gởi data đến login props và sau đó redirect to root page
        this.props.login(data)
            .then( () => this.props.history.push('/'));
    
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

/**
 * Define đầu vào (props) của LoginPage Component
 * 
 * @type {{history: shim, login: shim}}
 */
LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);



