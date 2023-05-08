import { useState } from "react";

export default function Todo({ key, id, text, isFinished }) {
  const [checked, setChecked] = useState(isFinished);
  isFinished = checked;
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
      key={key}
    >
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => [setChecked(!checked)]}
      />
      {text} estado:{isFinished.toString()}
    </li>
  );
}
