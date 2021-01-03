import React from 'react';
import './style.css'

export const Checkbox = ({options, selected, onClick}) =>{
    return(
        <> 
            {
            options.map((option) =>{
                
                let isSelected = selected.find((el) => el.id === option.id); 

                return(
                    <div className="app__section__item" key={option.id} onClick={() => onClick(option)}>
                        <div className="app__section__item-selection">
                            {isSelected && <span>✓</span> }
                        </div>
                        <span className="app__section__item-text">{option.name}</span>
                    </div>
                )
            })}
        </>
    )
}