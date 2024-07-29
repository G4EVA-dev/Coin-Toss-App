import gameDataStore from "../../../stores/gameDataStore";
import sounds from "../../../stores/soundStore";
import documentElementStore from "../../../stores/documentElementStore";

export const flipCoin = function () {
  sounds.flip.play();
  let machineGuess = gameDataStore.setRandomMachineGuess();
  console.log(machineGuess);

  // Clear any existing animations
  documentElementStore.coin.style.animation = "none";
  // Force reflow to reset animation
  documentElementStore.coin.offsetHeight;

  if (machineGuess) {

    setTimeout(() => {
      documentElementStore.coin.style.animation = "spin-head 3s forwards";
      setTimeout(()=>{
        document.querySelector(".head").classList.remove("hidden")
        document.querySelector(".tail").classList.add("hidden")
      },1500)
      console.log("headSpins");
    }, 100);
  } else {

    setTimeout(() => {
      documentElementStore.coin.style.animation = "spin-tail 3s forwards";
      setTimeout(()=>{
        document.querySelector(".head").classList.add("hidden")
        document.querySelector(".tail").classList.remove("hidden")
      },1500)
      console.log("tailSpins");
    }, 100);
  }
};
