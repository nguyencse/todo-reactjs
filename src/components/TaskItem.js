import React, { Component } from 'react'

class TaskItem extends Component {
  onHandleDeleteTask = (id) => {
    this.props.onHandleDeleteTask(id)
  }

  onHandleEditTask = (id) => {
    this.props.onHandleEditTask(id)
  }

  render() {
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>
          <input disabled type="text" className="form-control" value={this.props.name} />
        </td>
        <td>
          <select disabled className="form-control" value={this.props.status}>
            <option value="Hidden">Hidden</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </td>
        <td>
          <a className="btn btn-primary btn-sm btn-action" onClick={()=>this.onHandleEditTask(this.props.index)}>
            <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          </a>
          <a className="btn btn-danger btn-sm btn-action" onClick={() => this.onHandleDeleteTask(this.props.index)}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
          </a>
        </td>
      </tr>
    )
  }
}

export default TaskItem