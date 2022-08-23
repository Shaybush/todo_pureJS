export default class Todo{
    constructor(_parent,_item,_deleteTask){
        this.parent = _parent;
        this.task = _item.task;
        this.time = _item.time;
        this.id = _item.id;
        this.deleteTask = _deleteTask;
        this.render();
    }

    render(){
        let tr = document.createElement("tr");
        document.querySelector(this.parent).append(tr);
        tr.innerHTML +=`
        <td>${this.task}</td>
        <td>${this.time}</td>
        <td class="remove text-danger fs-5 text-center">X</td>
        `
        let del_task = tr.querySelector(".remove");
        del_task.addEventListener("click",()=>{
            this.deleteTask(this.id);
        })
    }
}