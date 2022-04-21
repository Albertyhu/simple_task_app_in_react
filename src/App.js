import React, { Component } from 'react'; 
import uniqid from 'uniqid'; 
import Overview from './components/Overview.js';
import { genKey } from './randGen.js'; 

class App extends Component{
    constructor() {
        super();
        this.state = {
            text: '',
            id: genKey(10),
            tasks: [],
            toEdit: false, 

        };
    }
    handleTextChange = event => {
        
        this.setState({
           text: event.target.value, 
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            text: this.state.text,
            id: this.state.id, 
            toEdit: this.state.toEdit, 
        }
        this.setState({
            tasks: [...this.state.tasks, newTask],
                text: '', 
            id: genKey(10), 
            toEdit: false, 
        })
    }

    onDelete = (id) => {
        const newList = this.state.tasks.filter(val => val.id !== id)
        this.setState({ tasks: [...newList] })

    }

    getIndex = (id) => {
        var count = 0;
        var ind = 0;
        this.state.tasks.forEach(val => {
            if (val.id === id) {
                ind = count; 
            }
            count++;
        })
        return ind; 
    }

    toggleEdit = (id) => {
        const ind = this.getIndex(id);
        const front = [];
        for (var i = 0; i < this.state.tasks.length; i++) {
            const newItem = {
                text: this.state.tasks[i].text,
                id: this.state.tasks[i].id,
                toEdit: this.state.tasks[i].toEdit,
            }
            front.push(newItem);
        }
   
        front[ind].toEdit = !front[ind].toEdit;
        this.setState({ tasks: [...front] })

    }

    handleSubmitEdit = (text, id) => {
        const ind = this.getIndex(id);
        const front = [];
        for (var i = 0; i < this.state.tasks.length; i++) {
            const newItem = {
                text: this.state.tasks[i].text,
                id: this.state.tasks[i].id,
                toEdit: this.state.tasks[i].toEdit,
            }
            front.push(newItem);
        }
        front[ind].text = text; 
        this.setState({ tasks: [...front] })

    }

    render() {
        const { tasks, text, id } = this.state; 
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Write down your tasks: </label>
                    <input onChange={this.handleTextChange} value={text}></input> 
                    <button>Submit</button>
                </form>
                <div>
                    <Overview tasks={tasks} deleteFunc={this.onDelete} toggleEdit={this.toggleEdit} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmitEdit} />
                </div>
            </div>
        )
    }
}

export default App; 