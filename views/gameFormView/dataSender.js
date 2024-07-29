//* handles and make request about user

import { user } from '../../models/userModel.js'

// preparing data for POST request



// exporting required functions for form actions

export const sendFormRequest = async ()=>{
    const player = new user()
    player.addThought();
    player.addContact();
   

    const playerData = JSON.stringify({
    estimatedNumberOfGuess : player.estimetedNumberOfGuesses,
    hasEnjoyedGame : player.hasEnjoyedGame,
    contact : player.contact,
    })

    try {
        let response = await fetch('/user', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: playerData
        })
        let data = await response.json()

    } catch (error) {
        console.log("error: ", error)
    }
}
export const displayThanksBox = ()=>{
    document.getElementById("container").classList.add("hidden")
    document.getElementById("container").classList.remove("flex")
    document.getElementById("thanks_box").classList.add("flex")
    document.getElementById("thanks_box").classList.remove("hidden")
}

export const browseTo = (link)=>{
    window.open(link,"_blank")
}