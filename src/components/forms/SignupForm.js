import React from 'react';
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

/**
 * SignupForm Component
 *
 * @author ngoclq91<ngocsonqs@gmail.com>
 * @datetime 2019-09-18, 水, 8:6
 */
class SignupForm extends React.Component {
    
    /* State Initial */
    state = {
        data: {
            email: "",
            password: "",
            cfPassword: ""
        },
        loading: false,
        errors: {}
    };
    
    /**
     * Handle change field form
     * 
     * @param e Event info
     */
    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name] : e.target.value.trim()}
        });

    /**
     * Login Form submit handle
     */
    onSubmit = () => {
        const errors = this.onValidate(this.state.data);
        this.setState({errors});
        
        // not error then submit form
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            console.log(this.state.data);
        }
    };
    
    /**
     * Handle validate form
     * 
     * @param data data entered in each field input
     */
    onValidate = (data) => {
        const errors = {};
        
        // Validate email
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        
        // Check empty field input password
        if (!data.password) errors.password = "Can't be blank";
        
        // Check empty field input cfPassword
        if (!data.cfPassword) errors.cfPassword = "Can't be blank";
        
        // @todo: check match password
        
        return errors;
    };
    
    render() {
        const { data, errors, loading } = this.state;
        
        return (
            <Form onSubmit={this.onSubmit} loading={loading}>
                {/* START email field */}
                <Form.Field required error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@mail.com"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    { errors.email && <InlineError text={errors.email}/> }
                </Form.Field>
                {/* END email field */}
                
                {/* START password field */}
                <Form.Field required error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Make it secure"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    { errors.password && <InlineError text={errors.password}/> }
                </Form.Field>
                {/* END password field */}
                
                {/* START confirm password field */}
                <Form.Field required error={!!errors.cfPassword}>
                    <label htmlFor="cfPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="cfPassword"
                        name="cfPassword"
                        placeholder="Confirm Password"
                        value={data.cfPassword}
                        onChange={this.onChange}
                    />
                    { errors.cfPassword && <InlineError text={errors.cfPassword}/> }
                </Form.Field>
                {/* END confirm password field */}
                
                <Button>Cancel</Button>
                <Button primary>Sign Up</Button>
            </Form>
        )
    }
}

export default SignupForm;

