import LocalApiObj from "../LocalApi";
import { v4 as uuidv4 } from "uuid";

function generateListForGetRemaining() {
  const todos = [
    {
      id: "a1d7429d-98e2-47a7-8e22-9eb6b6d0cba4",
      text: "Tarea 1",
      finished: false,
    },
    {
      id: "7b0f3242-7708-4740-a711-1f77e926cf77",
      text: "Tarea 2",
      finished: false,
    },
    {
      id: "b9073136-b98d-4354-883f-d3c100261680",
      text: "Tarea 3",
      finished: false,
    },
  ];
  
  return LocalApiObj.getTodos(todos);
}

function generateListForGetFinished() {
  const todos = [
    {
      id: "7a3797d8-359f-4ebc-82cb-8e68a66d15c3",
      text: "Tarea 4",
      finished: true,
    },
    {
      id: "7260b7bb-0819-4328-a629-409066aff2d4",
      text: "Tarea 5",
      finished: true,
    },
    {
      id: "a256e5ad-be53-4970-8483-b42aadc88f4b",
      text: "Tarea 6",
      finished: true,
    },
  ];
  return LocalApiObj.getTodos(todos);
}

function generateBodyForPost(text) {
  const todo = { id: uuidv4(), text: text, finished: false };
  return LocalApiObj.post(todo);
}

function generateBodyForPut(id, text, finished) {
  const todo = {id: id, text: text, finished: finished}
  return LocalApiObj.put(todo);
}

const TodoAdapterObj = {
  generateListForGetRemaining,
  generateListForGetFinished,
  generateBodyForPost,
  generateBodyForPut,
};

export default TodoAdapterObj;
