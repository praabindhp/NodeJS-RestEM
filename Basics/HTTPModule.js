const http = require("http");

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('New Connection...');
// });

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/users") {
    res.write(JSON.stringify(["Praabindh", "Pradeep", "Bindhu", "Jai", "Prathyush"]));
    res.end();
  }

  if (req.url === "/api/numbers") {
    res.write(JSON.stringify([1, 2, 3, 4, 5]));
    res.end();
  }

});

server.listen(3000);

console.log("Listening Port 3000...");
