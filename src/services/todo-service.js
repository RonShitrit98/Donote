import { storageService } from "./async-storage-service";
import { groupService } from "./group-service";
import { utilService } from "./util-service";
export const todoService = {
  createTodo,
  loadTodos,
  getEmptyTodo,
  updateTodo,
  removeTodo,
};

const TODO_KEY = "todoDB";

async function createTodo(todo, groupId) {
  try {
    todo._id = await utilService.makeId(8);
    const group = await groupService.query(groupId);
    group.todos.push(todo);
    await groupService.updateGroup(group);
    return todo;
  } catch (error) {
    console.log(error);
  }
}

async function loadTodos() {
  try {
    return storageService.query(TODO_KEY);
  } catch (error) {
    console.log(error);
  }
}

function getEmptyTodo() {
  return {
    title: "",
    isDone: false,
  };
}

async function updateTodo(todo, groupId) {
  const group = await groupService.query(groupId);
  const idx = group.todos.findIndex((t) => todo._id === t._id);
  group.todos.splice(idx, 1, todo);
  await groupService.updateGroup(group);
}

async function removeTodo(id, groupId) {
  const group = await groupService.query(groupId);
  const idx = group.todos.findIndex((todo) => todo._id === id);
  group.todos.splice(idx, 1);
  await groupService.updateGroup(group);
}
