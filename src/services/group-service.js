import { storageService } from "./async-storage-service";
import { httpService } from "./http-service";
export const groupService = {
  createGroup,
  loadGroups,
  getEmptyGroup,
  query,
  updateGroup,
  removeGroup,
};

const GROUP_KEY = "groupDB";

async function createGroup(group) {
  try {
    return httpService.post("group/create", group);
  } catch (error) {
    console.log(error);
  }
  // return storageService.post(GROUP_KEY, group);
}

async function loadGroups() {
  return httpService.get("group");
}

function getEmptyGroup() {
  return {
    title: null,
    todos: [],
  };
}

async function query(id) {
  try {
    return httpService.get(`group/${id}`);
    const groups = await storageService.query(GROUP_KEY);
    return groups.find((group) => group._id === id);
  } catch (error) {
    console.log(error);
  }
}

async function updateGroup(group) {
  return httpService.put("group/update", group);
  // return storageService.put(GROUP_KEY, group);
}

async function removeGroup(id) {
  return storageService.remove(GROUP_KEY, id);
}
