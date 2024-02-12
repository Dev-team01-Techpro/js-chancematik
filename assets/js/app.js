const winner = document.querySelector(".winner");
const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");
const winnerName = document.querySelector(".winnerName");
const fullName = document.querySelector(".input-text");

let participantList = {
  1: "Sinan",
  2: "Eda",
  3: "Sule",
};

// Mehmet
function getRandomNumber() {
  //Listedeki sayilarin random numarasini getir
  //  return kisinin keyi
}
// Mehmet

// Emrullah
function cekilis() {
  winner.classList.add("active");
  let kisininKeyi = getRandomNumber();
  // kisiler.kisininKeyi
  // winnerName.innerText = "Sinan";

  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
}
// Emrullah

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
