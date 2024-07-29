import documentElementStore from "../../stores/documentElementStore";
import { headClickAction } from "./components/headGuessBtn";
import { tailClickAction} from "./components/tailGuessBtn";
import { startGame } from "./components/gameLogic";


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


documentElementStore.headGuessBtn.addEventListener("click", headClickAction);
documentElementStore.tailGuessBtn.addEventListener("click", tailClickAction);
documentElementStore.coin.addEventListener("click", startGame);


  //! Checks number of time Player plays.
//   if (roundsPlayed === 5) {
//     updateStats();
//     storeResultsInCookie();
//     uploadResultsToServer();
//     flipBtn.disabled = true;

//     resetBtn.addEventListener("click", () => {
//       coin.style.animation = "none";
//       heads = 0;
//       tails = 0;
//       updateStats();
//       flipBtn.disabled = false;
//     });
//   } else {
//     setTimeout(updateStats, 3000);
//     disableButton();
//   }

//This function updates the HTML to display the current counts of heads and tails.
// function updateStats() {
//   document.querySelector("#headsCount").textContent = `Heads: ${heads}`;
//   document.querySelector("#tailsCount").textContent = `Tails: ${tails}`;
// }

//This function disables the flip button for 3 seconds to prevent multiple clicks during animation.
// function disableButton() {
//   flipBtn.disabled = true;
//   setTimeout(function () {
//     flipBtn.disabled = false;
//   }, 3000);
// }
// When clicked, it resets the animation, resets the counters for heads and tails, and updates the stats.

// resetBtn.addEventListener("click", () => {
//   coin.style.animation = "none";
//   heads = 0;
//   tails = 0;
//   updateStats();
//   playerGuess = null;
// });

// //!Function to store result is Cookie
// function storeResultsInCookie() {
//   let results = {
//     heads: heads,
//     tails: tails,
//   };
//   document.cookie = `coinGameResults=${JSON.stringify(
//     results
//   )};expires=${new Date(Date.now() + 604800000).toUTCString()};path=/;Secure`;
// }

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

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
 //}

