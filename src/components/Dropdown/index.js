import React, { useState } from 'react';
import './style.css'

export const Dropdown = ({ options, selected, onChange }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="app__section__dropdown-wrapper">
            <div className="app__section__dropdown-selected" onClick={() => { setIsOpen(!isOpen) }}>
                {options[selected]}
            </div>
            { isOpen &&
                <div className="app__section__dropdown-options">
                    {options.map((option, index) => <div className="app__section__dropdown-item" key={index.toString()} onClick={() => { onChange(index); setIsOpen(false) }}>{option}</div>)}
                </div>
            }
        </div>
    )
}