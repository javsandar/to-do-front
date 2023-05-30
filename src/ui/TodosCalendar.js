import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import getTodos from "../application/GetTodos";
import substractOneDay from "../application/SubstractOneDay";

export function TodosCalendar() {
  const [todos, setTodos] = useState([]);
  const [lastDateOfMonth, setLastDateOfMonth] = useState("");

  const handleDatesSet = (arg) => {
    const fullDate = new Date(arg.endStr.substring(0, 10));
    const parsedDate = substractOneDay(fullDate).toISOString().substring(0, 10);
    setLastDateOfMonth(parsedDate);
  };

  useEffect(() => {
    setTodos([]);
    const dateWithoutDay = lastDateOfMonth.substring(0, 8);
    const lastDayOfMonth = lastDateOfMonth.substring(8, 10);
    for (let i = 1; i < lastDayOfMonth; i++) {
      let expireDate = dateWithoutDay + i;
      if (i < 10) {
        expireDate = dateWithoutDay + "0" + i;
      }
      getTodos([null, expireDate]).then((data) => {
        if (data.length > 0) {
          data.map((todo) =>
            setTodos((prevTodos) => [
              ...prevTodos,
              {
                id: todo.id,
                title: todo.text,
                finished: todo.finished,
                creationDate: todo.creationDate,
                date: todo.expireDate,
              },
            ])
          );
        }
      });
    }
  }, [lastDateOfMonth]);

  return (
    <div className="calendarDiv">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={todos}
        datesSet={(arg) => {
          handleDatesSet(arg);
        }}
        showNonCurrentDates={false}
      ></FullCalendar>
    </div>
  );
}
