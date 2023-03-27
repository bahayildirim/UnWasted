const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//Connect to the user database or create one if it doesn't exist
var db = new sqlite3.Database(
  "./db/userInfo.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      createUserDatabase();
    } else if (err) {
      console.error(err.message);
    }
    console.log("Connected to the user info database.");
  }
);

//Connect to the donator database or create one if it doesn't exist
var db = new sqlite3.Database(
  "./db/donatorInfo.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      createDonatorDatabase();
    } else if (err) {
      console.error(err.message);
    }
    console.log("Connected to the donator info database.");
  }
);

//Registers user to database
app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  db.run(
    `INSERT INTO Users (username, password, email) VALUES ("${username}", "${password}", "${email}")`,
    (err) => {
      if (err) {
        console.log(err.message);
        res.send(false);
        return;
      }
    }
  );
  console.log("Account registered: " + username + " " + password + " " + email);
  res.send(true)
});

//Checks login information and either redirects to login page or to home page depending on a successful login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.get(
    `SELECT email, password FROM Users WHERE email = "${email}" AND password = "${password}"`,
    (err, row) => {
      if (err) {
        console.log(err.message);
      } else {
        try {
          if (row.email != null && row.password != null) {
            console.log("Login successful: " + row.email + " " + row.password);
            res.send(true);
            return;
          }
        } catch (err) {
          console.log("Login failed, mail or password is wrong.");
          console.log(err.message);
          res.send(false);
          return;
        }
      }
    }
  );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

//Creates a new user database if one doesn't exist
function createUserDatabase() {
  var newdb = new sqlite3.Database("./db/userInfo.db", (err) => {
    if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    createUserTables(newdb);
  });
}

//Creates the tables for the user database
function createUserTables(newdb) {
  newdb.exec(`CREATE TABLE users (
    id NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );`);
}

//Creates a new donator database if one doesn't exist
function createDonatorDatabase() {
  var newdb = new sqlite3.Database("./db/donatorInfo.db", (err) => {
    if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    createDonatorTables(newdb);
  });
}

//Creates the tables for the donator database
function createDonatorTables(newdb) {
  newdb.exec(`CREATE TABLE users (
    id NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone_no INTEGER,
    address TEXT,
    logo_filename TEXT
  );`);
}