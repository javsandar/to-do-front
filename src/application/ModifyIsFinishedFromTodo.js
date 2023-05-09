import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function modifyIsFinishedFromTodo(id, isFinished) {
  return TodoAdapterObj.generateBodyForPut(id, isFinished);
}
