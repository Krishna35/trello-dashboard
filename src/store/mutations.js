export default {
  createNewList(state, payload) {
    state.lastListId++;
    const list = {
      id: state.lastListId,
      name: payload,
    };
    state.lists.push(list);
  },
  createNewTask(state, payload) {
    state.lastTaskId++;
    const task = {
      listId: payload.listId,
      id: this.lastTaskId,
      name: payload.name,
    };
    state.tasks.push(task);
  },
  toggleOverlay(state) {
    state.overlay = !state.overlay;
  },
  openForm(state, payload) {
    state.currentData = payload;
  },
  saveTask(state, payload) {
    state.tasks = state.tasks.map((task) => {
      if (task.id === payload.id) {
        return Object.assign({}, task, payload);
      }
      return task;
    });
  },
  deleteTask(state, payload) {
    const indexToDelete = state.tasks
      .map((task) => task.id)
      .indexOf(payload.id);
    state.tasks.splice(indexToDelete, 1);
  },
};
