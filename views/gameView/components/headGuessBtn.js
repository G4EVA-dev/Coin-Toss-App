import { playerGuess, headGuess } from "../../../stores/guessStore";
import btnColor from "../../../stores/btnColorStore";

export const headClickAction = function (){
    headGuess.isChoosen = true;
    playerGuess.updateGuess();
    btnColor.setHeadBtnColor();
}

