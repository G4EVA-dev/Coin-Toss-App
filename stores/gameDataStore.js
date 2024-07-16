export default {
    headCount : 0,
    tailCount : 0,
    roundsPlayed : 0,
    randomMachineGuess : null,
    updateHeadCount(){
        return this.headCount++;
    },
    resetHeadCount(){
        this.headCount = 0;
        return this.headCount
    },
    updateTailCount(){
        return this.tailCount++;
    },
    resetTailCount(){
        this.tailCount = 0;
        return this.tailCount
    },
    updateRoundsPlayed(){
        return this.roundsPlayed++;
    },
    resetRoundsPlayed(){
        this.roundsPlayed = 0;
        return this.roundsPlayed
    },
    setRandomMachineGuess(){
        this.randomMachineGuess = Math.floor(Math.random()*2);
        return this.randomMachineGuess;
    },
    updateStats() {
        document.querySelector("#headsCount").textContent = `Heads: ${this.headCount}`;
        document.querySelector("#tailsCount").textContent = `Tails: ${this.tailCount}`;
      },
}