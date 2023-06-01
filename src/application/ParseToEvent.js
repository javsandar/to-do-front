export default function parseToEvent(todo){
    return {
        id: todo.id,
        title: todo.text,
        finished: todo.finished,
        creationDate: todo.creationDate,
        date: todo.expireDate,
      }
}