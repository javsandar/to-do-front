import TodosApiObj from "../infraestructure/TodosApi";

export default function getTodos([finished, [expireDate1, expireDate2]]) {
  let parameters = "?";
  if (finished !== null) {
    parameters += "finished=" + finished + "&";
  }
  if (expireDate1 !== null) {
    parameters += "expireDate=" + expireDate1 + "&";
  }
  if (expireDate2 !== null) {
    parameters += "expireDate=" + expireDate2 + "&";
  }
  return TodosApiObj.getTodos(parameters);
}
