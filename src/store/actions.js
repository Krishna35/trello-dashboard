export default {
  createList(context, payload) {
    context.commit("createNewList", payload);
  },
  createTask(context, payload) {
    context.commit("createNewTask", payload);
  },
  toggleOverlay(context) {
    context.commit("toggleOverlay");
  },
  openForm(context, payload) {
    context.commit("openForm", payload);
  },
  saveTask(context, payload) {
    context.commit("saveTask", payload);
  },
  deleteTask(context, payload) {
    context.commit("deleteTask", payload);
  },
};
