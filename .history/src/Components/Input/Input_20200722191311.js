import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className={cls.join(' ')}>
        <label htmlFor={htmlFor}> {props.label} </label>
        <input 
            type={inputType}
            id={htmlFor}
            value={props.value}
            onChange={props.onChange}
        />
{/* 
        { 
            isInvalid(props) 
            ? <span> {props.errorMessage || 'Введите верное значение' } </span> 
            : null 
        } */}
        
    </div>
    );
}

export default Input

