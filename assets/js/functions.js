//----------------MEHMET-----------------------------
// Rastgele sayılar ile rastgele kullanıcı seçer
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
// Kullanımı
// getRandomNumber(participantList, 1) // Objeden tek kullanıcı seçer
// getRandomNumber(participantList, 2) // Tum kullanıcıları rastgele dağıtır
//----------------MEHMET-----------------------------
//---------------------------------------------------
//----------------Sinan------------------------------
// Benzersiz bir ID üretir.
export const generateUniqueId = () => {
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
// Kullanımı
// generateUniqueId() // Benzersiz ID oluşturur
//----------------Sinan------------------------------
//---------------------------------------------------
//----------------Cahit------------------------------
// Hangi gunler checked oldugunu kontrol eder
export const dayCheck = () => {
  let inputs = document.querySelectorAll(".day-list .day-item input");//bu kısımda çalışma yapacağım

  let days = [];
  let currentDay=[];

const weekday = ["pazar","pazartesi","sali","carsamba","persembe","cuma","cumartesi"];

const d = new Date();
let tomorrow = null;

  inputs.forEach((input) => {
    if (input.checked) {
      days.push(input.id);
    }
  });
  let i=1;
  let control=true;
  while (control) {
    tomorrow=weekday[d.getDay()+i];
    days.forEach((day)=>{
    if(day===tomorrow){
      currentDay.push(day);
    }
    });
    if(currentDay.length===days.length){
      control=false;
    }
    
    i++;
    
    if(d.getDay()+i===7){
      i=-(d.getDay());
    }
   
  }
console.log(currentDay);
  return currentDay;
};
// Kullanımı
// dayCheck(); // Çağırdığında çalışır
//----------------Cahit------------------------------
//---------------------------------------------------
//----------------Cahit------------------------------
// Yeni kullanıcı için divler oluşturur
export const addNewParticipant = (id, name) => {
  const participants = document.querySelector(".participants");
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
//----------------Cahit------------------------------
//---------------------------------------------------
//----------------Eda--------------------------------
// Günlerle Katılımcıları Eşleştirir
export const matchUp = (participantList) => {
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

    // console.log(arr[i]);

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
  console.log(arr);

  addDeleteButtons();
};
//----------------Eda--------------------------------
//Delete Button
const addDeleteButtons = () => {
  document.querySelectorAll(".delete-day").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.remove();
    });
  });
};
//----------------Emrullah & Duygu---------------------------
export const raffle = (participantList) => {
  const winner = document.querySelector(".winner");
  const winnerName = document.querySelector(".winnerName");
  winner.classList.add("active");

  let participantLine = getRandomNumber(participantList, 1);

  const name = participantList[participantLine];
  winnerName.innerText = name;

  setTimeout(() => {
    winner.classList.remove("active");
  }, 5000);
};
//----------------Emrullah & Duygu---------------------------
//----------------Tuba--------------------------------
// LocalStorage den veri cekme fonksiyonu
// getItemsFromLocalStorage()
// Export et
// return object
//----------------Tuba--------------------------------
