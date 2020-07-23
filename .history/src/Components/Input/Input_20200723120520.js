import React from 'react';
import './Input.css';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched; 
}

const Input = (props) => {
    const inputType = props.type || 'text';
    const cls = ['input'];
    const htmlFor = `${inputType}=${Math.random()}`;

    if (isInvalid(props)) {
        cls.push('invalid');
    }
    return (
        <>
            <label htmlFor={htmlFor} className='label'>{props.label}</label>
            <input
                className={cls}
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />
            <div className='error-container'>
                {
                    isInvalid(props) 
                    ? <span> {props.errorMessage || 'This field is required' } </span> 
                    : null 
                }
            </div>
        </>
    );
}

export default Input

