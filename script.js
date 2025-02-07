let tg = window.Telegram.WebApp;
let usernametext = document.querySelector("#username");
let balancetext = document.querySelector("#balance");

let main = document.querySelector(".main");

function start() {
  main.style.display = "none";
}

addEventListener("DOMContentLoaded", () => {
  tg.expand();
});
