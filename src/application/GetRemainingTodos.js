import TodosApiObj from "../infraestructure/TodosApi";

export default function getRemainingTodos() {
    return TodosApiObj.getRemaining();
}


/* ESTA CLASE ESTA INUTILIZADA DEBIDO A QUE DURANTE 
    EL PROYECTO SE HA ELIMINADO UN ENDPOINT 
        "/todos?finished=false" */