import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import { FinishedTodos } from "./FinishedTodos";
import getAllTodos from "../application/GetAllTodos";
import createTodo from "../application/CreateTodo";
import modifyIsFinishedFromTodo from "./../application/ModifyIsFinishedFromTodo";

export function TodoPage() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then((data) => setTodos(data));
  }, []);

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleClick = () => {
    createTodo(todoText).then((data) => setTodos([...todos, data]));
  };

  function updateTodo(id, isFinished) {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((todo) => todo.id === id);
    updatedTodos[index].finished = isFinished;
    setTodos(updatedTodos);
  }
  const onChangeChecked = (id, text, isFinished) => {
    modifyIsFinishedFromTodo(id, text, isFinished);
    updateTodo(id, isFinished);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div id="todosDiv">
        <RemainingTodos todos={todos} onChangeChecked={onChangeChecked} />
        <FinishedTodos todos={todos} onChangeChecked={onChangeChecked} />
        <AddTodo
          handleChange={handleChange}
          handleClick={handleClick}
          todoText={todoText}
        />
      </div>
    </div>
  );
}
