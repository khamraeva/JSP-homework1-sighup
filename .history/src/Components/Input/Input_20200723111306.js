import React from 'react';
import './Input.css';

const Input = (props) => {
    const inputType = props.type || 'text';
    const cls = ['input'];
    return (
        <>
            <label className='label'>{props.label}</label>
            <input
                className={cls}
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />
            <div className='error-container'>
                {
                    this.state.formErrors.cardNumber ?
                        <span className='error'>{this.state.cardNumberError}</span> : ''
                }
            </div>
        </>
    );
}

export default Input

