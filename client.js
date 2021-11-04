const net = require("net");
const { IP, PORT } = require("./constants");
const { setTimeout } = require("timers/promises");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,    // IP address here,
    port: PORT                // PORT number here,
  });

  conn.setEncoding("utf8");

  //connect event triggered on a connection as soon as its successfully established
  conn.on("connect", () => {
    console.log("Successfully connected to game server!!!");  //msg printed when the connection is established
  });


  conn.on('connect', () => {
    conn.write("Name: ANA");
  });


  
  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 2000);
  // });


  // conn.on('connect', () => {
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 2000);
  // });




  // conn.on("data", (data) => {
  //   console.log(data.toString());
  //   conn.end();
  // });

  
  // interpret incoming data as text
  // conn.setEncoding("utf8");

  return conn;
};



// console.log("Connecting ...");
// connect();

module.exports = {connect};
