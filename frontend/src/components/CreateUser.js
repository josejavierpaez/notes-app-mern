import React, { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component {
  state = {
    users: [],
    userName: ""
  };

  async componentDidMount() {
    this.getUsers();
    console.log(this.state.users);
  }
  onChangeUserName = event => {
    console.log(event.target.value);
    this.setState({
      userName: event.target.value
    });
  };

  getUsers = async () => {
    const res = await axios.get("http://localhost:4000/api/users/");
    this.setState({ users: res.data.body });
  };

  onSubmit = async event => {
    event.preventDefault();
    await axios.post("http://localhost:4000/api/users/", {
      userName: this.state.userName
    });
    this.setState({
      userName: ""
    });
    this.getUsers();
  };

  deleteUser = async id => {
    await axios.delete("http://localhost:4000/api/users/" + id);
    this.getUsers();
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.onChangeUserName}
                  value={this.state.userName}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map(user => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}
              >
                {user.userName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
