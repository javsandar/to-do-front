async function put(requestOptions, id) {
    const response = await fetch("/todos/"+ id, requestOptions)
    const data = await response.json()
    return data;
}

async function getAll() {
  const response = await fetch("/todos")
  const data = await response.json()
  return data;
}


async function getRemaining() {
  const response = await fetch("/todos?finished=false")
  const data = await response.json()
  return data;
}

async function post(requestOptions) {
  const response = await fetch("/todos", requestOptions)
  const data = await response.json()
  return data;
}

const TodosAPIObject = {
  put,
  getAll,
  getRemaining,
  post,
};

export default TodosAPIObject;
