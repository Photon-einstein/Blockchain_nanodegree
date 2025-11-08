//  These are the fetch examples from  the video:

// Note that we have to use a Node package called node-fetch to use fetch on the backend
const fetch = require("node-fetch");

// GET

fetch("http://localhost:3000")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

fetch("http://localhost:3000/longexample")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

fetch("http://localhost:3000/nopage")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// POST/PUT/PATCH/DELETE WITH OPTIONS

fetch("http://localhost:3000", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Norman" }),
})
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// PUT WITH OPTIONS
fetch("http://localhost:3000", {
  method: "PUT",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Alice" }),
})
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// PATCH WITH OPTIONS
fetch("http://localhost:3000", {
  method: "PATCH",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Tomas" }),
})
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));

// DELETE WITH OPTIONS
fetch("http://localhost:3000", {
  method: "DELETE",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Delta" }),
})
  .then((response) => {
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
