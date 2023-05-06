import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import ApiValidation from "../application/ApiValidation";

export function TodoPage() {
    const [todoText, setTodoText] = useState("")
    const [todos, setTodos] = useState([])
    console.log(todos)
    function loadTodos() { 
        ApiValidation.get().then((todos) => setTodos(todos)) 
    }

    function postTodo() { 
        ApiValidation.post(todoText)
        .then((todo) => setTodos([...todos, todo])) 
    }

    useEffect(() => { 
        loadTodos() 
    }, []);

    const handleChange = (event) => { setTodoText(event.target.value) }

    const handleClick = () => { postTodo() }

    const handleCheckbox = () => {
        
    }
    return (
        <div>
            <h1>Remaining To-dos</h1>
            <RemainingTodos todos={todos} handleCheckbox={handleCheckbox} />
            <AddTodo handleChange={handleChange} handleClick={handleClick} todoText={todoText} />
        </div>
    )
}