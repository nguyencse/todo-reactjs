import React, { Component } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskSearch from './components/TaskSearch'
import TaskControl from './components/TaskControl'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplayForm: true,
      mainWidth: "col-xs-8 col-sm-8 col-md-8 col-lg-8"
    }
  }

  handleToggle = (value) => {
    if (value === true) {
      this.setState({
        isDisplayForm: value,
        mainWidth: "col-xs-8 col-sm-8 col-md-8 col-lg-8"
      })
    }else{
      this.setState({
        isDisplayForm: value,
        mainWidth: "col-xs-12 col-sm-12 col-md-12 col-lg-12"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title-project">&nbsp;</h2>
          <hr />
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              {this.state.isDisplayForm ? <TaskForm visibility={this.state.isDisplayForm} onHandleToggle={this.handleToggle} /> : null}
            </div>
            <div className={this.state.mainWidth}>
              <div className="form-group">
                <TaskControl visibility={this.state.isDisplayForm} onHandleToggle={this.handleToggle}/>
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
