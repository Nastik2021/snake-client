//   const { connect } = require('./client');     //might not need this here.,.
//Setup User Interface so that we can handle user inout via stdin

const { stdin } = require("process");

let connection;   //stores the active TCP object


const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    
    if (key === "w") {
      connection.write("Move: up");
    }

    if (key === "a") {
      connection.write("Move: left");
    }
    
    if (key === "s") {
      connection.write("Move: down");
    }

    if (key === "d") {
      connection.write("Move: right");
    }
    
  });

  return stdin;
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
  