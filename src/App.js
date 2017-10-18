import React, { Component } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSearch from './components/TaskSearch'
import TaskControl from './components/TaskControl'
import {getCookie} from './helper/functions'
import './redux/hello'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplayForm: false,
      allTasks: getCookie('tasks') !== "" ? JSON.parse(getCookie("tasks")) : [],
      task: null
    }
  }

  handleToggle = (value) => {
    this.setState({
      isDisplayForm: value
    })

    if(!value){
      this.setState({
        task: null
      })
    }
  }

  handleTaskList = (allTasks) => {
    this.setState({
      allTasks: allTasks
    })
  }

  handleEditTask = (task) => {
    this.setState({
      isDisplayForm: task != null,
      task: task
    })
  }

  handleSearchResults = (allTasks) => {
    this.setState({
      allTasks: allTasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title-project">&nbsp;</h2>
          <hr />
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {this.state.isDisplayForm ? <TaskForm onHandleToggle={this.handleToggle} task={this.state.task} allTasks={this.state.allTasks} onHandleTaskList={this.handleTaskList} visibility={this.state.isDisplayForm} onHandleEditTask={this.handleEditTask}/> : null}
            </div>
            <div className={this.state.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <div className="form-group">
                <TaskControl visibility={this.state.isDisplayForm} onHandleToggle={this.handleToggle} />
              </div>
              <div className="form-group">
                <div className="input-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <TaskSearch allTasks={this.state.allTasks}/>
                </div>
              </div>
              <TaskList allTasks={this.state.allTasks} onHandleTaskList={this.handleTaskList} onHandleEditTask={this.handleEditTask}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
