export function RemainingTodos({ todos, handleCheckbox}) {
    return (
        <div id="remainingTodosDiv">
        <h2>Remaining Todos</h2>
        <ul>

            {todos.map((todo) => {
                return (<li key={todo.id}>
                            <input type="checkbox" onChange={handleCheckbox}></input>{todo.text}
                        </li>);
            })}
        </ul>
        </div>
    );
}
