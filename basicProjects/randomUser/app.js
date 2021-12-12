import getElement from "./modules/getElement.js";

const apiURL = "https://randomuser.me/api/";

const img = getElement(".user-img");
const title = getElement(".user-title");
const value = getElement(".user-value");
const btn = getElement(".btn");

const btns = [...document.querySelectorAll(".icon")];
