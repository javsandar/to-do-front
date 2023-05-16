import Todo from "./Todo";

export function FinishedTodos({ todos, onChangeChecked }) {
  return (
    <div id="finishedTodosDiv">
      <h2>Finished</h2>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isFinished={todo.finished}
              onChangeChecked={onChangeChecked}
            />
          );
        })}
      </ul>
    </div>
  );
}
