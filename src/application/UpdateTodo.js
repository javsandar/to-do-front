import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function updateTodo(id, text, isFinished) {
  return TodoAdapterObj.generateBodyForPut(id, text, isFinished);
}
