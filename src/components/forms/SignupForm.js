import React from 'react';
import PropTypes from 'prop-types';
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
    onSubmit = (e) => {
        e.preventDefault();
        const errors = this.onValidate(this.state.data);
        this.setState({errors});
        
        // not error then submit form
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props.submit(this.state.data);
        }
    };

    /**
     * Handle cancel button
     */
    onCancel = () => {
        this.setState({
            data: {
                email: '',
                password: '',
                cfPassword: ''
            },
            errors: {}
        });
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

        // check match password
        if (data.password !== data.cfPassword) errors.password = "Not match password";
        
        return errors;
    };
    
    render() {
        const { data, errors, loading } = this.state;
        
        return (
            <Form loading={loading}>
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
                
                <Button onClick={this.onCancel}>Cancel</Button>
                <Button primary onClick={this.onSubmit}>Sign Up</Button>
            </Form>
        )
    }
}

/**
 * Define đầu vào của SingupForm Component
 * 
 * @type {{onSubmit: shim}}
 */
SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;

