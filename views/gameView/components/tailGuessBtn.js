import { playerGuess, headGuess } from "../../../stores/guessStore";
import btnColor from "../../../stores/btnColorStore";

export const tailClickAction = function (){
    headGuess.isChoosen = false;
    playerGuess.updateGuess();
    btnColor.setTailBtnColor();
}
