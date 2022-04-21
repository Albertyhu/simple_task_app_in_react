import React, { useState } from 'react'; 
import { genKey } from '../randGen.js';
/*
export const DisplayEdit = props => {
    const { id, text, toEdit, toggleEdit, handleSubmit } = props; 

    const handleTextChange = event => {
        handleTextChange(event)
    }
    return (
        <li key={id}>
            <input value={text} ></input>
            <button onClick={() => {
                toggleEdit(id); 
                handleSubmit(); 
            }
            }>Submit Edit</button>
            <button onClick={() => toggleEdit(id)}>Cancel</button>
        </li>
        )
}*/

export const DisplayEdit = props => {
    const { id, text, toEdit, toggleEdit, handleSubmit, handleTextChange } = props;
    const [textEdit, setTextEdit] = useState(text); 
    const handleTextEdit = event => {
        setTextEdit(event.target.value)
    }
    return (
        <span key = "edit">
            <input value={textEdit} onChange={handleTextEdit} ></input>
            <button onClick={() => {
                handleSubmit(textEdit, id);
                toggleEdit();
            }
            }>Submit Edit</button>
            <button onClick={() => toggleEdit()}>Cancel</button>
        </span>
    ); 
}