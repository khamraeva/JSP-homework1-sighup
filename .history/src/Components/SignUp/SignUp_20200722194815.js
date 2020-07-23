import React, { Component } from 'react';
import Input from '../Input/Input';
import './SignUp.css';


class SignUp extends Component {
    state = {
        formControls: {
                firstName: {
                    value: '',
                    label: 'First name',
                    type:'text' 
                },
                lastName: {
                    value: '',
                    label: 'Last name',
                    type:'text'
                },
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    // errorMessage: 'Введите корректный email',
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
                    // errorMessage: 'Введите корректный пароль',
                    // valid: false,
                    // touched: false,
                    // validation: {
                    //     required: true,
                    //     minLength: 6
                },
                confirmPassword: {
                    label: 'Confirm password',
                    type:'password'
                }
            }
        }
    

    submitHandler = event => {
        event.preventDefault();
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