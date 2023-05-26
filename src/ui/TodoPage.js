import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import { FinishedTodos } from "./FinishedTodos";
import getTodos from "../application/GetTodos";
import createTodo from "../application/CreateTodo";
import updateTodo from "../application/UpdateTodo";

export function TodoPage() {
  const [todoText, setTodoText] = useState("");
  const [expireDate, setExpireDate] = useState("");

  const [remainingTodos, setRemainingTodos] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  const [popUp, setPopUp] = useState(false);
  useEffect(() => {
    getTodos([false, null]).then((data) => setRemainingTodos(data));
    getTodos([true, null]).then((data) => setFinishedTodos(data));
  }, []);

  const todoTextHandler = (event) => {
    setTodoText(event.target.value);
  };

  const expireDateHandler = (event) => {
    setExpireDate(event.target.value);
  };

  const handleClick = () => {
    createTodo(todoText, expireDate).then((data) =>
      setRemainingTodos([...remainingTodos, data])
    );
  };

  function updateLists(data) {
    console.log(data);
    if (data.finished === false) {
      setFinishedTodos((todos) => todos.filter((todo) => todo.id !== data.id));
      setRemainingTodos((currentTodos) => [...currentTodos, data]);
    }
    if (data.finished === true) {
      setRemainingTodos((todos) => todos.filter((todo) => todo.id !== data.id));
      setFinishedTodos((currentTodos) => [...currentTodos, data]);
    }
  }

  const onChangeChecked = (id, text, finished, expireDate) => {
    updateTodo(id, text, finished, expireDate).then((data) => updateLists(data));
  };

  return (
    <div>
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
          handleClick={handleClick}
          todoTextHandler={todoTextHandler}
          expireDateHandler={expireDateHandler}
          todoText={todoText}
          expireDate={expireDate}
          popUp={popUp}
          setPopUp={setPopUp}
        />
      </div>
    </div>
  );
}
