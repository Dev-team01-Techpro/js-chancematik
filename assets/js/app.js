import {
  generateUniqueId,
  addNewParticipant,
  matchUp,
  raffle,
} from "./functions.js";

const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");

const fullName = document.querySelector(".input-text");
const raffleInp = document.querySelector(".raffle");
const submitButton = document.querySelector(".input-submit");

const dDay = document.querySelector("#dDay");
const matchDay = document.querySelector(".participant-body.matchDay");
const editPrt = document.querySelector(".edit-participant");
const editBox = document.querySelector(".edit-participant .editBox");
const editBtn = document.querySelector(".sbtButton");
const addPartBtn = document.getElementById("addPart");

let participantList = {
  1: "Sinan",
  2: "Eda",
  3: "Sule",
  4: "Tuba",
  5: "Mehmet",
  6: "Cahit",
  7: "Emrullah",
  8: "Asiye",
};

window.addEventListener("load", () => {
  Object.entries(participantList).forEach(([key, value]) => {
    // console.log(`${key}: ${value}`);
    addNewParticipant(key, value);
  });
});

//----------------MEHMET-----------------------------

document.getElementById("btnAc").addEventListener("click", () => {
  const dayEl = document.querySelector(".day-list");
  dayEl.classList.toggle("active");
});

//----------------MEHMET-----------------------------

//----------------Emrullah & Duygu---------------------------
// Emrullah

//Duygu
raffleInp.addEventListener("click", () => raffle(participantList));

//----------------Emrullah---------------------------

//----------------Tuba-------------------------------

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newName = fullName.value;

  if (newName === "") {
    alert("Lütfen bir isim girin");
    return;
  }

  participantList[generateUniqueId()] = newName;
  addNewParticipant(generateUniqueId(), newName);
  fullName.value = "";

  // DUYGU
  // OBJE ADI participantList
});
//----------------Tuba-------------------------------

addPartBtn.addEventListener("click", () => {
  addParticipant.classList.add("active");
  box.classList.add("active");
});

const exitBox = document.querySelector(".add-participant .box .fa-xmark");
exitBox.addEventListener("click", () => {
  addParticipant.classList.remove("active");
  box.classList.remove("active");
});

// Tuba
//------------------------------------------------------

//----------------Eda---------------------------------

dDay.addEventListener("click", () => {
  let participantDivs = matchDay.querySelectorAll(".participant");

  participantDivs.forEach((particip) => {
    particip.remove();
  });

  matchUp(participantList);
});

//----------------Eda----------------------------------

//----------------Cahit----------------------------------
const participantBody = document.querySelector(".participant-body");
participantBody.addEventListener("click", (e) => {
  return e.target.id;
});

const participant = document.querySelector(".participants");

participant.addEventListener("click", (e) => {
  let btn = e.target.className;

  if (btn == "fa-solid fa-user-xmark") {
    let dltDiv = e.target.closest(".participant");
    let id = dltDiv.getAttribute("data-id");

    delete participantList[id];
    dltDiv.remove();
  }

  if (btn == "fa-solid fa-user-pen") {
    editPrt.classList.add("active");
    editBox.classList.add("active");

    let span = e.target
      .closest(".participant")
      .querySelector(".participant-name");
    let dltName = span.innerText;

    let divParticipant = e.target.closest(".participant");
    let id = divParticipant.getAttribute("data-id");

    let inp = document.querySelector(
      ".edit-participant .editBox .editInputText"
    );
    inp.value = dltName;

    editBtn.addEventListener("click", (e) => {
      e.preventDefault();

      participantList[id] = inp.value;

      span.innerText = inp.value;

      editPrt.classList.remove("active");
      editBox.classList.remove("active");
    });

    const exitBtn = editBtn.parentElement.querySelector(".fa-xmark");
    exitBtn.addEventListener("click", () => {
      editPrt.classList.remove("active");
      editBox.classList.remove("active");
    });
  }
});
//----------------Cahit----------------------------------
