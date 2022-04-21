import React, { useState } from 'react'; 
import { genKey } from '../randGen.js';
/*
export const DisplayLiItem = props => {
    const { id, text, toEdit, handleDelete, toggleEdit } = props; 
    return (
        <li key={id}>{text}
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => {
                toggleEdit(id);
                console.log(toEdit)
            }}>Edit</button>
        </li>
        )
}
*/

export const DisplayLiItem = props => {
    const { id, text, toEdit, handleDelete, toggleEdit } = props;
    return (
        <span key="display">{text}
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={() => {
                toggleEdit();
            }}>Edit</button>
        </span>
    )
    
}