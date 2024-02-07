const winner = document.querySelector(".winner");
const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");

function cekilis() {
  winner.classList.add("active");

  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
}

function addPart() {
  addParticipant.classList.add("active");
  box.classList.add("active");
}
function exitBox() {
  addParticipant.classList.remove("active");
  box.classList.remove("active");
}
