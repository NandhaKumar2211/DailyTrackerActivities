async function asyncAdd(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

async function asyncSubtract(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a - b);
    }, 2000);
  });
}
async function performAsyncCalculations() {
  console.log("Async Add:", await asyncAdd(9, 3));
  console.log("Async Subtract:", await asyncSubtract(20, 15));
}

performAsyncCalculations();