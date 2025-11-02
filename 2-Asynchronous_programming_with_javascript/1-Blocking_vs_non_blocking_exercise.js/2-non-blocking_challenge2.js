// Task 2 - print each word of this quote every second using built javascript method setInterval. Print the quote source all at once afterwards

// Tip: To stop a setInterval - call clearInterval()
// Tip: To pass arguments to the function setInterval is calling, add them as a 3rd (and 4th if you need it) argument to setInterval, after the milliseconds

// "The art of programming is the skill of controlling complexity."
// "-- Marijn Haverbeke, Eloquent JavaScript"

const quote = "The art of programming is the skill of controlling complexity.";
const reference = "-- Marijn Haverbeke, Eloquent JavaScript";

// Function that returns a closure to maintain currentIndex state
function createPrintWordFunction(words) {
  let currentIndex = 0;

  return function () {
    if (currentIndex < words.length) {
      console.log(words[currentIndex]);
      currentIndex++;
    } else {
      // Stop the interval when all words are printed
      clearInterval(intervalId);
      // Print the reference all at once
      console.log(reference);
    }
  };
}

// Create the print function with enclosed state
const printWord = createPrintWordFunction(quote.split(" "));

// Start the interval to print each word every second
const intervalId = setInterval(printWord, 1000);
