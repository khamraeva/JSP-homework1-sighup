import React from 'react';
import './Input.css';

const Input = (props) => {
    const inputType = props.type || 'text';
    return (
        <>
            <label className='label'>{props.label}</label>
            <input 
                className='input' 
                type={inputType}
                value={props.value}
            />
        </>
    );
}

export default Input

