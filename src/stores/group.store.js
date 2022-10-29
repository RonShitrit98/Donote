import { groupService } from "../services/group-service";
import { defineStore } from "pinia";
export const useGroupStore = defineStore("group", {
  state: () => {
    return {
      currGroup, 
      curr
    };
  },
  getters: {},
  actions: {
    async createGroup(group){
      const newGroup = await groupService.createGroup(group)
      console.log(newGroup)
    }
  },
});
