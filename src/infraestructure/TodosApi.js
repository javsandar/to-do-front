function get(){
    return fetch('/todos?finished=false')
    .then((response) => response.json())
    .then((data) => data)
}

function post(requestOptions){
    return fetch('/todos', requestOptions)
    .then((response)=> response.json())
    .then((data) => data)
}
export default { get, post };