import { groupService } from "../services/group-service";
import { defineStore } from "pinia";
export const useGroupStore = defineStore("group", {
  state: () => {
    return {
      currGroup: null,
      groups: null,
    };
  },
  getters: {},
  actions: {
    async createGroup(group) {
      const newGroup = await groupService.createGroup(group);
      this.currGroup = newGroup;
      this.groups.push(newGroup);
    },
    async loadGroups() {
      const groups = await groupService.loadGroups();
      this.groups = groups;
    },
  },
});
