import React, { Component } from 'react'

class TaskSearch extends Component {

  render() {
    return (
      <div className="input-group">
        <input type="text" ref="taskSearch" className="form-control" placeholder="Search task ..." />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">
            <span className="glyphicon glyphicon-search" /></button>
        </span>
      </div>
    )
  }
}

export default TaskSearch