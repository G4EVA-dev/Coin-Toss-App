import { playerGuess, headGuess } from "../../../stores/guessStore";
import gameDataStore from "../../../stores/gameDataStore";
import btnColor from "../../../stores/btnColorStore";

export const headClickAction = function (){
    headGuess.isChoosen = true;
    playerGuess.updateGuess();
    btnColor.setHeadBtnColor();
    gameDataStore.updateStats();
}

