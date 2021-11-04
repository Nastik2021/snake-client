const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
// connect();

setupInput(connect());


// const handleUserInput = function() {
//   process.stdin.on('data', (key) => {
//     process.stdout.write('.');
//     if (key === '\u0003') {
//       //console.log("exiting...");
//       process.exit();
//     }
//   });
// };


// // setup interface to handle user input from stdin
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };


// setupInput();
  

