import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function createTodo(text, expireDate) {
  return TodoAdapterObj.generateBodyForPost(text, expireDate);
}
