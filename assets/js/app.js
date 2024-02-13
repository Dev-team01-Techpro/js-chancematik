const winner = document.querySelector(".winner");
const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");
const winnerName = document.querySelector(".winnerName");
const fullName = document.querySelector(".input-text");
const raffleInp = document.querySelector(".raffle");

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
  // kisiler.kisininKeyi
  // winnerName.innerText = "Sinan";

  let kisininKeyi = getRandomNumber(participantList, 1);

  winnerName.innerText = kisininKeyi;
  //console.log(name);
  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
};
// raffle();
//----------------Emrullah---------------------------

// Tuba
// fullName value degerini participantList'e ekle
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

const DayCheck = () => { 
  let days = [];

  inputs.forEach(input => {
    if(input.checked) {
      days.push(input.id);
    }
  });

 
  return days;
};




// Hangi gunler checked oldugunu kontrol et ve arraya at
// fonksiyon icereisne yap. Return fonksiyon
// DayCheck()
// const cars = ["Saab", "Volvo", "BMW"];
// return cars;

// Eda
// Gunlere dagit foknsiyonu

const randomNumber = (max) => {
  let i = 0;
  let arr = [];

  while (i + 1 <= max) {
    let randomN = Math.floor(Math.random() * max) + 1;

    if (randomN != 0 && !arr.includes(randomN)) {
      arr.push(randomN);

      i++;
    }
  }
 return arr;
};


const matchUp = () => {
  
let days=["pazartesi", "sali","çarşamba","persembe","cuma"];

  let arrMatch = randomNumber(9);

  for(let i=0; i<days.length; i++){
    days[i]=arrMatch[i];

    console.log(days[i])
  }
console.log(days)


};

matchUp()

// DayCheck()

const participantBody = document.querySelector(".participant-body");

participantBody.addEventListener("click", (e) => {
  console.log(e.target.id);
});

