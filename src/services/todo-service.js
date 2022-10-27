import { storageService } from "./async-storage-service";
export const todoService = {
  createTodo,
  loadTodos,
  getEmptyTodo,
};

const TODO_KEY = "todoDB";

async function createTodo(todo) {
  try {
    return storageService.post(TODO_KEY, todo);
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

function getEmptyTodo(){
  return {
    title:'', 
    isDone:false,
  }
}