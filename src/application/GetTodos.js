import TodosApiObj from "../infraestructure/TodosApi";
import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function getTodos(filter) {
    if(filter.every((todo) => todo === null)){
        return TodosApiObj.getTodos();
    }
    if(filter[0] === false){
        return TodosApiObj.getTodos().then(data => data.filter((todo) => todo.finished === false));
    }
    if(filter[0] === true){
        return TodosApiObj.getTodos().then(data => data.filter((todo) => todo.finished === true));
    }
}