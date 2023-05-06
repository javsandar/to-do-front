export function RemainingTodos({ todos, handleCheckbox}) {
    return (
        <ul>
            {todos.map((todo) => {
                return (<li key={todo.id}>
                            <input type="checkbox" onChange={handleCheckbox}></input>{todo.text}
                        </li>);
            })}
        </ul>
    );
}
