import gameDataStore from "../../../stores/gameDataStore";
import { playerGuess } from "../../../stores/guessStore";
import { flipCoin } from "./flipBtn";
import documentElementStore from "../../../stores/documentElementStore";
import sounds from "../../../stores/soundStore";
import { startCelebration } from "../../../stores/confettiStore";
import btnColorStore from "../../../stores/btnColorStore";


export const startGame = function(){
    if (playerGuess.guess === null) {
        alert("Please make a guess before flipping the coin!");
        //TODO make a modal
        return
      } 
      documentElementStore.coin.style.animation = "none";
      flipCoin();
      computerGameLogic();
        
}

function computerGameLogic(){
    updateData();
    comparisonLogic();
    resetData()
    redirectPage(NumberOfroundsLeft)
}

function updateData(){
    
    if(gameDataStore.randomMachineGuess){
        gameDataStore.updateHeadCount()
    }else{
        gameDataStore.updateTailCount()
    }
    gameDataStore.updateRoundsPlayed()
}

function comparisonLogic(){
    setTimeout(() => {
      console.log("Machine's guess:", gameDataStore.randomMachineGuess)
      console.log("Players guss at comparison:", playerGuess.guess)
        if (gameDataStore.randomMachineGuess === playerGuess.guess) {
          sounds.win.play();
          startCelebration();
          
        } else {
          sounds.lose.play();
        }
      }, 3000);   
}
let NumberOfroundsLeft

function resetData(){
  NumberOfroundsLeft = 20-gameDataStore.roundsPlayed
  setTimeout(()=>{
    document.getElementById("gameCount").textContent = `${NumberOfroundsLeft} rounds left`

    playerGuess.resetGuess()
    btnColorStore.resetBtnColors()
  },5000)
  
}
function redirectPage(roundsLeft){
    if (roundsLeft === 0){
      setTimeout(()=>{
        window.location.href = '/gameForm.html'
      },9000)
    }
}

