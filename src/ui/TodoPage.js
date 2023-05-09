import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import { FinishedTodos } from "./FinishedTodos";
import GetRemainingTodos from "../application/GetRemainingTodos";
import GetAllTodos from "../application/GetAllTodos";
import CreateTodo from "./../application/CreateTodo";
import ModifyIsFinishedFromTodo from "./../application/ModifyIsFinishedFromTodo";

export function TodoPage() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [remainingTodos, setRemainingTodos] = useState([]);

  function loadAllTodos() {
    return GetAllTodos().then((data) => setTodos(data));
  }
  function loadRemainingTodos() {
    return GetRemainingTodos().then((data) => setRemainingTodos(data));
  }

  function postTodo() {
    CreateTodo(todoText).then((data) =>
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

  async function onChangeChecked(id, text, isFinished) {
    ModifyIsFinishedFromTodo(id, text, isFinished);
    await loadAllTodos();
    await loadRemainingTodos();
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div id="todosDiv">
        <RemainingTodos
          todos={remainingTodos}
          onChangeChecked={onChangeChecked}
        />
        <FinishedTodos 
          todos={todos} 
          onChangeChecked={onChangeChecked} />
        <AddTodo
          handleChange={handleChange}
          handleClick={handleClick}
          todoText={todoText}
        />
      </div>
    </div>
  );
}
