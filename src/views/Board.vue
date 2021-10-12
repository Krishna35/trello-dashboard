<template>
  <main class="list-container">
    <Overlay />
    <Popup />
    <section class="list-wrapper">
      <draggable
        :options="{ group: 'lists' }"
        group="lists"
        ghostClass="ghost"
        class="list-draggable"
      >
        <div class="list-task" v-for="(list, index) in lists" :key="index">
          <label class="list-header">{{ list.name }}</label>
          <div class="list-content">
            <TasksList :listId="list.id" :listName="list.name" />
          </div>
          <div class="list-footer">
            <Task :listId="list.id" />
          </div>
        </div>
      </draggable>
      <input
        type="text"
        class="input-new-list"
        placeholder="Create a List"
        v-model="listName"
        @keyup.enter="createList"
      />
    </section>
  </main>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
import TasksList from "@/components/TaskList";
import Task from "@/components/Task.vue";
import Overlay from "@/components/Overlay";
import Popup from "@/components/Popup";

export default {
  components: {
    draggable: VueDraggableNext,
    TasksList,
    Task,
    Overlay,
    Popup,
  },
  data() {
    return {
      listName: "",
    };
  },
  methods: {
    createList() {
      if (this.listName !== "") {
        this.$store.dispatch("createList", this.listName);
        this.listName = "";
      }
    },
  },
  computed: {
    lists() {
      return this.$store.getters["lists"];
    },
  },
};
</script>

<style>
.list-container {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px;
  z-index: 10;
}

.list-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-width: 100vw;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.ghost {
  opacity: 0.5;
}

.list-draggable {
  display: flex;
  gap: 20px;
}

.input-new-list {
  display: flex;
  height: 30px;
  padding: 10px;
  border-radius: 5px;
  background-color: rgba(235, 236, 240, 0.5);
  min-width: 260px;
}

.input-new-list::placeholder {
  color: white;
}

.list-task {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: auto;
}

.list-header {
  position: relative;
  display: flex;
  justify-content: center;
  word-break: break-all;
  align-items: center;
  min-width: 280px;
  max-width: 280px;
  line-height: 50px;
  padding: 0px 10px 0px 10px;
  background-color: rgba(235, 236, 240, 1);
  border-radius: 10px 10px 0px 0px;
  color: rgba(24, 43, 77, 1);
  user-select: none;
  font-weight: bold;
}

.list-content {
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  max-width: 280px;
  height: auto;
  background-color: rgba(235, 236, 240, 1);
  padding: 0px 10px 0px 10px;
  box-shadow: 1.5px 1.5px 1.5px 0.1px rgba(255, 255, 255, 0.1);
  color: rgba(24, 43, 77, 1);
}

.list-footer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  background-color: rgba(235, 236, 240, 1);
  border-radius: 0px 0px 10px 10px;
  color: white;
  border-top: 0.5px solid rgba(255, 255, 255, 0.25);
  padding: 0px 10px 10px 10px;
}
</style>
