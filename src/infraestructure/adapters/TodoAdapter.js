import ApiObj from "../TodosApi";

function generateBodyForPost(text) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
      finished: false,
    }),
  };
  console.log(requestOptions)
  return ApiObj.post(requestOptions);
}


function generateBodyForPut(id, text, isFinished) {
  const requestOptions = {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
      finished: isFinished,
    }),
  };
  return ApiObj.put(requestOptions, id);
}

const TodoAdapterObj = {
  generateBodyForPost,
  generateBodyForPut,
};

export default TodoAdapterObj;
