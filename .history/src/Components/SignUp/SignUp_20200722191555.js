import React, { Component } from 'react';
import Input from '../Input/Input';
import './SignUp.css';


const inputs = [
    {
        label: 'Firstname',
        type:'text'
    },
    {
        label: 'First name',
        type:'text'
    },
    {
        label: 'Email',
        type:'email'
    },
    {
        label: 'Password',
        type:'password'
    }
]

class SignUp extends Component {


    render() {
        return (
            <div className={'signup-container'}>
                <h1>Sign Up</h1>
                <form className={'signup-form'}>

                 {inputs.map((input, index) => {
                        return (
                            < Input 
                                key={index}
                                label={input.label}
                                type={input.type}                      
                            />
                        )
                    })
                }   
                    {/* <label>Firstname</label>
                    <input
                        className='input'
                        type='text'
                    />
                    <label>Lastname</label>
                    <input
                        className='input'
                        type='text'
                    />
                    <label>Email</label>
                    <input
                        className='input'
                        type='text'
                    />
                    <label>Password</label>
                    <input
                        className='input'
                        type='password'
                    />
                    <label>Confirm password</label>
                    <input
                        className='input'
                        type='password'
                    /> */}
                    <div className='btn-wrapper'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp