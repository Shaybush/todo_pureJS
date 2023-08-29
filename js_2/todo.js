export default class Todo {
  constructor(_parent, _item, _deleteTask, checkedSingleTask) {
    this.parent = _parent;
    this.task = _item.task;
    this.time = _item.time;
    this.checked = _item.checked;
    this.id = _item.id;
    this.deleteTask = _deleteTask;
    this.checkedSingleTask = checkedSingleTask;
    this.render();
  }

  render() {
    let tr = document.createElement("tr");
    document.querySelector(this.parent).append(tr);
    tr.innerHTML += `
        <td>${this.task}</td>
        <td>${this.time}</td>
        <td class="remove text-danger fs-5 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
         <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
         <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
        </svg>
        </td>
        <td class="text-center">
        <label class="checkbox_container">
         <input class="checkBox text-center" type="checkbox" id="checked" name="task" value="checked">
         <span class="checkmark"></span>
        </label>
        </td>
        `;
    let del_task = tr.querySelector(".remove");
    const cb = tr.querySelector(".checkBox");
    cb.checked = this.checked;

    cb.addEventListener("change", () => {
      this.checkedSingleTask(this.id, cb.checked);
    });

    del_task.addEventListener("click", () => {
      this.deleteTask(this.id);
    });
  }
}
