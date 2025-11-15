const mockAPI = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), 500);
  });
};

const fetchSession = () => mockAPI({ id: "123765" });
const fetchUser = (session) => mockAPI({ firstname: "Bob" }); // session available if needed
const fetchUserFavorites = (user) => mockAPI(["lions", "tigers", "bears"]);

const runPromises = () => {
  fetchSession()
    .then((session) => {
      console.log("session:", session);
      return fetchUser(session);
    })
    .then((user) => {
      console.log("user:", user);
      return fetchUserFavorites(user);
    })
    .then((favorites) => {
      console.log("favorites:", favorites);
    })
    .catch((err) => {
      console.error("error:", err);
    });
};

runPromises();
