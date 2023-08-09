import { checkLocal, createTodoList } from "./todoManger.js";
import { declareEvents } from "./viewEvents.js";
const init = () => { 
    checkLocal();
    createTodoList();
    declareEvents();
}

init();