import React, { Component } from 'react';
import Input from '../Input/Input';
import './SignUp.css';


// const inputs = [
//     {
//         label: 'First name',
//         type:'text'
//     },
//     {
//         label: 'Last name',
//         type:'text'
//     },
//     {
//         label: 'Email',
//         type:'email'
//     },
//     {
//         label: 'Password',
//         type:'password'
//     },
//     {
//         label: 'Confirm password',
//         type:'password'
//     }
// ]

class SignUp extends Component {
    state = {
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
                label: 'Пароль',
                // errorMessage: 'Введите корректный пароль',
                // valid: false,
                // touched: false,
                // validation: {
                //     required: true,
                //     minLength: 6
                // },
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
                 {Object.keys(this.state).map((input, index) => {
                     console.log('input ', input[label]);
                        return (
                            < Input 
                                key={index}
                                label={input}
                                type={input}                      
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