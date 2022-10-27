import { defineStore } from "pinia";
import { todoService } from "../services/todo-service";
export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      todos: null,
    };
  },
  getters: {},
  actions: {
    async createTodo(todo) {
      try {
        const newTodo = await todoService.createTodo(todo);
        this.todos.push(newTodo);
        return newTodo;
      } catch (error) {
        console.log(error);
      }
    },
    async loadTodos() {
      try {
        const todos = await todoService.loadTodos();
        this.todos = todos;
      } catch (error) {
        console.log(error);
      }
    },
    getEmptyTodo(){
      return todoService.getEmptyTodo()
    }
  },
});
