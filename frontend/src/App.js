import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNode from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <Navigation />

      <Route path="/" exact component={NotesList} />
      <Route path="/edit/:id" component={CreateNode} />
      <Route path="/create" component={CreateNode} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
