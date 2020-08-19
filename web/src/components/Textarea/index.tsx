import React, {TextareaHTMLAttributes} from 'react';

import './styles.css';

interface TextareaProperties extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

const Textarea: React.FunctionComponent<TextareaProperties> = ({label, name, ...rest}) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;