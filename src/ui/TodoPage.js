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
    ApiValidation.getAll().then((todos) => setTodos(todos));
  }
  function loadRemainingTodos() {
    ApiValidation.getRemaining().then((remainingTodos) =>
      setRemainingTodos(remainingTodos)
    );
  }

  function postTodo() {
    ApiValidation.post(todoText).then((todo) =>
      setTodos([...todos, todo], setRemainingTodos([...remainingTodos, todo]))
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

  const handleCheckbox = () => {};
  return (
    <div>
      <h1>Todo List</h1>
      <div id="todosDiv">
        <RemainingTodos
          todos={remainingTodos}
          handleCheckbox={handleCheckbox}
        />
        <FinishedTodos todos={todos} handleCheckbox={handleCheckbox} />
        <AddTodo
          handleChange={handleChange}
          handleClick={handleClick}
          todoText={todoText}
        />
      </div>
    </div>
  );
}
