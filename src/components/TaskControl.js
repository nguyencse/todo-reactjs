import React, { Component } from 'react'

class TaskControl extends Component {
  onCloseForm = () => {
    this.props.onHandleToggle(!this.props.visibility)
  }

  render() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onCloseForm}>
        <span className="glyphicon glyphicon-plus" /> New Task</button>
    )
  }
}

export default TaskControl