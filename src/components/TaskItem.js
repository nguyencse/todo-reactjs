import React, { Component } from 'react'

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.index + 1}</td>
        <td>
          <input type="text" className="form-control" required="required" defaultValue={this.props.name} />
        </td>
        <td>
          <select className="form-control" disabled value={this.props.status}>
            <option value="Hidden" className="hidden">Hidden</option>
            <option value="Pending" className="pending">Pending</option>
            <option value="Completed" className="completed">Completed</option>
          </select>
        </td>
        <td></td>
      </tr>
    )
  }
}

export default TaskItem