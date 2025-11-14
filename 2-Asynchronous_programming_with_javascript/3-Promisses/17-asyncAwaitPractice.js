const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 19);
  });

const promise2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 23);
  });

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"

// REMINDER: If you want to use Promise.allSettled in your answer, you will need to run the following command in your terminal window first:
// source  update_node.sh

// your code here
Promise.allSettled([promise1(), promise2()])
  .then((results) => {
    let sum = 0;
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        sum += result.value;
      }
    });
    console.log("The answer to life, the universe, and everything is: ", sum);
  })
  .catch((error) => console.log(error));

// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"

// your async/await code here

async function getAnswerToLife() {
  try {
    const value1 = await promise1();
    const value2 = await promise2();
    let sum = value1 + value2;
    console.log("The answer to life, the universe, and everything is: ", sum);
  } catch (error) {
    console.log(error);
  }
}

getAnswerToLife();
// getAnswerToLife().catch(err => console.log(err));
