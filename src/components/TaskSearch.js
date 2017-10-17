import React, { Component } from 'react'

class TaskSearch extends Component {
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Keyword..." />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">
            <span className="glyphicon glyphicon-search" /></button>
        </span>
      </div>
    )
  }
}

export default TaskSearch