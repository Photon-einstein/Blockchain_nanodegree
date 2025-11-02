const mockAPI = (returnValue) => (arg, success, failure) => {
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber % 2 === 0) {
      success(returnValue);
    } else {
      failure(`Error: Random number ${randomNumber} is odd.`);
    }
  }, 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);
const handleError = (error) => {
  // you can put more custom logic here
  console.log(error);
};

const runCallbacks = () => {
  fetchSession(
    "session-id",
    (session) => {
      fetchUser(
        session,
        (user) => {
          fetchUserFavorites(
            user,
            (favorites) => {
              console.log(favorites);
            },
            handleError
          );
        },
        handleError
      );
    },
    handleError
  );
};

runCallbacks();
