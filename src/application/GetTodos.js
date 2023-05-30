import TodosApiObj from "../infraestructure/TodosApi";

export default function getTodos([finished, expireDate]) {
  let parameters = "?";
  if (finished !== null) {
    parameters += "finished=" + finished + "&&";
  }
  if (expireDate !== null) {
    parameters += "expireDate=" + expireDate + "&&";
  }
  return TodosApiObj.getTodos(parameters);
}
