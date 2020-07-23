import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <input type={props.type}/>
        </>
    );
}

export default Input