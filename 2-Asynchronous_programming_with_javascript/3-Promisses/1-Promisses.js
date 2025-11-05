new Promise((resolve, reject) => {
  console.log("A");

  resolve();
  // reject();
})
  .then(() => {
    console.log("B");
  })
  .catch(() => {
    console.log("C");
  });
