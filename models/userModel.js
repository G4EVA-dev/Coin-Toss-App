//* user thought from form

import formData from "../stores/formDataStore.js";

export class user{
    constructor(estimetedNumberOfGuesses, hasEnjoyedGame, contact){
        this.estimetedNumberOfGuesses = estimetedNumberOfGuesses || 0;
        this.hasEnjoyedGame = hasEnjoyedGame || false;
        this.contact = contact || 'xxx';
    }
    addThought(){
        this.estimetedNumberOfGuesses = formData.estimatedCorrectGuess
        this.hasEnjoyedGame = formData.hasEnjoyedGame
    }
    addContact(){
        this.contact = formData.contact
    }
}

