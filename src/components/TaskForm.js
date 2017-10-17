import React, { Component } from 'react'
import { setCookie } from "../helper/functions"

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisplayForm: this.props.visibility
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    }, () => this.props.onHandleToggle(this.state.isDisplayForm))
  }

  onSumitForm = (e) => {
    e.preventDefault()
    var taskName = this.refs.taskName.value
    var taskStatus = this.refs.status.value
    this.refs.taskName.value = ""

    var newTask = {
      name: taskName,
      status: taskStatus
    }
    var allTasks = this.props.allTasks
    allTasks.push(newTask)
    setCookie("tasks", JSON.stringify(allTasks), 1)

    this.props.onHandleTaskList(allTasks)
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading clearfix">
          <h4 className="panel-title pull-left">New Task</h4>
          <button type="button" className="pull-right btn btn-warning btn-circle" onClick={this.onCloseForm}><i className="glyphicon glyphicon-remove"></i></button>
        </div>
        <div className="panel-body">
          <form method="POST" onSubmit={this.onSumitForm}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" ref="taskName" className="form-control" placeholder="Enter your task here ..." />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select className="form-control" ref="status">
                <option value="Hidden">Hidden</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <div className="button-group-center">
                <button type="submit" className="btn btn-warning btn-item">
                  <span className="glyphicon glyphicon-plus" /> Save</button>
                <button type="reset" className="btn btn-danger btn-item">
                  <span className="glyphicon glyphicon-remove" /> Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskForm