import { createStore } from "vuex";

import rootMutations from "./mutations.js";
import rootActions from "./actions.js";
import rootGetters from "./getters.js";

const store = createStore({
  state() {
    return {
      overlay: false,
      lastListId: 5,
      lastTaskId: 5,
      currentData: null,
      lists: [
        {
          id: 1,
          name: "Project Overview",
        },
        {
          id: 2,
          name: "Tasks",
        },
        {
          id: 3,
          name: "In-Progress",
        },
        {
          id: 4,
          name: "In-Review",
        },
        {
          id: 5,
          name: "Completed",
        },
      ],
      tasks: [
        {
          listId: 1,
          id: 1,
          name: "Task 1",
        },
        {
          listId: 2,
          id: 2,
          name: "Task 2",
        },
        {
          listId: 3,
          id: 3,
          name: "Task 3",
        },
      ],
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});

export default store;
