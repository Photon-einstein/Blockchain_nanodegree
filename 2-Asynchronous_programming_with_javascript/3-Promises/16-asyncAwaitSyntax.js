const promise1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 100);
  });

async function exampleAsync() {
  const value1 = await promise1();
  console.log("waited for the value to be ready", value1);

  return value1;
}

exampleAsync();
