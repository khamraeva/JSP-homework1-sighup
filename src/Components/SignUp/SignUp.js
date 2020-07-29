import React, { useState } from 'react';
import Input from '../Input/Input';
import axios from 'axios';
import './SignUp.css';

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,64}/;
    return re.test(password);
}

const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [fistNameValid, setFirstNameValid] = useState(false);

    const [lastName, setLastName] = useState('');
    const [lastNameTouched, setLastNameTouched] = useState(false);
    const [lastNameValid, setLastNameValid] = useState(false);


    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [emailValid, setEmailValid] = useState(false);


    const [password, setPassword] = useState('');
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);


    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordalid] = useState(false);

    let isFormValid = (fistNameValid && lastNameValid && emailValid && passwordValid && confirmPasswordValid);

    const formControls = [
        {
            firstName: {
                value: firstName,
                label: 'First name',
                type: 'text',
                errorMessage: 'Please enter your name',
                valid: fistNameValid,
                touched: firstNameTouched,
                validation: {
                    required: true
                }
            }
        },
        {
            lastName: {
                value: lastName,
                label: 'Last name',
                type: 'text',
                errorMessage: 'Please enter your last name',
                valid: lastNameValid,
                touched: lastNameTouched,
                validation: {
                    required: true
                }
            }
        },
        {
            email: {
                value: email,
                type: 'email',
                label: 'Email',
                errorMessage: 'Please enter a valid email',
                valid: emailValid,
                touched: emailTouched,
                validation: {
                    required: true,
                    email: true
                }
            }
        },
        {
            password: {
                value: password,
                type: 'Password',
                label: 'Password',
                errorMessage: 'Your password needs to be 8-64 characters long and contain one uppercase letter and a number',
                valid: passwordValid,
                touched: passwordTouched,
                validation: {
                    required: true,
                    password: true
                }
            }
        },
        {
            confirmPassword: {
                value: confirmPassword,
                label: 'Confirm password',
                type: 'password',
                errorMessage: 'Please make sure your passwords match',
                valid: confirmPasswordValid,
                touched: confirmPasswordTouched,
                validation: {
                    required: true,
                    checkPasswords: true
                }
            }
        }
    ]


    const submitHandler = event => {
        event.preventDefault();
    }

    const onChangeHandler = (event, controlName, control) => {

        if (controlName === 'firstName') {
            setFirstName(event.target.value);
            setFirstNameTouched(true);
            setFirstNameValid(validateControl(event.target.value, control.validation));

        }
        if (controlName === 'lastName') {
            setLastName(event.target.value);
            setLastNameTouched(true);
            setLastNameValid(validateControl(event.target.value, control.validation));
        }
        if (controlName === 'email') {
            setEmail(event.target.value);
            setEmailTouched(true);
            setEmailValid(validateControl(event.target.value, control.validation));
        }
        if (controlName === 'password') {
            setPassword(event.target.value);
            setPasswordTouched(true);
            setPasswordValid(validateControl(event.target.value, control.validation));
        }
        if (controlName === 'confirmPassword') {
            setConfirmPassword(event.target.value);
            setConfirmPasswordTouched(true);
            setConfirmPasswordalid(validateControl(event.target.value, control.validation));
        }

    }

    const validateControl = (value, validation) => {

        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid;
        }

        if (validation.password) {
            isValid = validatePassword(value) && isValid;
        }

        if (validation.checkPasswords) {
            isValid = (password === value) && isValid;
        }

        return isValid;
    }

    const onSubmitHandler = async event => {
        event.preventDefault();
        const user = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password
        }
        try {
            let isDuplicate = false;

            const response = await axios.get('http://localhost:3001/users/')
            Object.keys(response.data).forEach((key, index) => {
                const registeredUser = response.data[key];
                if (registeredUser.firstName === user.firstName && registeredUser.lastName === user.lastName) {
                    alert('user exist');
                    isDuplicate = true;
                } else if (registeredUser.email === user.email) {
                    alert('email exist');
                    isDuplicate = true;
                }
            })

            if (!isDuplicate) {
                await axios.post('http://localhost:3001/users/', user)
            }

        } catch (e) {
            console.log(e)
        }

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div className={'signup-container'}>
            <h1>Sign Up</h1>
            <form
                onSubmit={submitHandler}
                className={'signup-form'}>
                {formControls.map((controlName, index) => {
                    let control;
                    for (let key in controlName) {
                        control = controlName[key];
                        controlName = key;
                    }
                    return (
                        < Input
                            key={controlName + index}
                            type={control.type}
                            value={control.value}
                            valid={control.valid}
                            touched={control.touched}
                            label={control.label}
                            shouldValidate={!!control.validation}
                            errorMessage={control.errorMessage}
                            onChange={event => onChangeHandler(event, controlName, control)}
                        />
                    )
                })
                }
                <div className={'btn-wrapper'}>
                    <button 
                        onClick={onSubmitHandler}  
                        disabled={!isFormValid}     
                    >Submit</button>
                </div>
            </form>
        </div>
    )

}

export default SignUp