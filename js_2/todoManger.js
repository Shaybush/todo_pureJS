import Todo from "./todo.js";

const todo_ar = [];

export const createTodoList = () => {
  // clear body
  document.querySelector("#id_tbody").innerHTML = "";
  // using lodash to sort todos by time 
  let sort_ar = _.sortBy(todo_ar, "time");
  // add to DOM
  sort_ar.forEach(item => {
    new Todo("#id_tbody", item, deleteSingleProduct);
  });
};

/** check local and update changes if local not empty */
export const checkLocal = () => {
  // check if local empty 
  if (localStorage["todo_array"]) {
    console.log('here')
    // get the data from local 
    let temp_array = JSON.parse(localStorage["todo_array"]);
    // clear parameters from todo_ar
    cleanArr();
    // update todo with local storage 
    todo_ar.push(...temp_array);
  }
};

/** delete single product from todo_ar */
export const deleteSingleProduct = (_idDel) => {
  todo_ar.forEach((item, i) => {
    if (item.id == _idDel) {
      todo_ar.splice(i, 1);
    }
  });
  // update local with todos after delete
  updateLocal();
  // update DOM
  createTodoList();
};

export const addTask = item => {
  todo_ar.push(item);
  // update local with new todo
  updateLocal();
  // clear input
  clearField();
  // update DOM
  createTodoList();
};

export const deleteAll = () => {
  if (confirm("Are you sure you want to delete all?")) {
    todo_ar.splice(0, todo_ar.length);
    updateLocal();
    createTodoList();
  }
};

/** clear todo ar */
const cleanArr = () => {
  todo_ar.splice(0, todo_ar.length);
};

const updateLocal = () => {
  localStorage.setItem("todo_array", JSON.stringify(todo_ar));
};

/** clear inputs */
const clearField = () => {
  document.querySelector("#id_task").value = "";
  document.querySelector("#id_time").value = "";
};