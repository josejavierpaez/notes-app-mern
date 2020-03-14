import React, { Component } from "react";
import axios from "axios";
export default class CreateUser extends Component {
  state = {
    users: [],
    userName: ""
  };

  async componentDidMount() {
    const res = await axios.get("http://localhost:4000/api/users/");
    this.setState({ users: res.data.body });
    // this.state.users.body.map(user => {
    //   return console.log(user);
    // });
  }
  onChangeUserName = (event) => {
        console.log(event.target.value);
        this.setState({
            userName: event.target.value
        })
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Create New User</h3>
            <form>
              <div className="form-group" onChange={this.onChangeUserName}>
                <input type="text" className="form-control" />
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map(user => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
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
