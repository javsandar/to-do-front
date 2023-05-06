function get(setTodos){
    fetch('/todos?finished=false')
    .then((response) => response.json())
    .then((data) => setTodos(data))
}

function post(setTodos, todoText){
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text: todoText,
            isFinished: false
        })
    };
    fetch('/todos', requestOptions)
    .then(response => response.json())
    .then(data => {
        setTodos((todos) => [...todos, data])
    })
}

export default { get, post };