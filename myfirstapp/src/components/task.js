import React, {Component} from "react";
import PropTypes from "prop-types";

import './task.css';

class Task extends Component{

    StyleCompleted(){
        const {task} = this.props;
        
        return{
            fontSize:'20px',
            color: task.done ? 'green' : 'black',
            TextDecoration: task.done ? 'line-through' : 'none'
        }
    }

    render(){

        const {task} = this.props;

        return <div style={this.StyleCompleted()}> 
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox"/>
            <button style={btnDelete}>
                x
            </button>
        </div>
    }
}


Task.propTypes = {
    task: PropTypes.object.isRequired
}


const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task