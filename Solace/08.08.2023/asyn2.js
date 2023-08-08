function asyncFunc() {
  console.log("Asynchronous function started");
  setTimeout(() => {
    for (let i = 1; i <= 3; i++) {
      console.log(`Asynchronous function: ${i}`);
    }
    console.log("Asynchronous function completed");
  }, 2000);
}

asyncFunc();
console.log("Program completed");