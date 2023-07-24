// EVENT LOOP

let a = ["blah"];

setTimeout(() => {
  console.log("1");
}, 0);

Promise.resolve("2").then((value) => {
  console.log(value);
});

Promise.resolve("2.5").then((value) => {
  console.log(value);
});

a.forEach((item) => {
  console.log("3");
});

console.log("4");

// macrotask (task)
// all microtasks (jobs)
