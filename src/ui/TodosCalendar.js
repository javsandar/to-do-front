import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useEffect, useState } from "react";
import getTodos from "../application/GetTodos";
import substractOneDay from "../application/SubstractOneDay";
import dateParser from "../application/DateParser";
import parseToEvent from "../application/ParseToEvent";

export function TodosCalendar() {
  const [todos, setTodos] = useState([]);
  const [firstDateOfMonth, setFirstDateOfMonth] = useState("");
  const [lastDateOfMonth, setLastDateOfMonth] = useState("");

  const handleDatesSet = (arg) => {
    const fullFirstDate = new Date(arg.startStr.substring(0, 10));
    const fullLastDate = new Date(arg.endStr.substring(0, 10));
    const parsedFirstDate = dateParser(substractOneDay(fullFirstDate));
    const parsedLastDate = dateParser(substractOneDay(fullLastDate));
    setFirstDateOfMonth(parsedFirstDate);
    setLastDateOfMonth(parsedLastDate);
  };

  useEffect(() => {
    setTodos([]);
    const expireDate = ["gte:" + firstDateOfMonth, "lte:" + lastDateOfMonth];
    getTodos([null, expireDate]).then((data) => {
      data.map((todo) =>
        setTodos((prevTodos) => [...prevTodos, parseToEvent(todo)])
      );
    });
  }, [lastDateOfMonth, firstDateOfMonth]);

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
