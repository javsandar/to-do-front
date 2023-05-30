import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function updateTodo(
  id,
  text,
  finished,
  creationDate,
  expireDate
) {
  return TodoAdapterObj.generateBodyForPut(
    id,
    text,
    finished,
    creationDate,
    expireDate
  );
}
