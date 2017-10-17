import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {
  render() {
    var showAllTasks = this.props.allTasks.map((task, index) => {
      return (
        <TaskItem index={index} name={task.name} status={task.status}/>
      )
    })

    return (
      <table className="table table-bordered table-hover" >
        <thead>
          <tr>
            <th className="tb-order">Order</th>
            <th className="tb-name">Name</th>
            <th className="tb-status">Status</th>
            <th className="tb-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {showAllTasks}
        </tbody>
      </table>
    )
  }
}

export default TaskList