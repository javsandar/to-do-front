import { useState } from "react";

export default function Todo({ id, text, isFinished, onChangeChecked }) {
  const [isChecked, setIsChecked] = useState(isFinished);
  return (
    <li
      style={
        isChecked
          ? {
              color: "rgba(255, 255, 255, 0.377)",
              textDecoration: "line-through",
            }
          : {}
      }
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => [
          setIsChecked(!isChecked),
          onChangeChecked(id, text, !isChecked),
        ]}
      />
      {text}
    </li>
  );
}
