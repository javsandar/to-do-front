async function getTodos() {
  const response = await fetch("/todos");
  return response.json();
}

async function put(requestOptions, id) {
  const response = await fetch("/todos/" + id, requestOptions);
  return response.json();
}

async function post(requestOptions) {
  const response = await fetch("/todos", requestOptions);
  return response.json();
}

const TodosApiObj = {
  getTodos,
  post,
  put
};

export default TodosApiObj;
