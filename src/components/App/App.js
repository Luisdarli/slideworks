import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';
import { Dropdown } from '../Dropdown';
import { Tags } from '../Tags';
import './style.css'


export const App = () => {
    //dados formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    //opcoes checkbox
    const checkboxOptions = [{
        id: "1",
        name: "Opção 1",
        selected: true
    },{
        id:"2",
        name: "Opção 2",
        selected: true
    },{
        id:"3",
        name: "Opção 3",
        selected: true
    }];
    const [selectedOptionsCheckbox, setSelectedOptionCheckbox] = useState(checkboxOptions);


    //opcoes dropdown
    const [select, setSelect] = useState(0);
    const dropdownOptions = ["Select 1", "Select 2", "Select 3"]
    
    
    //setando TAGS
    const [selectedOptions, setSelectedOptions] = useState([]);

    const tags = [{
        id: "5febb0d786c6bc9cc54ba973",
        text: "web"
    }, {
        id: "5fecf51da4c1fc6087ad0f6f",
        text: "iphone"
    },{
        id: "5febb0d786c6bc9cc54ba973",
        text: "web",
    },{
        id: "5fecf522d27b6416bb57877c",
        text: "interface"
    },{
        id: "5fecf52631cc2372fbb294e3",
        text: "icon"
    },{
        id: "5febb0d786c6bc9cc54ba977",
        text: "illustration"
    },{
        id: "5febb0d786c6bc9cc54ba978",
        text: "graphics"
    },{
        id: "5febb0d786c6bc9cc54ba97b",
        text: "ui"
    },{
        id: "5febb0d786c6bc9cc54ba97d",
        text: "design"
    },{
        id:"5febb0d786c6bc9cc54ba97f",
        text: "app"
    }];


    const handleTagOnClick = (option) => {
        let newArray = [];

        const isSelected = selectedOptions.find((item) => item.id === option.id); //opção ja selecionada.

        if (isSelected) {
            newArray = selectedOptions.filter((item) => item.id !== option.id); //se ja selecionado, excluir da lista (toggle).
        } else {
            newArray = [...selectedOptions, option] //se nao estiver selecionado, passa a ser selecionado.
        }

        setSelectedOptions(newArray);
    };

    const checkOnClick = (el) =>{
        let newArray = [];

        const isSelected = selectedOptionsCheckbox.find((item) => item.id === el.id); //opção ja marcada.

        if(isSelected){
            newArray = selectedOptionsCheckbox.filter((item) => item.id !== el.id); //retorna novo array sem o elemento ja selecionado.
        }else{
            newArray = [...selectedOptionsCheckbox, el] //add elemento ao array caso selecionado
        }
        setSelectedOptionCheckbox(newArray);
    };

    const handleSubmitClick = () => {
        const token = "076cd025a462d47c6cca857dab8fd1db196118b4f31d85728d4dab6f80b5a966"
        const newCard = {
            "idBoard": "5febb0d7d150c56bc04becca",
            "idList": "5fecebaac81b1824294620f9",
            "name": `${name} - ${email}`,
            "desc": `**Nome:** ${name} \r\n **Email:** ${email} \r\n **Mensagem:** ${message} \r\n **Opçoes:** ${selectedOptionsCheckbox.map((option) => option.name)} \r\n **Dropdown:** ${dropdownOptions[select]}`,
            "idLabels": selectedOptions.map((option) => option.id)
        }

        fetch('https://api.trello.com/1/cards?key=e5a76519417cd6e9c33d5b986f3074a6&token=' + token,
        {
            method:"POST",
            body: JSON.stringify(newCard),
            headers: {
                'Content-Type': 'application/json',
            }
        })
    };

    return (
        <div className="app">
            <section className="app__section">
                <label>Name</label>
                <input type="text" placeholder="John Doe" onChange={(e) => { setName(e.target.value) }} />

                <label>E-mail</label>
                <input type="text" placeholder="error@mail.com" onChange={(e) => { setEmail(e.target.value) }} />

                <textarea rows="10" cols="60" onChange={(e) => { setMessage(e.target.value) }} />
            </section>

            <section className="app__section">
                <div className="app__section-checkbox">
                    <Checkbox options={checkboxOptions} selected={selectedOptionsCheckbox} onClick={checkOnClick}/>
                </div>

                <div className="app__section-dropdown">
                    <Dropdown options={dropdownOptions} selected={select} onChange={(index) => { setSelect(index) }} />
                </div>

                <div className="app__section-tags">
                    <Tags options={tags} selectedOptions={selectedOptions} onClick={handleTagOnClick} />
                    <button className="app__section-button" onClick={handleSubmitClick}>Enviar</button>
                </div>
            </section>
        </div>
    )
}