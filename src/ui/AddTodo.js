import AddPopup from "./AddPopup";

export function AddTodo({
  handleClick,
  todoTextHandler,
  expireDateHandler,
  todoText,
  expireDate,
  popUp,
  setPopUp,
}) {
  return (
    <div id="addTodoDiv">
      {popUp && (
        <AddPopup
          handleClick={handleClick}
          todoTextHandler={todoTextHandler}
          expireDateHandler={expireDateHandler}
          todoText={todoText}
          expireDate={expireDate}
          popUp={popUp}
          setPopUp={setPopUp}
        />
      )}
      <button onClick={() => setPopUp(!popUp)}>Add todo</button>
    </div>
  );
}
