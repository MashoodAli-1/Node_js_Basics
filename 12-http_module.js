// const http = require("http");

// // console.log(http);

// /**
//  * @dev createSever accepts a callack as parameter
//  * @param (req,res) req for handling incomming client request res for the server response
//  *
//  * */

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("this is our homepage");
//   }
//   if (req.url === "/about") {
//     res.end("here is our about section");
//   }
//   res.end(
//     `<h1>Ooops! </h1>
//     <p>We can't seem to find the page you are looking for.</p>
//     <a href="/">back home</a>
//     `
//   );
// });

// //? listen to port 5000.
// server.listen(3000);

const http = require("http");

const server = http.createServer((req, res) => {
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(3000);
