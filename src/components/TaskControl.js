import React, { Component } from 'react'

class TaskControl extends Component {
  render() {
    return (
      <button type="button" className="btn btn-primary">
      <span className="glyphicon glyphicon-plus" /> Add Task</button>
    )
  }
}

export default TaskControl