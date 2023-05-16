import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import { FinishedTodos } from "./FinishedTodos";
import localGetTodos from "../application/LocalGetTodos";
import createTodo from "../application/CreateTodo";
import updateTodo from "../application/UpdateTodo";

export function TodoPage() {
  const [todoText, setTodoText] = useState("");
  const [remainingTodos, setRemainingTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  useEffect(() => {
    localGetTodos(false).then((data) => setRemainingTodos(data));
    localGetTodos(true).then((data) => setFinishedTodos(data));
  }, []);

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleClick = (e) => {
    createTodo(todoText).then((data) =>
      setRemainingTodos([...remainingTodos, data])
    );
  };

  function updateLists(data) {
    if (data.finished === false) {
      setFinishedTodos((todos) => todos.filter((todo) => todo.id !== data.id))
      setRemainingTodos([...remainingTodos, data])
    }
    if (data.finished === true) {
      setRemainingTodos((todos) => todos.filter((todo) => todo.id !== data.id))
      setFinishedTodos([...finishedTodos, data])
    }
  }

  const onChangeChecked = (id, text, finished) => {
    updateTodo(id, text, finished).then((data) => updateLists(data));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div id="todosDiv">
        <RemainingTodos
          todos={remainingTodos}
          onChangeChecked={onChangeChecked}
        />
        <FinishedTodos
          todos={finishedTodos}
          onChangeChecked={onChangeChecked}
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
