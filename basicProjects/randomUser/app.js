import getElement from "./modules/getElement.js";
import getUser from "./modules/fetchUser.js";
import displayUser from "./modules/displayUser.js";

const btn = getElement(".btn");



const showUser = async () => {
  // get user from api
  const person = await getUser();

  // display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
