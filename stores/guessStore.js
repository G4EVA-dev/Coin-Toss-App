export const playerGuess = {
    guess : null,
    updateGuess(){
        if(headGuess.isChoosen){
            this.guess = 1;
        }else{
            this.guess = 0;
        }
    },
    resetGuess(){
        this.guess = null
    },
}
export const headGuess = {
    _isChoosen : false,
    get isChoosen(){
        return this._isChoosed
    },
    set isChoosen(value){
        this._isChoosed = value
    }

}