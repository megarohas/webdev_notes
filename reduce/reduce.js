// REDUCE

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

let result = 0;

result = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, result);

console.log(`result: ${result}`);
