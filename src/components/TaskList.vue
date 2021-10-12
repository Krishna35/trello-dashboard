<template>
  <draggable :options="{ group: 'tasks' }" group="tasks" ghostClass="ghost">
    <span
      class="element-task"
      v-for="(task, index) in tasks"
      :key="index"
      @click="togglePopup(task)"
    >
      {{ task.name }}
    </span>
  </draggable>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";

export default {
  props: ["listId", "listName"],
  components: {
    draggable: VueDraggableNext,
  },
  methods: {
    togglePopup(data) {
      const currentData = {
        listId: this.listId,
        listName: this.listName,
        id: data.id,
        name: data.name,
      };
      this.$store.dispatch("toggleOverlay");
      this.$store.dispatch("openForm", currentData);
    },
  },
  computed: {
    tasks() {
      const taskFilteredByListId = this.$store.getters["tasks"];
      return taskFilteredByListId.filter((task) => {
        if (task.listId === this.listId) {
          return true;
        } else {
          return false;
        }
      });
    },
    overlayIsActive() {
      return this.$store.getters["overlay"];
    },
  },
};
</script>

<style>
.element-task {
  position: relative;
  background-color: white;
  height: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  min-height: 30px;
  margin-bottom: 10px;
  word-break: break-all;
  text-align: left;
}
</style>
