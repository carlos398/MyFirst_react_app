import React, {Component} from 'react'

export default class TaskForm extends Component{

    onSubmit = () => {
        console.log("Submiting...")
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Write a Task"/>
                <br/>
                <br/>
                <textarea placeholder="Write a Description"></textarea>
                <br/>
                <br/>
                <button type="submit">
                    Save Task
                </button>
            </form>
        );
    }
}