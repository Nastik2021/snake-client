//   const { connect } = require('./client');     //might not need this here.,.
//Setup User Interface so that we can handle user inout via stdin

const { stdin } = require("process");

let connection;   //stores the active TCP object


const handleUserInput = function(key) {
  // process.stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
    
  if (key === "w" || key === '\u001b[A') {
    connection.write("Move: up");
  }

  if (key === "a" || key === '\u001b[D') {
    connection.write("Move: left");
  }
    
  if (key === "s" || key === '\u001b[B') {
    connection.write("Move: down");
  }

  if (key === "d" || key === '\u001b[C') {
    connection.write("Move: right");
  }

  if (key === "p") {
    connection.write("Say: Let's play!!!");
  }

  // });

  // return stdin;
};


// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


// setupInput();

module.exports = { setupInput };
  