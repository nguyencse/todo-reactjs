import React, { Component } from 'react'

class TaskList extends Component {
  render() {
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="tb-order">Order</th>
            <th className="tb-name">Name</th>
            <th className="tb-status">Status</th>
            <th className="tb-action">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" className="form-control" required="required" />
            </td>
            <td>
              <select className="form-control" required="required">
                <option value={0}>Hidden</option>
                <option value={1}>Pending</option>
                <option value={2}>Completed</option>
              </select>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TaskList