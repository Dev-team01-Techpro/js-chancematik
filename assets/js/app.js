const winner = document.querySelector(".winner");
const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");
const winnerName = document.querySelector(".winnerName");
const fullName = document.querySelector(".input-text");
const raffleInp = document.querySelector(".raffle");
const submitButton = document.querySelector(".input-submit");
const participants = document.querySelector(".participants");
const dDay = document.querySelector("#dDay");
const matchDay = document.querySelector(".participant-body.matchDay");
const editPrt = document.querySelector(".edit-participant");
const editBox = document.querySelector(".edit-participant .editBox");
const editBtn = document.querySelector(".sbtButton");
const editXMark = document.querySelectorAll(".editBox .fa-solid fa-xmark");

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
    katilimciEkle(key, value);
  });
});

//----------------MEHMET-----------------------------
const getRandomNumber = (obj, type) => {
  if (type === 1) {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
  } else if (type === 2) {
    const keys = Object.keys(obj);

    keys.sort(() => Math.random() - 0.5);

    return keys;
  }
};

console.log(getRandomNumber(participantList, 1));
console.log(getRandomNumber(participantList, 2));
//----------------MEHMET-----------------------------

document.getElementById("btnAc").addEventListener("click", () => {
  const dayEl = document.querySelector(".day-list");
  dayEl.classList.toggle("active");
});

//----------------MEHMET-----------------------------

//----------------Emrullah & Duygu---------------------------
// Emrullah
const raffle = () => {
  winner.classList.add("active");

  let participantLine = getRandomNumber(participantList, 1);

  console.log("key: " + participantLine);

  const name = participantList[participantLine];
  winnerName.innerText = name;

  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
};

//Duygu
raffleInp.addEventListener("click", () => raffle());

//----------------Emrullah---------------------------

//----------------Tuba-------------------------------
// fullName value degerini participantList'e ekle

const generateUniqueId = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const uniqueId = parseInt(
    `${year}${month}${day}${hours}${minutes}${seconds}`
  );

  return uniqueId;
};

// let nextId = Object.keys(participantList).length + 1; // İlk boş ID'yi bul
// let nextId = generateUniqueId(); // İlk boş ID'yi bul

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newName = fullName.value;

  if (newName === "") {
    alert("Lütfen bir isim girin");
    return;
  }

  participantList[generateUniqueId()] = newName;

  fullName.value = "";

  console.log(participantList);
});

//----------------Tuba-------------------------------

function addPart() {
  addParticipant.classList.add("active");
  box.classList.add("active");
}

function exitBox() {
  addParticipant.classList.remove("active");
  box.classList.remove("active");
}

// Tuba
//------------------------------------------------------

//----------------Eda---------------------------------

dDay.addEventListener("click", () => {
  let participantDivs = matchDay.querySelectorAll(".participant");

  participantDivs.forEach((particip) => {
    particip.remove();
  });

  matchUp();
});

// Eslestirme fonksiyonu
const matchUp = () => {
  let arr = [];
  let divArray = [];

  let days = dayCheck();
  let participantCount = Object.keys(participantList).length;
  let arrMatch = getRandomNumber(participantList, 2);

  for (let i = 0; i < participantCount; i++) {
    let participantIndex = arrMatch[i] - 1;
    let participant = participantList[participantIndex + 1];
    let dayIndex = i % days.length;

    arr[i] = days[dayIndex] + " : " + participant;

    console.log(arr[i]);

    let newDiv = document.createElement("div");
    newDiv.className = "participant";
    newDiv.id = `participant-${i + 1}`;
    divArray.push(newDiv);

    let newSpan = document.createElement("span");
    newSpan.className = "participant-name";
    newSpan.innerText = `${arr[i]}`;
    newDiv.appendChild(newSpan);

    let iconDiv = document.createElement("div");
    iconDiv.className = "participant-icon";
    newDiv.appendChild(iconDiv);

    let iconEl1 = document.createElement("i");
    iconEl1.className = `fa-solid fa-user-pen edit-day ${i + 1}`;
    iconEl1.id = `user-pen`;
    iconDiv.appendChild(iconEl1);

    let iconEl2 = document.createElement("i");
    iconEl2.className = "fa-solid fa-user-xmark delete-day";
    iconEl2.id = "xmark";
    iconDiv.appendChild(iconEl2);

    let container = document.querySelector(".participant-body.matchDay");
    divArray.forEach((div) => {
      container.appendChild(div);
    });

    let dayListDiv = document.querySelector(".participant-day-list");
    dayListDiv.appendChild(container);
  }
  addDeleteButtons();
};
// Eslestirme fonksiyonu
//----------------Eda----------------------------------

//----------------Cahit----------------------------------

const dayCheck = () => {
  let inputs = document.querySelectorAll(".day-list .day-item input");

  let days = [];

  inputs.forEach((input) => {
    if (input.checked) {
      days.push(input.id);
    }
  });

  return days;
};

// Hangi gunler checked oldugunu kontrol et ve arraya at
// fonksiyon icereisne yap. Return fonksiyon

//Ikinci bolum

const participantBody = document.querySelector(".participant-body");
participantBody.addEventListener("click", (e) => {
  return e.target.id;
});

let katilimciEkle = (id, name) => {
  const participantInfo = document.createElement("div");
  participantInfo.className = "participant";
  participantInfo.setAttribute("data-id", id);
  participants.appendChild(participantInfo);

  const participantName = document.createElement("span");
  participantName.className = "participant-name";
  participantName.innerText = `${name}`;
  participantInfo.appendChild(participantName);

  const participantIcon = document.createElement("div");
  participantIcon.className = "participant-icon";
  participantInfo.appendChild(participantIcon);

  const participantIconPen = document.createElement("i");
  participantIconPen.className = "fa-solid fa-user-pen";
  participantIconPen.id = "user-pen";
  participantIcon.appendChild(participantIconPen);

  const participantIconXmark = document.createElement("i");
  participantIconXmark.className = "fa-solid fa-user-xmark";
  participantIconXmark.id = "xmark";
  participantIcon.appendChild(participantIconXmark);
};

//let katilimcilar = localStorage.getItem("participants");
//localStorage.setItem("participants", participant);

const participant = document.querySelector(".participants");

participant.addEventListener("click", (e) => {
  let btn = e.target.className;

  if (btn == "fa-solid fa-user-xmark") {
    let dltDiv = e.target.closest(".participant");
    let id = dltDiv.getAttribute("data-id");

    delete participantList[id];
    dltDiv.remove();
    // console.log(participantList);
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

//Delete Button
const addDeleteButtons = () => {
  document.querySelectorAll(".delete-day").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
};
