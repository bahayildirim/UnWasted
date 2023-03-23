const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//Connect to the database or create one if it doesn't exist
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

//Creates a new database if one doesn't exist
function createUserDatabase() {
  var newdb = new sqlite3.Database("./db/userInfo.db", (err) => {
    if (err) {
      console.log("Getting error " + err);
      exit(1);
    }
    createTables(newdb);
  });
}

//Creates the tables for the database
function createTables(newdb) {
  newdb.exec(`CREATE TABLE users (
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone_no INTEGER,
    address TEXT,
    logo_filename TEXT
  );`);
}

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
      }
    }
  );
  console.log("Account registered: " + username + " " + password + " " + email);
  res.redirect("/");
});

//Checks login information and either redirects to login page or to home page depending on a successful login
app.get("/login", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  db.get(
    `SELECT email, password FROM Users WHERE email = "${email}" AND password = "${password}"`,
    (err, row) => {
      if (err) {
        console.log(err.message);
      } else {
        try {
          if (row.email != null && row.password != null) {
            console.log("Login successful: " + row.email + " " + row.password);
          }
        } catch (err) {
          console.log("Login failed, mail or password is wrong.");
          console.log(err.message);
        }
      }
    }
  );
  res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
