import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function createTodo(text) {
  return TodoAdapterObj.generateBodyForPost(text);
}
