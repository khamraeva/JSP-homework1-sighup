import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <>
            <label className='label'>{props.label}</label>
            <input 
                className='input' 
                type={props.type}
            />
        </>
    );
}

export default Input

