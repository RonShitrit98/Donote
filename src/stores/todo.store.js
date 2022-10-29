import { defineStore } from "pinia";
import { useGroupStore } from "./group.store";
import { todoService } from "../services/todo-service";
export const useTodoStore = defineStore("todo", {
  state: () => {
    return {
      todos: null,
    };
  },
  getters: {
    groupStore() {
      return useGroupStore();
    },
    currGroupId(){
      return this.groupStore.currGroup._id
    }
  },
  actions: {
    async createTodo(todo) {
      try {
        const newTodo = await todoService.createTodo(todo, this.currGroupId);
        this.todos.push(newTodo);
        this.groupStore.loadGroup(this.currGroupId)
      } catch (error) {
        console.log(error);
      }
    },
    async loadTodos(groupId) {
      try {
        const group = await this.groupStore.loadGroup(groupId);
        if(!group.todos) return
        this.todos = group.todos
        // const todos = await todoService.loadTodos();
        // this.todos = todos;
      } catch (error) {
        console.log(error);
      }
    },
    getEmptyTodo() {
      return todoService.getEmptyTodo();
    },
    async updateTodo(value, key, id) {
      try {
        const todo = this.todos.find((todo) => id === todo._id);
        todo[key] = value;
        await todoService.updateTodo(todo, this.currGroupId);
        this.groupStore.loadGroup(this.currGroupId)
      } catch (error) {
        console.log(error)
      }
    },
    async removeTodo(id) {
      try {
        const idx = this.todos.findIndex((todo) => todo._id === id);
        this.todos.splice(idx, 1);
        await todoService.removeTodo(id, this.currGroupId);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
