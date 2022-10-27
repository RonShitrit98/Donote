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
    getEmptyTodo() {
      return todoService.getEmptyTodo();
    },
    async updateTodo(id, key, value) {
      try {
        const todo = this.todos.find((todo) => id === todo._id);
        todo[key] = value;
        const updatedTodo = await todoService.updateTodo(todo);
      } catch (error) {}
    },
    async removeTodo(id) {
      try {
        const idx = this.todos.findIndex((todo) => todo._id === id);
        this.todos.splice(idx, 1);
        await todoService.removeTodo(id);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
