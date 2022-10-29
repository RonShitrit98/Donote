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
    async loadGroup(id) {
      try {
        const group = await groupService.query(id);
        this.currGroup = group;
        return group;
      } catch (error) {
        console.log(error);
      }
    },
    async updateGroup(value, key, id) {
      const group = this.groups.find((group) => id === group._id);
      group[key] = value;
      await groupService.updateGroup(group);
    },
  },
});
