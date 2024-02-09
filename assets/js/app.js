const winner = document.querySelector(".winner");
const addParticipant = document.querySelector(".add-participant");
const box = document.querySelector(".box");
const winnerName = document.querySelector(".winnerName");
const fullName = document.querySelector(".input-text");

let participantList = {
  "1":"Sinan",
  "2":"Eda",
  "3":"Sule",
  "4":"Tuba",
  "5":"Mehmet",
  "6":"Cahit",
  "7":"Emrullah",
  "8":"Asiye",

}

//----------------MEHMET-----------------------------
const randomCreate = (obj,type) => { 

  if(type===1){
    const keys=Object.keys(obj);
    const randomIndex=Math.floor(Math.random()*keys.length);
    return keys[randomIndex];
  }else if(type===2){
    const keys=Object.keys(obj);
    for(let i=keys.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [keys[i],keys[j]]=[keys[j],keys[i]];
      return keys;
  }
  }else{
    alert("type 1 veya 2 olmalıdır")
  }
 }
console.log(randomCreate(participantList,1))
console.log(randomCreate(participantList,2))

// Mehmet
const getRandomNumber = (obj,type) => { 
randomCreate(obj,type);

//Listedeki sayilarin random numarasini getir
//  return kisinin keyi
}
// Mehmet
//----------------MEHMET-----------------------------


// Emrullah
function cekilis() {
  winner.classList.add("active");
  let kisininKeyi = getRandomNumber()
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
// DayCheck() 
