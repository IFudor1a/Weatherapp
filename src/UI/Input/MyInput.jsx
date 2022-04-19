import React from 'react';
import classes from './MyInput.module.css'
const MyInput = ({placeholder, ...props}) => {
    return (
        <input placeholder={placeholder} className={classes.myInput} {...props}/>
    );
}

export default MyInput;