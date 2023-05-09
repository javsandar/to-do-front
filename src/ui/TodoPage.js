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
  let [control, setControl] = useState(false); /* booleano o int? */

  function postTodo() {
    createTodo(todoText).then((data) => setTodos([...todos, data]));
  }

  useEffect(() => {
    getAllTodos().then((data) => setTodos(data));
  }, [control]);

  const handleChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleClick = () => {
    postTodo();
  };

  async function onChangeChecked(id, text, isFinished) {
    await modifyIsFinishedFromTodo(id, text, isFinished);
    setControl(!control);
  }

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
