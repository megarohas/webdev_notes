// LET VS VAR

var a = 1;

if (true) {
  var b = 2;
}

console.log(`a: ${a}`);

console.log(`b: ${b}`);

////////////////////////////////////////////////////////////////////////////////

let c = 3;

if (true) {
  let d = 4;
}

console.log(`c: ${c}`);

// console.log(`d: ${d}`);

////////////////////////////////////////////////////////////////////////////////

var e = 5;

if (true) {
  var e = 6;
}

console.log(`e: ${e}`);

////////////////////////////////////////////////////////////////////////////////

let f = 7;

if (true) {
  let f = 8;
}

console.log(`f: ${f}`);

////////////////////////////////////////////////////////////////////////////////

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`i: ${i}`);
  }, 0);
}

////////////////////////////////////////////////////////////////////////////////

for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(`j: ${j}`);
  }, 0);
}

////////////////////////////////////////////////////////////////////////////////

{
  var ii = 0;
  setTimeout(() => {
    console.log(`ii: ${ii}`);
  }, 0);
}

{
  var ii = 1;
  setTimeout(() => {
    console.log(`ii: ${ii}`);
  }, 0);
}

{
  var ii = 2;
  setTimeout(() => {
    console.log(`ii: ${ii}`);
  }, 0);
}

////////////////////////////////////////////////////////////////////////////////

{
  let jj = 0;
  setTimeout(() => {
    console.log(`jj: ${jj}`);
  }, 0);
}

{
  let jj = 1;
  setTimeout(() => {
    console.log(`jj: ${jj}`);
  }, 0);
}

{
  let jj = 2;
  setTimeout(() => {
    console.log(`jj: ${jj}`);
  }, 0);
}

////////////////////////////////////////////////////////////////////////////////

const logger = (text) => {
  return () => {
    console.log(text);
  };
};

{
  var iii = 0;
  const tempLogger = logger(`iii: ${iii}`);
  setTimeout(() => {
    tempLogger();
  }, 0);
}

{
  var iii = 1;
  const tempLogger = logger(`iii: ${iii}`);
  setTimeout(() => {
    tempLogger();
  }, 0);
}

{
  var iii = 2;
  const tempLogger = logger(`iii: ${iii}`);
  setTimeout(() => {
    tempLogger();
  }, 0);
}
