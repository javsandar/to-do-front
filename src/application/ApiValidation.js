import TodosApi from "../infraestructure/TodosApi";

function get() {
    return TodosApi.get()
}

function post(todoText) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            text: todoText,
            isFinished: false
        })
    };
    return TodosApi.post(requestOptions)
}

export default { get, post };