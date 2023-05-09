import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function CreateTodo(text) {
  return TodoAdapterObj.generateBodyForPost(text);
}
