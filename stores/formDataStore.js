// stores form data's state

export default {
    formElements : {
        formInput_1 : document.getElementById("input_1"),
        formInput_2 : document.getElementById("input_2"),
        formInput_3 : document.getElementById("input_3"),
        errorDiv_1 : document.getElementById("errorDiv_1"),
        errorDiv_2 : document.getElementById("errorDiv_2"),
        submitBtn : document.getElementById("submitBtn"),
    },
    _estimatedCorrectGuess : 0,
    hasEnjoyedGame : false,
    _contact : '',
    get estimatedCorrectGuess(){
        return this._estimatedCorrectGuess;
    },
    set estimatedCorrectGuess(value){
        this._estimatedCorrectGuess = value;
    },
    get contact(){
        return this._contact;
    },
    set contact(value){
        this._contact= value;
    },
    setHasEnjoyedGame(inputValue){
        if(inputValue.match(/^yes$/i)){
            this.hasEnjoyedGame = true
        }else{
            this.hasEnjoyedGame = false
        }
    }
}