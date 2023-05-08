import TodosApi from "../infraestructure/TodosApi";

function getAll() {
  return TodosApi.getAll().then((data) => data.length === 0)
    ? TodosApi.getAll()
    : false;
}

function getRemaining() {
  return TodosApi.getRemaining().then((data) => data.length === 0)
    ? TodosApi.getRemaining()
    : false;
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

const ApiValidationObject = {
  getAll,
 getRemaining,
  post,
};

export default ApiValidationObject;
