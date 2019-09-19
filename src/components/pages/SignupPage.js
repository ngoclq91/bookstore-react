import React from 'react';
import SignupForm from '../forms/SignupForm';

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
        console.log(data);
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

export default SignupPage;
