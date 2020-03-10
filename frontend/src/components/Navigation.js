import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link class="navbar-brand" to="/">
            NotesApp
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
               <Link className="nav-link" to="/">Notes</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="create">Create note</Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="user">Create user</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
