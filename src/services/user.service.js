import { storageService } from "./async-storage-service";
import { httpService } from "./http-service";
export const userService = {
  signup,
  login,
  loadUser,
  findUserById
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
  try {
    // const users = await storageService.query(USER_KEY);
    // const user = users.find(
    //   (user) => user.password === password && user.username === username
    // );
    return httpService.post("auth/login", creds, true);
  } catch (error) {
    console.log(error);
  }
}

async function findUserById(id) {
  const users = await storageService.query(USER_KEY);
  const user = users.find((user) => user._id === id);
  return user;
}

async function loadUser(){
  return httpService.get('auth', {}, true)
}