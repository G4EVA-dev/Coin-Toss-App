//* handles and make request about user

import { user } from '../../models/userModel.js'


const player = new user()
player.addThought();
player.addContact();

const playerData = JSON.stringify({
    estimatedNumberOfGuess : player.estimetedNumberOfGuesses,
    hasEnjoyedGame : player.hasEnjoyedGame,
    contact : player.contact,
})

export const sendFormRequest = async ()=>{
    try {
        let response = await fetch('http://localhost:3001/user', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: playerData
        })
        let data = await response.json()
        console.log("sucess: ", data)
    } catch (error) {
        console.log("error: ", error)
    }
}

