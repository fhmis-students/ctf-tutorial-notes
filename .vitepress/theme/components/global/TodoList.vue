<script setup>
import { onMounted, useCssModule, ref } from "vue";

const $style = useCssModule();
const todoItems = ref({
  todo: [],
  complete: [],
});

onMounted(() => {
  const todoItemsElements = document.querySelectorAll(`.${$style.todoList} p`);
  todoItemsElements.forEach((itemElement) => {
    todoItems.value.todo.push(itemElement.innerText);
    const storage_complete_items = localStorage.getItem("completeItems");
    if (storage_complete_items !== null) {
      todoItems.value.complete = [...JSON.parse(storage_complete_items)];
    }
    const todoItemIcon = document.createElement("span");
  });
});
</script>

<template>
  <div
    class="vp-raw todoList w-[95%] bg-slate-200 p-4"
    :class="$style.todoList"
  >
    <slot></slot>
  </div>
</template>

<style module>
.todoList :not(h2) :not(p) :not(hr),
.todoList h2:not(:nth-of-type(1)) {
  @apply hidden;
}

.todoList h2 {
  @apply text-4xl text-black;
}

.todoList p {
  @apply cursor-pointer py-6 text-xl text-black;
}

.todoList hr {
  @apply bg-black py-px;
}

.todoList .todoItemComplete {
  @apply line-through;
}

.todoList .todoItemIcon {
  @apply hidden;
}

.todoList .todoItemIconTodo {
  @apply block;
}

.todoList .todoItemIconComplete {
  @apply block;
}
</style>
