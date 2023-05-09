function put(requestOptions, id) {
  return fetch("/todos/"+id, requestOptions)
    .then((response) => response.json())
    .then((data) => data);
}

function getAll() {
  return fetch("/todos")
    .then((response) => response.json())
    .then((data) => data);
}

function getRemaining() {
  return fetch("/todos?finished=false")
    .then((response) => response.json())
    .then((data) => data);
}

function post(requestOptions) {
  return fetch("/todos", requestOptions)
    .then((response) => response.json())
    .then((data) => data);
}

const TodosAPIObject = {
  put,
  getAll,
  getRemaining,
  post,
};

export default TodosAPIObject;
