import { storageService } from "./async-storage-service";
export const groupService = {
  createGroup,
  loadGroups,
  getEmptyGroup,
  query,
  updateGroup
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

async function query(id) {
  try {
    const groups = await storageService.query(GROUP_KEY)
    return groups.find(group => group._id === id)
  } catch (error) {
    console.log(error);
  }
}

function updateGroup(group){
  return storageService.put(GROUP_KEY, group)
}