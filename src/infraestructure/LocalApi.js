function post(todo) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todo);
    }, 10);
  });
  return response;
}

function getTodos(todos) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 10);
  });
  return response;
}

function put(todo){
    const response = new Promise((resolve, reject) => {
        setTimeout(() => [
            resolve(todo)
        ], 10)
    })
    return response;
}

const LocalApiObj = {
  getTodos,
  post,
  put
};

export default LocalApiObj;
