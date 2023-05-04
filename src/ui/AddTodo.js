export function AddTodo(props) {
    return (
        <div>
            <input
                value={props.todoText}
                onChange={props.handleChange}
                type="text"
                placeholder="Add todo"
            ></input>
            <button onClick={props.handleClick}>Add</button>
        </div>
    );
}
