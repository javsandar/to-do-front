import ApiObj from "../TodosApi";

function generateBodyForPost(text, expireDate) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
      finished: false,
      expireDate: expireDate,
    }),
  };
  console.log(requestOptions);
  return ApiObj.post(requestOptions);
}

function generateBodyForPut(id, text, isFinished, expireDate) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: text,
      finished: isFinished,
      expireDate: expireDate,
    }),
  };
  return ApiObj.put(requestOptions, id);
}

const TodoAdapterObj = {
  generateBodyForPost,
  generateBodyForPut,
};

export default TodoAdapterObj;
