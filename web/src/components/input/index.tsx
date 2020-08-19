import React, {InputHTMLAttributes} from 'react';

import './styles.css';

interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.FunctionComponent<InputProperties> = ({label, name, ...rest}) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;