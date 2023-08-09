import Todo from "./todo.js";
let array = [];
const todo_ar = [];
export const createTodoList = () => {
  document.querySelector("#id_tbody").innerHTML = "";
  let sort_ar = _.sortBy(todo_ar, "time");
  sort_ar.forEach(item => {
    let todo = new Todo("#id_tbody", item, deleteSingleProduct);
  });
};

export const checkLocal = () => {
  if (localStorage["todo_array"]) {
    array = JSON.parse(localStorage["todo_array"]);
    cleanArr();
    todo_ar.push(...array);
  }
};
export const deleteSingleProduct = (_idDel) => {
  todo_ar.forEach((item, i) => {
    if (item.id == _idDel) {
      todo_ar.splice(i, 1);
    }
  });
  updateLocal();
  createTodoList();
};

export const addTask = item => {
  todo_ar.push(item);
  updateLocal();
  clearField();
  createTodoList();
};
export const deleteAll = () => {
  if (confirm("Are you sure you want to delete all?")) {
    todo_ar.splice(0, todo_ar.length);
    updateLocal();
    createTodoList();
  }
};
const cleanArr = () => {
  todo_ar.splice(0, todo_ar.length);
};
const updateLocal = () => {
  localStorage.setItem("todo_array", JSON.stringify(todo_ar));
};
const clearField = () => {
  document.querySelector("#id_task").value = "";
  document.querySelector("#id_time").value = "";
};