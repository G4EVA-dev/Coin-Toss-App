import gameDataStore from "../../../stores/gameDataStore";
import sounds from "../../../stores/soundStore";
import documentElementStore from "../../../stores/documentElementStore";

export const flipCoin = function () {
  sounds.flip.play();
  let machineGuess = gameDataStore.setRandomMachineGuess();
  if (machineGuess) {
    setTimeout(() => {
      documentElementStore.coin.style.animation = "spin-head 3s forwards";
      console.log("headSpins");
    }, 100);
  } else {
    setTimeout(() => {
      documentElementStore.coin.style.animation = "spin-tail 3s forwards";
    }, 100);
  }
};

documentElementStore.coin.addEventListener("click", flipCoin);




// import gameDataStore from "../../../stores/gameDataStore";
// import sounds from "../../../stores/soundStore"
// import documentElementStore from "../../../stores/documentElementStore";


// export const flipBtnAction = function (){
//     sounds.flip.play();
//     let machineGuess = gameDataStore.setRandomMachineGuess();
//     if(machineGuess){
//         setTimeout(()=>{
//             documentElementStore.coin.style.animation = "spin-head 3s forwards";
//             console.log("headSpins") 
//         },100)
//     }else{
//         setTimeout(()=>{
//             documentElementStore.coin.style.animation = "spin-tail 3s forwards";   
//         },100)
//     }
// }

