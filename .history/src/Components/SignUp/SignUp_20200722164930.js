import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div className={'signup-container'}>
                <h1>Sign Up</h1>
                <form className={'signup-form'}>
                    <label>Firstname</label>
                    <input
                        className='input'
                        type='text'
                        placeholder='Firstname'
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
                    />
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp