import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import ApiValidation from "../application/ApiValidation";
import { FinishedTodos } from "./FinishedTodos";

export function TodoPage() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [remainingTodos, setRemainingTodos] = useState([]);

  function loadAllTodos() {
    ApiValidation.getAll().then((data) => setTodos(data));
  }
  function loadRemainingTodos() {
    ApiValidation.getRemaining().then((data) => setRemainingTodos(data));
  }
  console.log(todos)

  function postTodo() {
    ApiValidation.post(todoText).then((data) =>
      setTodos([...todos, data], setRemainingTodos([...remainingTodos, data]))
    );
  }

  useEffect(() => {
    loadRemainingTodos();
    loadAllTodos();
  }, []);

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleClick = () => {
    postTodo();
  };

  
  return (
    <div>
      <h1>Todo List</h1>
      <div id="todosDiv">
        <RemainingTodos
          todos={remainingTodos}
        />
        <FinishedTodos
          todos={todos}
        />
        <AddTodo
          handleChange={handleChange}
          handleClick={handleClick}
          todoText={todoText}
        />
      </div>
    </div>
  );
}
