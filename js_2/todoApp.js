import {
  checkLocal,
  createTodoList,
  setUpTimeToCurrent,
} from "./todoManger.js";
import { declareEvents } from "./viewEvents.js";

const init = () => {
  setUpTimeToCurrent();
  checkLocal();
  createTodoList();
  declareEvents();
};

init();
