import {
  generateUniqueId,
  addNewParticipant,
  matchUp,
  raffle,
  getItemsFromLocalStorage,
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
const copyrightDate = document.querySelector(".copyright-date");

let participantList = {};

window.addEventListener("load", () => {
  let date = new Date();
  copyrightDate.innerText = date.getFullYear();
  // TUBA
  // functions dosyasinda yazdigin fonksiyonu cagir ve calistir
  participantList = getItemsFromLocalStorage();

  let obj = JSON.stringify(participantList);
  localStorage.setItem("participantList", obj);

  Object.entries(participantList).forEach(([key, value]) => {
    // console.log(`${key}: ${value}`);
    addNewParticipant(key, value);
  });

  const participantJSON = JSON.stringify(participantList);
  localStorage.setItem("participantList", participantJSON);
});

//----------------MEHMET-----------------------------

document.getElementById("btnAc").addEventListener("click", (e) => {
  const dayEl = document.querySelector(".day-list");
  dayEl.classList.toggle("active");
});

//----------------MEHMET-----------------------------
//-----------------Şule------------------------------
document.querySelector(".copyright-link").addEventListener("click", (e) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.removeAttribute("class");
  modalContainer.classList.add("one");

  document.body.classList.add("modal-active");
});

document
  .getElementById("modal-container")
  .addEventListener("click", function (e) {
    if (e.target.classList == "modal-background") {
      this.classList.add("out");
      document.body.classList.remove("modal-active");
    }
  });
//----------------------Şule--------------------------------
//----------------Emrullah & Duygu---------------------------
// Emrullah

//Duygu
raffleInp.addEventListener("click", () => raffle(participantList));

//----------------Emrullah---------------------------

//----------------Tuba-------------------------------

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newName = fullName.value;

  fullName.focus();

  if (newName === "") {
    alert("Lütfen bir isim girin");
    return;
  }

  participantList[generateUniqueId()] = newName;
  addNewParticipant(generateUniqueId(), newName);
  fullName.value = "";

  // DUYGU
  const participantJSON = JSON.stringify(participantList);
  localStorage.setItem("participantList", participantJSON);
});

//----------------Tuba-------------------------------

addPartBtn.addEventListener("click", () => {
  addParticipant.classList.add("active");
  box.classList.add("active");
  fullName.focus();
});

const exitBox = document.querySelector(".add-participant");

exitBox.addEventListener("click", (e) => {
  const closeBox = () => {
    addParticipant.classList.remove("active");
    box.classList.remove("active");
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeBox();
    }
  });
  const className = e.target.className;
  if (
    className !== "box active" &&
    className !== "input-text" &&
    className !== "btn input-submit"
  ) {
    closeBox();
  }
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
    let obj = localStorage.getItem("participantList");

    let strObj = JSON.parse(obj);
    delete strObj[id];
    let updated = JSON.stringify(strObj);
    localStorage.setItem("participantList", updated);

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

      //----------------Eda----------------------------------

      let JsonFormatParticipantList = JSON.stringify(participantList);
      localStorage.setItem("participantList", JsonFormatParticipantList);

      //----------------Eda----------------------------------

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

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
});
