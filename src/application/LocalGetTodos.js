import TodoAdapterObj from "../infraestructure/adapters/TodoAdapter";

export default function localGetTodos(finished) {
    if(finished === false){
        return TodoAdapterObj.generateListForGetRemaining();
    } else if (finished === true){
        return TodoAdapterObj.generateListForGetFinished();
    }
}