import gameDataStore from "../../../stores/gameDataStore";
import { playerGuess } from "../../../stores/guessStore";
import { flipCoin } from "./flipBtn";
import documentElementStore from "../../../stores/documentElementStore";
import sounds from "../../../stores/soundStore";
import { startCelebration } from "../../../stores/confettiStore";
import btnColorStore from "../../../stores/btnColorStore";
import { setId, getId} from "../../../stores/fetchIDforResult";

let setIdfromOut
let timeWhenGameBegins = new Date().getMinutes()
const Id = {id:""}
const resultIDObj = {}
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
        if (gameDataStore.randomMachineGuess === playerGuess.guess) {
          gameDataStore.setWins()
          sounds.win.play();
          startCelebration();
          
        } else {
          gameDataStore.setLoses()
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


async function redirectPage(roundsLeft) {
  if (roundsLeft === 0) {
    let timeWhenGameEnds = new Date().getMinutes();
    let usersResult = JSON.stringify({
      numberOfCorrectGuesses: gameDataStore.wins,
      minutesSpent: timeWhenGameEnds - timeWhenGameBegins,
    });
    let resultID = await sendResults(usersResult);
    setId(resultID); // Set the Id after getting the resultID
    localStorage.setItem('resultID',resultID)
    console.log(`Modified Id: ${resultID}`);
    setTimeout(() => {
      window.location.href = '/gameForm.html';
    }, 9000);
  }
}

async function sendResults(resultData){
  let response = await fetch('/result',{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: resultData
})
 let data = await response.json()
 
 return data.insertedId
}



export default setIdfromOut
