import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2 className="title-project">&nbsp;</h2>
          <hr />
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="form-group">
                <button type="button" className="btn btn-primary">
                  <span className="glyphicon glyphicon-plus" /> Add Task</button>
              </div>
              <div className="form-group">
                <div className="input-group col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <input type="text" className="form-control" placeholder="Keyword..." />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                      <span className="glyphicon glyphicon-search" /></button>
                  </span>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
