function Calculation(operation, a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        reject(new Error('Invalid arguments'));
      } else {
        let result;
        switch (operation) {
          case 'add':
            result = a + b;
            break;
          case 'subtract':
            result = a - b;
            break;
          case 'multiply':
            result = a * b;
            break;
          case 'divide':
            if (b === 0) {
              reject(new Error('Division by zero is not allowed.'));
            } else {
              result = a / b;
            }
            break;
          case 'percentage':
            result = (a * b) / 100;
            break;
          default:
            reject(new Error('Invalid operation. Supported operations are: add, subtract, multiply, divide, percentage.'));
            return;
        }
        resolve(result);
      }
    }, 1000);
  });
}

// Usage example:
async function calculate() {
  try {
    const add = await Calculation('add', 5, 3);
    console.log('Addition:', add);

    const sub = await Calculation('subtract', 10, 4);
    console.log('Subtract:', sub);

    const mul = await Calculation('multiply', 6, 2);
    console.log('Multiplication:', mul);

    const div = await Calculation('divide', 15, 3);
    console.log('Division:', div);

    const percent = await Calculation('percentage', 200, 20);
    console.log('Percentage:', percent);
  } catch (error) {
    console.error(error.message);
  }
}

calculate();
