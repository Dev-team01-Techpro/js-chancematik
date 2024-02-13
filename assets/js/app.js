









































//----------------Eda---------------------------------

document.querySelector("#dDay").addEventListener("click",()=>{

  const matchUp = () => {
    let days = ["pazartesi", "sali", "çarşamba", "persembe", "cuma"];
    let participantCount = Object.keys(participantList).length;
    let arrMatch = randomNumber(participantCount);
  
    for (let i = 0; i < participantCount; i++) {
  
      
      let participantIndex = arrMatch[i] - 1;
      let participant = participantList[participantIndex + 1];
      let dayIndex = i % days.length;
  
  
      console.log(`${days[dayIndex]}: ${participant}`);
    }
  };
  matchUp()
})
//----------------Eda----------------------------------