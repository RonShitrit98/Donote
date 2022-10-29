import { storageService } from "./async-storage-service";
export const groupService = {
  createGroup,
};

const GROUP_KEY = "groupDB";

async function createGroup(group) {
  return storageService.post(GROUP_KEY, group);
}
