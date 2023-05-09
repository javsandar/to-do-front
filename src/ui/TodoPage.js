import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import ApiValidation from "../application/ApiValidation";
import { FinishedTodos } from "./FinishedTodos";

export function TodoPage() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [remainingTodos, setRemainingTodos] = useState([]);

  console.log(todos)
  function loadAllTodos() {
    ApiValidation.getAll().then((data) => setTodos(data));
  }
  function loadRemainingTodos() {
    return ApiValidation.getRemaining().then((data) => setRemainingTodos(data));
  }

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
  
  function getTodoProps(id, text, isFinished) {
    const props = [id, text, !isFinished]
    return props
  }

  const onChangeChecked = () => {
    const props = getTodoProps;
    ApiValidation.put(props[0], props[1], props[2]).then(loadRemainingTodos());
  }
  return (
    <div>
      <h1>Todo List</h1>
      <div id="todosDiv">
        <RemainingTodos
          todos={remainingTodos}
          getTodoProps={getTodoProps}
          onChangeChecked={onChangeChecked}
        />
        <FinishedTodos
          todos={todos}
          getTodoProps={getTodoProps}
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
