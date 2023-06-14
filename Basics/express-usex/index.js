const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const logger = require("./middleware/logger");
const loader = require("./middleware/loader");
const Joi = require("joi"); // Class : Joi
const config = require("config");
const courses = require("./routes/courses");
const home = require("./routes/home");
const posts = require("./routes/posts");
const users = require("./routes/users");
const numbers = require("./routes/numbers");

app.set("view engine", "pug");
app.set("views", "./views");

const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");

// Middle Ware Functions

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

// Routes

app.use('/', home);
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/courses', courses);
app.use('/api/numbers', numbers);

// Configuration

console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));

// console.log("Mail Password: " + config.get("mail.password"));
// export app_password=12345678

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get("env")}`);

if (app.get("env") === "development"){
  app.use(morgan("tiny"));
  startupDebugger("Morgan Enabled...");
}

// DB Workings...

dbDebugger("Connected To The Database...");

app.use(loader);
app.use(logger);

app.use(function(req, res, next){
  console.log('Authenticating...');
  next();
});

// Environment Variable

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening On 🛳  Port ${port}...`));
