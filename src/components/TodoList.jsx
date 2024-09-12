import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Button from "./Button";
import TodoItem from "./TodoItem";

function TodoList() {
  const [item, setItem] = useState(""); // State for the current input
  const [items, setItems] = useState([]); // State for the list of to-do items

  function handleChange(event) {
    setItem(event.target.value); // Update the current input value
  }

  function submitTodoItem(event) {
    event.preventDefault();
    if (item.trim() !== "") {
      // Prevent adding empty items
      setItems((prevItems) => [...prevItems, { title: item }]); // Add new item to the list
    }
    setItem(""); // Clear the input field after submission
  }

  return (
    <div>
      <Header text="To-Do" />
      <div className="todo-container">
        <form onSubmit={submitTodoItem}>
          <Input
            type="text"
            placeholder="What to do?"
            value={item} // Use the current input state
            onChange={handleChange}
          />
          <Button type="submit" text="Add" />
        </form>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem key={index} title={todoItem.title} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
