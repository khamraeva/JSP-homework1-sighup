import React, { Component } from 'react';
import Input from '../Input/Input';
import './SignUp.css';


const inputs = [
    {
        label: 'First name',
        type:'text'
    },
    {
        label: 'Last name',
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
                    <div className='btn-wrapper'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp