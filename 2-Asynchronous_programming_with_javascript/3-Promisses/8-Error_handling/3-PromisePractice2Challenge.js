// Build out this mock API request so that does the following:
// 1. Gets the user information and turns the JSON into a JavaScript object
// 2. Gets the event message and turns the JSON into a JavaScript object
// 3. Prints out: "Thank you, Ralph S. Mouse, your account has been updated"

const userJson = '{"name":"Ralph S. Mouse","id":"238jflK3"}';
const eventMessageJson = '{"body":"Your account has been updated!"}';

// Simulated async API calls
const getUserInformation = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(JSON.parse(userJson)), 1000)
  );

const getEventMessage = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(JSON.parse(eventMessageJson)), 1000)
  );

// Promise chain version
getUserInformation()
  .then((user) => getEventMessage().then((eventMsg) => ({ user, eventMsg })))
  .then(({ user, eventMsg }) => {
    // Normalize final message (remove trailing punctuation for required output)
    const cleanBody = eventMsg.body.replace(/[.!?]\s*$/, "");
    console.log(`Thank you, ${user.name}, ${cleanBody.toLowerCase()}`);
  })
  .catch((err) => console.error("Error:", err.message));

// Optional: async/await version (commented)
// (async () => {
//   try {
//     const user = await getUserInformation();
//     const eventMsg = await getEventMessage();
//     const cleanBody = eventMsg.body.replace(/[.!?]\s*$/, "");
//     console.log(`Thank you, ${user.name}, ${cleanBody.toLowerCase()}`);
//   } catch (e) {
//     console.error("Error:", e.message);
//   }
// })();
