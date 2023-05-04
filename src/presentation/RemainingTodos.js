export function RemainingTodos({todos}) {
    return (
        <ul>
            {todos.map((todo) => {
                return <li key={todo.id}>{todo.text}</li>;
            })}
        </ul>
    );
}
