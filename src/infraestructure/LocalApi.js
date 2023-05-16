function post(todo) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todo);
    }, 500);
  });
  return response;
}

function getTodos(todos) {
  const response = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
  return response;
}

function put(todo){
    const response = new Promise((resolve, reject) => {
        setTimeout(() => [
            resolve(todo)
        ], 1000)
    })
    console.log(response)
    return response;
}

const LocalApiObj = {
  getTodos,
  post,
  put
};

export default LocalApiObj;
