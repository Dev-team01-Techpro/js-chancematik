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
const raffle = () => {
  winner.classList.add("active");

  //const personKey = getRandomNumber(participantList,1);

  const name = participantList[1]; //participantList[personKey];
  winnerName.innerHTML = name;
  //console.log(name);
  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
};
//raffle();
// Emrullah
// git add .  git commit -m "asdasd" git push -u origin lottery
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
// DayCheck()
