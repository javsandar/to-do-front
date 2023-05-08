export function FinishedTodos({ todos, handleCheckbox }) {
  return (
    <div id="finishedTodosDiv">
      <h2>Finished Todos</h2>
      <ul>
        {todos
          .filter((todo) => todo.finished)
          .map((finishedTodo) => {
            return (
              <li className="finishedLi" key={finishedTodo.id}>
                <input type="checkbox" onChange={handleCheckbox}></input>
                {finishedTodo.text}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
