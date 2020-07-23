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
            />
        </>
    );
}

export default Input

