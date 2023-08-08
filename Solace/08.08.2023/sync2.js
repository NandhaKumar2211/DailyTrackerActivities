function syncFunc() {
  console.log("Synchronous function started");
  for (let i = 1; i <= 3; i++) {
    console.log(`Synchronous function: ${i}`);
  }
  console.log("Synchronous function completed");
}
syncFunc();
console.log("Program completed");