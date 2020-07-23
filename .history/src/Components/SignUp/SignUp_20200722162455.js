import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        value='Firstname'
                    />
                    <input
                        type='text'
                        value='Lastname'
                    />
                    <input
                        type='text'
                        value='Email'
                    />
                    <input
                        type='text'
                        value='Password'
                    />
                    <input
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