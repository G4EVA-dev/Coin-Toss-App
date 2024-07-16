import gameDataStore from "../../../stores/gameDataStore";
import { playerGuess } from "../../../stores/guessStore";
import { flipBtnAction } from "./flipBtn";
import documentElementStore from "../../../stores/documentElementStore";
import sounds from "../../../stores/soundStore";
import { startCelebration } from "../../../stores/confettiStore";


export const startGame = function(){
    if (playerGuess.guess === null) {
        alert("Please make a guess before flipping the coin!");
        //TODO make a modal
        return
      } 
      documentElementStore.coin.style.animation = "none";
      flipBtnAction();
      computerGameLogic();
        
}

function computerGameLogic(){
    updateData();
    comparisonLogic();
    gameDataStore.updateStats();
}

function updateData(){
    let machineGuess = gameDataStore.setRandomMachineGuess();
    if(machineGuess){
        gameDataStore.updateHeadCount()
    }else{
        gameDataStore.updateTailCount()
    }
    gameDataStore.updateRoundsPlayed()
}

function comparisonLogic(){
    setTimeout(() => {
        if (gameDataStore.randomMachineGuess === playerGuess.guess) {
          sounds.win.play();
          startCelebration();
          
        } else {
          sounds.lose.play();
        }
      }, 3000);   
}

