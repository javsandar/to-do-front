import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

function validateInitialGet(request) {
    return request.then((data) => data.length === 0) ? request : false;
}
function validateTodoText(text) {
  if(text !== '')
    return TodoAdapterObj.generateBodyForPost(text);

}
const ValidationsObj = {
  validateInitialGet,
  validateTodoText
}

export default ValidationsObj;