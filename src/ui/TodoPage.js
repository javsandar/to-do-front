import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import TodosAPI from "../infraestructure/TodosAPI";

export function TodoPage() {
    const [todoText, setTodoText] = useState("")
    const [todos, setTodos] = useState([])

    function loadTodos(){TodosAPI.get(setTodos)}

    function postTodo(){TodosAPI.post(setTodos, todoText)}

    useEffect(() => {loadTodos()},[]);
    
    const handleChange = (event) => {setTodoText(event.target.value)}

    const handleClick = () => {postTodo()}

    return (
        <div>
            <h1>Remaining To-dos</h1>
            <RemainingTodos todos={todos} />
            <AddTodo handleChange={handleChange} handleClick={handleClick} todoText={todoText}/>
        </div>
    )
}