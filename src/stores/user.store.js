import { defineStore } from "pinia";
import { userService } from "../services/user.service";
export const useUserStore = defineStore("user", {
  state: () => {
    return {
      currUser: null,
    };
  },
  getters: {},
  actions: {
    async createUser(user) {
      try {
        const newUser = await userService.createUser(user);
        console.log(newUser)
        this.currUser = newUser;
      } catch (error) {
        console.log(error);
      }
    },
    async signup(creds) {
      const user = await userService.login(creds)
      this.currUser = user
    },
  },
});
