import React, {Component} from 'react';
import './App.css';

import tasks from './sample/tasks.json';

// components
import Tasks from './components/tasks.js';
import TaskForm from './components/TaskForm';


class App extends Component{

  state = {
    tasks : tasks
  }

  render() {
    return <div>
      <TaskForm/>
      <Tasks tasks={this.state.tasks}/>
    </div>
  }
}


export default App;