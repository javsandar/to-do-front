import TodosApi from "../TodosApi";

function generateBodyForPost(text) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
      isFinished: false,
    }),
  };

  return TodosApi.post(requestOptions);
}

function generateBodyForPut(id, text, isFinished) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      text: text,
      isFinished: isFinished,
    }),
  };

  return TodosApi.put(requestOptions, id);
}

const TodoAdapterObj = {
  generateBodyForPost,
  generateBodyForPut,
};

export default TodoAdapterObj;
