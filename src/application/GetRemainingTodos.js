import TodosApi from "../infraestructure/TodosApi";
import ValidationsObj from "./Validations";

export default function GetRemainingTodos() {
    return ValidationsObj.validateInitialGet(TodosApi.getRemaining());
  }