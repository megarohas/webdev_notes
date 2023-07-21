// CLOSURES

const generateFunc = () => {
  const name = "megarohas";

  const logName = () => {
    console.log(name);
  };

  return logName;
};

const generatedFunc = generateFunc();

generatedFunc();

////////////////////////////////////////////////////////////////////////////////

const generateIncrementer = (x) => {
  const summ = (y) => {
    return x + y;
  };

  return summ;
};

const summ1and = generateIncrementer(1);
const summ5and = generateIncrementer(5);

console.log(summ1and(3));
console.log(summ5and(3));
