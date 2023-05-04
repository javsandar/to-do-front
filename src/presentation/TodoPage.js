import { AddTodo } from "./AddTodo";
import { RemainingTodos } from "./RemainingTodos";
import { useEffect, useState } from "react";
import axios from "axios";

export function TodoPage() {
    const [todoText, setTodoText] = useState("");
    const [todos, setTodos] = useState([]);
   /* renderTodos es llamado en dos casos, al inicio de la aplicación como 
      carga inicial de las tareas y cada vez que se añada una tarea */
    const renderTodos = () => {
        axios.get('/todos?finished=false').then((response) => {
            if(response.data.length !== 0)
                setTodos(response.data);
            else {
                return;
            }
        });
    }
    
    useEffect(() => {
        renderTodos();
    },[])
    
    const createTodo = () => {
        const body = {
            text: todoText,
            finished: false,
        };
        const headers = {'Content-Type': 'application/json'};
        axios.post('/todos', body, headers).then(() => renderTodos());
        setTodoText('');
    }
   
    const handleChange = (event) => {
        setTodoText(event.target.value);
    }
    const handleClick = () => {
            createTodo();
    };
    return (
        <div>
            <h1>Remaining To-dos</h1>
            <RemainingTodos todos={todos} />
            <AddTodo handleChange={handleChange} handleClick={handleClick} todoText={todoText}/>
        </div>
    );
}
