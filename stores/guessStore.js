export const playerGuess = {
    guess : null,
    updateGuess(){
        if(headGuess.isChoosen){
            this.guess = 1;
        }else{
            this.guess = 0;
        }
    }
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