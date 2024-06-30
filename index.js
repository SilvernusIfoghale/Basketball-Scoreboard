const home = document.getElementById("home");
const guest = document.getElementById("guest");

//  document.getElementById('home') = home;

function reset() {
  home.textContent = 0;
  guest.textContent = 0;
}

function add1() {
  home.textContent++;
}
function add2() {
  let result = parseInt(home.textContent);
  result += 2;
  home.textContent = result;
}
function add3() {
  let result = parseInt(home.textContent);
  result += 3;
  home.textContent = result;
}
function addG1() {
  guest.textContent++;
}
function addG2() {
  let result = parseInt(guest.textContent);
  result += 2;
  guest.textContent = result;
}
function addG3() {
  let result = parseInt(guest.textContent);
  result += 3;
  guest.textContent = result;
}
