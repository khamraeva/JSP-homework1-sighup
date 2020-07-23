import React, { Component } from 'react';
import Input from '../Input/Input';
import './SignUp.css';


class SignUp extends Component {
    state = {
        formControls: {
                firstName: {
                    value: '',
                    label: 'First name',
                    type:'text',
                    // errorMessage: 'Please enter your name',
                },
                lastName: {
                    value: '',
                    label: 'Last name',
                    type:'text',
                    // errorMessage: 'Please enter your last name',
                },
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    // errorMessage: 'Please enter a valid email',
                    // valid: false,
                    // touched: false,
                    // validation: {
                    //     required: true,
                    //     email: true
                    // }
                },
                password: {
                    value: '',
                    type: 'Password',
                    label: 'Password',
                    // errorMessage: 'Your password needs to be 8-64 characters long and contain one uppercase letter, one symbol, and a number',
                    // valid: false,
                    // touched: false,
                    // validation: {
                    //     required: true,
                },
                confirmPassword: {
                    label: 'Confirm password',
                    type:'password',
                    // errorMessage: 'Please make sure your passwords match',
                }
            }
        }
    

    submitHandler = event => {
        event.preventDefault();
    }

    onChangeHandler = (event, controlName) => {
        const formControls = { ...this.state.formControls};
        const control = { ...formControls[controlName] };

        control.value = event.target.value;
        // control.touched = true;
        // control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({
            formControls
        })
    }

    render() {
        return (
            <div className={'signup-container'}>
                <h1>Sign Up</h1>
                <form 
                    onSubmit={this.submitHandler} 
                    className={'signup-form'}>
                 {Object.keys(this.state.formControls).map((controlName, index) => {
                     const control = this.state.formControls[controlName];
                        return (
                            < Input 
                                key={controlName + index}
                                type={control.type}
                                value={control.value}
                                label={control.label}  
                                onChange={event => this.onChangeHandler(event, controlName)}                  
                            />
                        )
                    })
                }   
                    <div className='btn-wrapper'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp