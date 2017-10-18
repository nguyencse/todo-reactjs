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

    var allTasks = this.props.allTasks
    var id = this.props.task != null ? this.props.task.id : allTasks.length > 0 ? allTasks[allTasks.length - 1].id + 1 : 1

    var newTask = {
      id: id,
      name: taskName,
      status: taskStatus
    }
    
    if(this.props.task != null){
      var taskEditIndex = allTasks.map((task, index)=>task.id).indexOf(id)
      allTasks[taskEditIndex] = newTask
    }else{
      allTasks.push(newTask)
    }
    setCookie("tasks", JSON.stringify(allTasks), 1)

    this.props.onHandleTaskList(allTasks)
    this.onCloseForm()
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading clearfix">
          <h4 className="panel-title pull-left">{this.props.task != null ? "Edit Task" : "New Task"}</h4>
          <button type="button" className="pull-right btn btn-warning btn-circle" onClick={this.onCloseForm}><i className="glyphicon glyphicon-remove"></i></button>
        </div>
        <div className="panel-body">
          <form method="POST" onSubmit={this.onSumitForm}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" ref="taskName" className="form-control" placeholder="Enter your task here ..." required defaultValue={this.props.task != null ? this.props.task.name : ""}/>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select className="form-control" ref="status" defaultChecked={this.props.task != null ? this.props.task.status : ""}>
                <option value="Hidden">Hidden</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="form-group">
              <div className="button-group-center">
                <button type="submit" className="btn btn-warning btn-sm btn-item" id="btn-save" title="Save">
                  <span className="glyphicon glyphicon-cloud-upload" /></button>
                <button type="reset" className="btn btn-danger btn-sm btn-item" id="btn-reset" title="Reset">
                  <span className="glyphicon glyphicon-refresh" /></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskForm