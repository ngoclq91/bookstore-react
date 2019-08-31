import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button} from "semantic-ui-react";
import Validator from 'validator';
import InlineError from '../messages/InlineError';

/**
 * Login Form Component
 * 
 * @author ngoclq91<ngocsonqs@gmail.com>
 */
class LoginForm extends React.Component {
    /** state initial */
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    };

    /**
     * Login Form submit handle 
     */
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        
        // not error then submit form
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        } 
    };

    /**
     * Validate Form Login
     * 
     * @param data
     */
    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    /**
     * Form Field change handle
     * @param e
     */
    onChange = e => 
        this.setState({
            data: { ...this.state.data, [e.target.name] : e.target.value}
        });
    
    render() {
        const { data, errors } = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
                {/* START email field */}
                <Form.Field required error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@example.com" 
                        value={data.email} 
                        onChange={this.onChange}
                    />
                    {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                {/* END email field*/}
                
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
                    {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                {/* END password field */}
                <Button primary>Login</Button>
            </Form>
        )
    }
}

/**
 * Define đầu vào (props) của LoginForm component
 * 
 * @type {{submit: shim}}
 */
LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;
