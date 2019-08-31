import React from 'react';
import LoginForm from '../forms/LoginForm';

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
    submit = (data) => {
        console.log(data);
    };
    
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm submit={this.submit}/>
            </div>
        )
    }
}

export default LoginPage;
