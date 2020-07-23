import React, {Component} from 'react';
import './SignUp.css';

class SignUp extends Component {
    render() {
      return (
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
            <button></button>
        </form>
      )
    }
  }

export default SignUp