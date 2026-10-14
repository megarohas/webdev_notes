# webdev_notes

Short runnable JavaScript snippets on classic interview topics. Each note is a
single file — run it with Node and compare the output with what you expected.

## Notes

| Note | What it demonstrates |
| --- | --- |
| [`closures/closures.js`](closures/closures.js) | A returned function keeps access to its outer scope; a function factory that adds a fixed number |
| [`event_loop/event_loop.js`](event_loop/event_loop.js) | Order of synchronous code, promise callbacks and `setTimeout` |
| [`macrotasks_microtasks/macrotasks_microtasks.js`](macrotasks_microtasks/macrotasks_microtasks.js) | Which queue `setTimeout`, `setInterval`, `setImmediate`, `process.nextTick`, `Promise.then` and `queueMicrotask` go to, and the resulting order |
| [`let_vs_var/let_vs_var.js`](let_vs_var/let_vs_var.js) | Function vs block scope, redeclaration, and the classic `var` in a loop with `setTimeout` (plus the closure fix) |
| [`reduce/reduce.js`](reduce/reduce.js) | `Array.prototype.reduce` summing an array |

## Run

Any recent Node.js works, no dependencies:

```bash
node closures/closures.js
node event_loop/event_loop.js
node let_vs_var/let_vs_var.js
node reduce/reduce.js
node macrotasks_microtasks/macrotasks_microtasks.js   # keeps running (setInterval) — stop with Ctrl+C
```

For example, `event_loop.js` prints `3`, `4`, `2`, `2.5`, `1`: synchronous code
first, then all microtasks, then the timer.

Written in July–August 2023.

## License

MIT (as declared in `package.json`).
