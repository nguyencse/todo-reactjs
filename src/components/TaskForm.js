import React, { Component } from 'react'

class TaskForm extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading clearfix">
          <h4 className="panel-title pull-left">New Task</h4>
          <button type="button" className="pull-right btn btn-warning btn-circle"><i className="glyphicon glyphicon-remove"></i></button>
        </div>
        <div className="panel-body">
          <form method="POST">
            <div className="form-group">
              <label>Task name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Status</label>
              <select className="form-control" required="required">
                <option value={0}>Hidden</option>
                <option value={1}>Pending</option>
                <option value={2}>Completed</option>
              </select>
            </div>
            <div className="form-group">
              <div className="button-group-center">
                <button type="button" className="btn btn-warning btn-item">
                  <span className="glyphicon glyphicon-plus" /> Save</button>
                <button type="button" className="btn btn-danger btn-item">
                  <span className="glyphicon glyphicon-remove" /> Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TaskForm