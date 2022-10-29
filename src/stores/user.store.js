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
    async signup(user) {
      try {
        const newUser = await userService.signup(user);
        console.log(newUser)
        this.currUser = newUser;
      } catch (error) {
        console.log(error);
      }
    },
    async login(creds) {
      const user = await userService.login(creds)
      this.currUser = user
    },
  },
});
