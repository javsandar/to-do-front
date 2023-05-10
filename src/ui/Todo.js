import { useState } from "react";

export default function Todo({ id, text, isFinished, onChangeChecked }) {
  const [checked, setChecked] = useState(isFinished);
  return (
    <li
      style={
        checked
          ? {
              color: "rgba(255, 255, 255, 0.377)",
              textDecoration: "line-through",
            }
          : {}
      }
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={() => [
          setChecked(!checked),
          onChangeChecked(id, text, !checked),
        ]}
      />
      {text}
    </li>
  );
}
