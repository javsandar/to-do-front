import TodosApi from "../infraestructure/TodosApi";

// function modifyIsFinished(id) {

// }
function validate(request) {
  return request.then((data) => data.length === 0) ? request : false;
}

function getAll() {
  return validate(TodosApi.getAll());
}

function getRemaining() {
  return validate(TodosApi.getRemaining());
}

function post(todoText) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: todoText,
      isFinished: false,
    }),
  };
  return TodosApi.post(requestOptions);
}

function put(todoText, id, finished) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      text: todoText,
      isFinished: finished,
    }),
  };
  return TodosApi.put(requestOptions, id);
}

const ApiValidationObject = {
  put,
  getAll,
  getRemaining,
  post,
};

export default ApiValidationObject;
