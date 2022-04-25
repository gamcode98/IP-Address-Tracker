import detectetAdBlocker from "./detectAdBlocker.js";
import getLocation from "./ipGeolocationAPI.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  detectetAdBlocker();
  getLocation();
});
