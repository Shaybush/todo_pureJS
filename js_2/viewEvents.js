import { addTask, deleteAll } from "./todoManger.js";

export const declareEvents = () => {
    let submit = document.querySelector("#id_form");
    let delAll = document.querySelector("#del_btn");
    submit.addEventListener("submit", e => {
        let task = document.querySelector("#id_task").value;
        let time = document.querySelector("#id_time").value;
        e.preventDefault();

        // validate the inputs 
        if (task.length < 2) {
            alert("Task name too short!");
            return;
        }
        if (time.length < 5) {
            alert("please insert date");
            return;
        }
        
        let currentTime = Date.now();
        let obj = {
            "task": task,
            "time": time,
            "id": currentTime
        };
        addTask(obj);
    });
    delAll.addEventListener("click", () => {
        deleteAll();
    });
};