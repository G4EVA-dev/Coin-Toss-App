import confetti from 'https://cdn.skypack.dev/canvas-confetti';

 function runConfetti() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation with setTimeout
      setTimeout(() => {
        try {
          // Confetti logic here
          confetti({
            particleCount : 300,
          });
          
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

  export const startCelebration = async function () {
    try {
      const result = await runConfetti();
      console.log(result);
    } catch (error) {
      console.error('Error running confetti:', error);
    }
  }
  