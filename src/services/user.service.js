import Axios from "axios";
import { storageService } from "./async-storage-service";
import { httpService } from "./http-service";

export const userService = {
  signup,
  login,
  loadUser,
  findUserById,
  logout,
};

const USER_KEY = "userDB";

async function signup(user) {
  try {
    return httpService.post("auth/signup", user, true);
  } catch (error) {
    console.log(error);
  }
}

async function login(creds) {
  return httpService.post("auth/login", creds, true);
}

async function findUserById(id) {
  const users = await storageService.query(USER_KEY);
  const user = users.find((user) => user._id === id);
  return user;
}

async function loadUser() {
  return httpService.get("auth");
}

async function logout() {
  console.log('logging out')
  return httpService.post("auth/logout");
}
