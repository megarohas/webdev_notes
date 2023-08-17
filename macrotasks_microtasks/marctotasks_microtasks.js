// MACROTASKS MICROTASKS

// MACRO:
// 	setTimeout(()=>{console.log('setTimeout')},0);
// 	setImmediate(()=>{console.log('setImmediate')});
// 	setInterval(()=>{console.log('setInterval');}, 5000);
// 	I/O: console.log('console.log');
// 	UI rendering
//
// MICRO:
// 	Promise.resolve('Promise').then(response => {console.log(response)})
// 	process.nextTick(()=>{console.log('process.nextTick');})
// 	queueMicrotask(()=>{console.log('queueMicrotask');})
// 	MutationObserver

setTimeout(() => {
  console.log("setTimeout");
}, 0);
setInterval(() => {
  console.log("setInterval");
}, 5000);
setImmediate(() => {
  console.log("setImmediate");
});
console.log("console.log");

Promise.resolve("Promise").then((response) => {
  console.log(response);
});
process.nextTick(() => {
  console.log("process.nextTick");
});
queueMicrotask(() => {
  console.log("queueMicrotask");
});
