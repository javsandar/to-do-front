export default function AddPopup({
  handleClick,
  todoTextHandler,
  expireDateHandler,
  todoText,
  expireDate,
  popUp,
  setPopUp,
}) {
  return (
    <div id="popupDiv">
      <p className="todoInput">
        Text:{" "}
        <input
          type="text"
          placeholder="Insert task name"
          value={todoText}
          onChange={todoTextHandler}
        ></input>
      </p>
      <p className="todoInput">
        Expire Date:{" "}
        <input
          type="text"
          placeholder="yyyy-mm-dd"
          value={expireDate}
          onChange={expireDateHandler}
        ></input>
      </p>
      <button onClick={handleClick}>Confirm</button>
      <button onClick={() => setPopUp(!popUp)}>Close</button>
    </div>
  );
}
