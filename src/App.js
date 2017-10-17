import React, { Component } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSearch from './components/TaskSearch'
import TaskControl from './components/TaskControl'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title-project">&nbsp;</h2>
          <hr />
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm />
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="form-group">
                <TaskControl />
              </div>
              <div className="form-group">
                <div className="input-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <TaskSearch />
                </div>
              </div>
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
