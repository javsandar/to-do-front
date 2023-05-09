import TodosAPIObject from './../infraestructure/TodosApi';

export default function getAllTodos() {
  return TodosAPIObject.getAll();
}
