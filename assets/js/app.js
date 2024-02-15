const winner = document.querySelector(".winner");
const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");
const winnerName = document.querySelector(".winnerName");
const fullName = document.querySelector(".input-text");
const raffleInp = document.querySelector(".raffle");
const submitButton = document.querySelector(".input-submit");
const participants = document.querySelector(".participants");

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

//----------------Emrullah---------------------------
// raffleInp.addEventListener
const raffle = () => {
  winner.classList.add("active");

  let kisininKeyi = getRandomNumber(participantList, 1);

  const name = participantList[kisininKeyi];
  winnerName.innerText = name;

  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
};
raffle();
//----------------Emrullah---------------------------

//----------------Tuba-------------------------------
// fullName value degerini participantList'e ekle

let nextId = Object.keys(participantList).length + 1; // İlk boş ID'yi bul


   submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const newName = fullName.value;
  

  if (newName === "") {
    alert("Lütfen bir isim girin");
    return;
  }

  participantList[nextId] = newName;

  nextId++;
  fullName.value = "";

  Object.entries(participantList).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  katilimciEkle(newName);

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

// Cahit
//------------------------------------------------------

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

console.log(dayCheck());

// Hangi gunler checked oldugunu kontrol et ve arraya at
// fonksiyon icereisne yap. Return fonksiyon

//----------------Eda---------------------------------
document.querySelector("#dDay").addEventListener("click", () => {
  const matchUp = () => {
    let days = dayCheck();
    let participantCount = Object.keys(participantList).length;
    let arrMatch = getRandomNumber(participantList, 2);

    for (let i = 0; i < participantCount; i++) {
      let participantIndex = arrMatch[i] - 1;
      let participant = participantList[participantIndex + 1];
      let dayIndex = i % days.length;

      console.log(`${days[dayIndex]}: ${participant}`);
    }
  };
  matchUp();
});
//----------------Eda----------------------------------

const participantBody = document.querySelector(".participant-body");
participantBody.addEventListener("click", (e) => {
  return e.target.id;
});



let katilimciEkle=(name)=>{



  const participantInfo = document.createElement("div");
  participantInfo.className = "participant";
  participantInfo.id = `${nextId}`;
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
  


}

