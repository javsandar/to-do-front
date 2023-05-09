async function put(requestOptions, id) {
  const response = await fetch("/todos/" + id, requestOptions);
  return response.json();
}

async function getAll() {
  const response = await fetch("/todos");
  return response.json();
}

async function getRemaining() {
  const response = await fetch("/todos?finished=false");
  return response.json();
}

async function post(requestOptions) {
  const response = await fetch("/todos", requestOptions);
  return response.json();
}

const TodosApiObj = {
  put,
  getAll,
  getRemaining,
  post,
};

export default TodosApiObj;
