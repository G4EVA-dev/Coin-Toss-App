import confetti from 'https://cdn.skypack.dev/canvas-confetti'; //For Celebration
function runConfetti() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
      try {
        // Confetti logic here
        confetti();
        
        // Resolve the promise after the confetti has run
        resolve('Confetti finished!');
      } catch (error) {
        // Reject the promise if there is an error
        alert("You Guessed Correctlly")
        reject(error);
      }
    }, 1500); // 1 seconds delay
  });
}

async function startCelebration() {
  try {
    const result = await runConfetti();
    console.log(result);
  } catch (error) {
    console.error('Error running confetti:', error);
  }
}

// *****!Variables*****
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flipCoin");
let resetBtn = document.querySelector("#resetGame");
let headGuessBtn = document.getElementById("headGuess");
let tailGuessBtn = document.getElementById("tailGuess");
//! Sound Effects
let coinSound = new Audio("/public/audio/coin-flip-shimmer-85750.mp3")
let celebrateSound = new Audio("/public/audio/Children Yay Sound Effect (HD).mp3");
let failureSound = new Audio("/public/audio/fail-144746.mp3");

//These lines initialize the variables heads and tails to keep track of the number of times heads and tails appear.
let heads = 0;
let tails = 0;
let roundsPlayed = 0;
let playerGuess = null;

//!Check if the user has played before
// let previousResults = getCookie("coinGameResults");
// if (previousResults) {
//   let parsedResults = JSON.parse(previousResults);
//   let Heads = parsedResults.heads;
//   let Tails = parsedResults.tails;
//   console.log("Heads:", Heads);
//   console.log("Tails:", Tails);
// } else {
//   console.log("No previous results found.");
// }

// Add event listeners to the guess buttons
headGuessBtn.addEventListener("click", () => {
  playerGuess = 1;
  headGuessBtn.style.backgroundColor = "lightblue"; // Indicate the selected guess
  tailGuessBtn.style.backgroundColor = ""; // Reset the other button's style
  console.log("You Picked Heads");
  updateStats();
});

tailGuessBtn.addEventListener("click", () => {
  playerGuess = 0;
  tailGuessBtn.style.backgroundColor = "lightblue"; // Indicate the selected guess
  headGuessBtn.style.backgroundColor = ""; // Reset the other button's style
  console.log("You Picked Tailss");
  updateStats();
});

// !Game Logic
flipBtn.addEventListener("click", () => {
  if (playerGuess === null) {
    alert("Please make a guess before flipping the coin!");
    
    return; // Exit the function if no guess has been made
  }

  coinSound.play();

  let i = Math.floor(Math.random() * 2);
  console.log(i);
  coin.style.animation = "none";

  if (i) {
    setTimeout(() => {
      coin.style.animation = "spin-head 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-tail 3s forwards";
    }, 100);
    tails++;
  }

  roundsPlayed++;

  // Check if the player's guess was correct
  setTimeout(() => {
    if (i === playerGuess) {
      celebrateSound.play();
      startCelebration();
      

    } else {
      failureSound.play();
    }
  }, 3000);

  //! Checks number of time Player plays.
  if (roundsPlayed === 5) {
    updateStats();
    storeResultsInCookie();
    uploadResultsToServer();
    flipBtn.disabled = true;

    resetBtn.addEventListener("click", () => {
      coin.style.animation = "none";
      heads = 0;
      tails = 0;
      updateStats();
      flipBtn.disabled = false;
    });
  } else {
    setTimeout(updateStats, 3000);
    disableButton();
  }
});

//This function updates the HTML to display the current counts of heads and tails.
function updateStats() {
  document.querySelector("#headsCount").textContent = `Heads: ${heads}`;
  document.querySelector("#tailsCount").textContent = `Tails: ${tails}`;
}

//This function disables the flip button for 3 seconds to prevent multiple clicks during animation.
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
// When clicked, it resets the animation, resets the counters for heads and tails, and updates the stats.

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
  playerGuess = null;
});

//!Function to store result is Cookie
function storeResultsInCookie() {
  let results = {
    heads: heads,
    tails: tails,
  };
  document.cookie = `coinGameResults=${JSON.stringify(
    results
  )};expires=${new Date(Date.now() + 604800000).toUTCString()};path=/;Secure`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

//! Function to send game results to the server using fetch
// function uploadResultsToServer() {
//   let results = {
//     heads: heads,
//     tails: tails,
//   };
//   fetch("/results", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(results),
//   })
//     .then((response) => response.text())
//     .then((data) => console.log(data)) // Handle response from server
//     .catch((error) => console.error(error));
// }
