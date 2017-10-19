import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { setCookie } from '../helper/functions'
import { connect } from 'react-redux'

class TaskList extends Component {
  constructor(props){
    super(props)
    this.state = {
      allTasks: this.props.allTasks
    }
  }

  handleDeleteTask = (id) => {
    // var removeTaskIndex = this.state.allTasks.map((task, index) => task.id).indexOf(id)
    var removeTaskIndex = this.state.allTasks.findIndex((task) => task.id === id)
    var allTasks = this.state.allTasks
    allTasks.splice(removeTaskIndex, 1)

    this.setState({
      allTasks: allTasks
    }, () => setCookie("tasks", JSON.stringify(allTasks), 1))
  }

  handleEditTask = (id) => {
    var editTaskIndex = this.state.allTasks.map((task, index) => task.id).indexOf(id)
    this.props.onHandleEditTask(this.state.allTasks[editTaskIndex])
  }

  render() {
    var showAllTasks = this.state.allTasks.map((task, index) => {
      return (
        <TaskItem key={index} index={task.id} name={task.name} status={task.status} onHandleDeleteTask={this.handleDeleteTask} onHandleEditTask={this.handleEditTask}/>
      )
    })

    return (
      this.state.allTasks.length > 0 ? 
      <table className="table table-bordered table-hover" >
        <thead>
          <tr>
            <th className="tb-id">Id</th>
            <th className="tb-name">Name</th>
            <th className="tb-status">Status</th>
            <th className="tb-action">Action</th>
          </tr>
        </thead>
        <tbody>
          {showAllTasks}
        </tbody>
      </table>
      : <p>Nothing to show here</p>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasks.allTasks
  }
}

export default connect(mapStateToProps, null)(TaskList)