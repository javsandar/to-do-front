import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function updateTodo(id, text, finished){

    return TodoAdapterObj.generateBodyForPut(id, text, finished)
}