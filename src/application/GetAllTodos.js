import TodosApi from "../infraestructure/TodosApi";
import ValidationsObj from "./Validations";

export default function GetAllTodos() {
    return ValidationsObj.validateInitialGet(TodosApi.getAll());
  }