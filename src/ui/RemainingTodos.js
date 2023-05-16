import Todo from "./Todo";

export function RemainingTodos({ todos, onChangeChecked }) {
  return (
    <div id="remainingTodosDiv">
      <h2>Remaining</h2>
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
