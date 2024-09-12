import React from "react";
import Notes from "./Notes";
import TodoList from "./TodoList";
import Login from "./Login";

var isLoggedIn = false;

function App() {
  return <div>{isLoggedIn ? <TodoList /> : <Login />}</div>;
}

export default App;
