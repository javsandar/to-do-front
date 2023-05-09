import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function ModifyIsFinishedFromTodo(id, isFinished) {
    return TodoAdapterObj.generateBodyForPut(id, isFinished);
  }