import { storageService } from "./async-storage-service";
export const groupService = {
  createGroup,
  loadGroups,
  getEmptyGroup,
};

const GROUP_KEY = "groupDB";

async function createGroup(group) {
  return storageService.post(GROUP_KEY, group);
}

async function loadGroups() {
  return storageService.query(GROUP_KEY);
}

function getEmptyGroup() {
  return {
    title: null,
    todos: [],
  };
}
