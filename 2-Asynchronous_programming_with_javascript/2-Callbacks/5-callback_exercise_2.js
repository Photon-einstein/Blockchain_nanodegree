// Callback Challenge 2: Secret Number

// 1. Generates a random number
// 2. Waits three seconds, then adds 5 to the random number
// 3. Every two seconds, adds 2 to the random number for a total of 6 seconds
// 4. Subtracts 3
// 5. Waits four seconds, and logs the resulting number

const generateRandomNumber = () => {
  let number = Math.round(Math.random() * 10);
  console.log(`Initial number: ${number}`);

  // Step 2: Wait 3 seconds, then add 5
  setTimeout(() => {
    number += 5;
    console.log(`After adding 5: ${number}`);

    // Step 3: Every 2 seconds, add 2 (for 6 seconds)
    let count = 0;
    const intervalId = setInterval(() => {
      number += 2;
      count++;
      console.log(`After adding 2 (interval ${count}): ${number}`);
      if (count === 3) {
        // 3 times every 2 seconds = 6 seconds
        clearInterval(intervalId);

        // Step 4: Subtract 3
        number -= 3;
        console.log(`After subtracting 3: ${number}`);

        // Step 5: Wait 4 seconds, then log the result
        setTimeout(() => {
          console.log(`Final result after 4 seconds: ${number}`);
        }, 4000);
      }
    }, 2000);
  }, 3000);
};

generateRandomNumber();
