const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

//Connect to the user database or create one if it doesn't exist
var userdb = new sqlite3.Database(
  "./db/userInfo.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      createUserDatabase();
    } else if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the user info database.");
    }
    
  }
);

//Connect to the donator database or create one if it doesn't exist
var donatordb = new sqlite3.Database(
  "./db/donatorInfo.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code == "SQLITE_CANTOPEN") {
      createDonatorDatabase();
    } else if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the donator info database.");
    }
    
  }
);

//Registers user to database
app.post("/register", (req, res) => {
  const username = req.body.name;
  const password = req.body.pass;
  const email = req.body.email;
  const userType = req.body.userType;
  if (userType == "user") {
    if(username != null && password != null && email != null) {
      userdb.run(
        `INSERT INTO users (username, password, email) VALUES ("${username}", "${password}", "${email}")`,
        (err) => {
          returnRegisterError(err,res);
          return;
        }
      );
    } else {
      missingInformation(res);
      return;
    }
  } else {
    const phone_no = req.body.contact;
    const address = req.body.address;
    const logo_filename = req.body.logo_filename;
    if(username != null && password != null && email != null && phone_no != null
      && address != null) {
      donatordb.run(
        `INSERT INTO donators (username, password, email, phone_no, address, logo_filename) VALUES 
        ("${username}", "${password}", "${email}", ${phone_no}, "${address}", "${logo_filename}")`,
        (err) => {
          returnRegisterError(err,res);
          return;
        }
      );
    } else {
      missingInformation(res);
      return;
    }
  }
  console.log("Account registered: " + username + " " + password + " " + email);
  res.send(true)
});

//Checks login information and either redirects to login page or to home page depending on a successful login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.pass;
  const userType = req.body.userType;
  if (userType == "user") {
    userdb.get(`SELECT email, password FROM users WHERE email = "${email}" AND password = "${password}"`, (err,row) => {
      resolveLogin(err,row,res);
    });
  } else {
    donatordb.get(`SELECT email, password FROM donators WHERE email = "${email}" AND password = "${password}"`, (err,row) => {
      resolveLogin(err,row,res)
    });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

function missingInformation(res) {
  console.log("Enter all necessary information.");
  res.send(false);
}

function returnRegisterError(err,res) {
  if (err) {
    console.log(err.message);
    res.send(false);
  }
}

function resolveLogin(err,row,res) {
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
    id INTEGER PRIMARY KEY,
    key_id INTEGER DEFAULT 1,
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
  newdb.exec(`CREATE TABLE donators (
    id INTEGER PRIMARY KEY,
    key_id INTEGER DEFAULT 1,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone_no INTEGER NOT NULL,
    address TEXT NOT NULL,
    logo_filename TEXT
  );`);
}