import React, { useState } from 'react'; 
import { genKey } from '../randGen.js';
import { DisplayLiItem } from './listItem.js'; 
import { DisplayEdit } from './handleEdit.js';


const Overview = props => {
    const { tasks, deleteFunc, toggleEdit, handleTextChange, handleSubmit } = props;


    return (
        <ol>
            {tasks.length !== 0 &&
                tasks.map(val => {
                    return (<li key={val.id}>
                        <RenderItem
                            key={val.id}
                            {...val}
                            tasks={tasks}
                            deleteFunc={deleteFunc}
                            toggleEdit={toggleEdit}
                            handleTextChange={handleTextChange}
                            handleSubmit={handleSubmit} /> 
                    
                    </li>)

                })
            }
        </ol>
    )

}

const RenderItem = props => {
    const { tasks, deleteFunc, toggleEdit, handleTextChange, handleSubmit } = props;

    const [toEdit, setEdit] = useState(false); 
    const toggleEditField = () => {
        setEdit(!toEdit)
    }

    return (
        <div>
            { !toEdit && 
                <DisplayLiItem
                    key='displayItem'
                    id={props.id}
                    text={props.text}
                    toEdit={props.toEdit}
                    handleDelete={deleteFunc}
                    toggleEdit={toggleEditField} />
            
            }
            {toEdit &&
                <DisplayEdit
                    key='displayEdit'
                    id={props.id}
                    text={props.text}
                    toEdit={props.toEdit}
                    handleDelete={deleteFunc}
                    handleSubmit={handleSubmit}
                    handleTextChange={handleTextChange}
                    toggleEdit={toggleEditField}
                />
            }
        </div>
        )
       
}

export default Overview; 