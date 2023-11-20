function checkEvenOdd(numbers) {
    const evenNumbers = [];
    const oddNumbers = [];
  
    for (const number of numbers) {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      } else {
        oddNumbers.push(number);
      }
    }
  
    return { evenNumbers, oddNumbers };
  }
  const numbers = [10, 20, 35, 45, 0];
  const results = checkEvenOdd(numbers);
  
  console.log('Even numbers:', results.evenNumbers);
  console.log('Odd numbers:', results.oddNumbers);