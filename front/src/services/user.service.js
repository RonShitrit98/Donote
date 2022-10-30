import { storageService } from "./async-storage-service";
export const userService = {
  signup,
  login,
  loadUser,
};

const USER_KEY = "userDB";

async function signup(user) {
  try {
    return storageService.post(USER_KEY, user);
  } catch (error) {
    console.log(error);
  }
}

async function login({ username, password }) {
  try {
    const users = await storageService.query(USER_KEY);
    const user = users.find(
      (user) => user.password === password && user.username === username
    );
    return user;
  } catch (error) {
    console.log(error);
  }
}

async function loadUser(id) {
  const users = await storageService.query(USER_KEY);
  const user = users.find((user) => user._id === id);
  return user;
}
