import React, { useState } from 'react'

const FormInput = (props) => {

    const [focused, setFocused] = useState(true);
    const {label, id, errorMessage, udpateValues, ...otherInputProps} = props;
    const handleFocus = () => {
        setFocused(false);
    }

    return (
        <div className='form-input'>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                {...otherInputProps} 
                onChange={udpateValues}  
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            {!focused && <span className="error-message">{errorMessage}</span>}
        </div>
    )
}

export default FormInput