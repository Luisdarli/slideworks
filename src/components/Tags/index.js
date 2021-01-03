import React from 'react'
import './style.css'

export const Tags = ({ options, selectedOptions, onClick }) => {
    return (
        <div className="app__section__tags-wrapper">
            {options.map((option) => { //percorrendo options
                let isSelected = selectedOptions.find((item)=> item.id === option.id); //procurando o elemento.id que seja igual ao elemento do options.id
        
                return (
                    // checando se selecionado, se sim add classe selected - evento de click passando como parametro o elemento option do array
                    <span className={`app__section__tags-options ${isSelected ? 'selected' : ''}`} key={option.id} onClick={() => onClick(option)}> 
                        {option.text}
                    </span>
                )
            })}
        </div>
    )
}