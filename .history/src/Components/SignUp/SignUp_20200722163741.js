import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className={'signup-container'}>
                <h1>Sign Up</h1>
                <form className={'signup-form'}>
                    <input
                        className='input'
                        type='text'
                        value='Firstname'
                    />
                    <input
                        className='input'
                        type='text'
                        value='Lastname'
                    />
                    <input
                        className='input'
                        type='text'
                        value='Email'
                    />
                    <input
                        className='input'
                        type='text'
                        value='Password'
                    />
                    <input
                        className='input'
                        type='text'
                        value='Confirm password'
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp