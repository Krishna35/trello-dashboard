<template>
  <input
    class="input-task"
    type="text"
    placeholder="Create a Task"
    v-model="taskName"
    @keyup.enter="createTask"
  />
</template>

<script>
export default {
  props: ["listId"],
  methods: {
    createTask() {
      if (this.taskName !== "") {
        const task = {
          listId: this.listId,
          name: this.taskName,
        };
        this.$store.dispatch("createTask", task);
        this.taskName = "";
      }
    },
  },
};
</script>

<style>
.input-task {
  position: relative;
  background-color: white;
  min-height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  word-break: break-all;
  font-size: 16px;
}
</style>
