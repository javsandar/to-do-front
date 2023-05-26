import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function createTodo(text, expireDate) {
  console.log(TodoAdapterObj.generateBodyForPost(text, expireDate))
    return TodoAdapterObj.generateBodyForPost(text, expireDate);
}
