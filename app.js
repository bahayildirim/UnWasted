const express = require("express");
const app = express();
const sqlite3 = require("sqlite3");
const cors = require("cors");

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.use(cors());

//Connect to the database or create one if it doesn't exist
var db = new sqlite3.Database(
  "./db/UnWasted.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err && err.code === "SQLITE_CANTOPEN") {
      createDatabase();
    } else if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the user info database.");
    }
  }
);

//Creates a new database if one doesn't exist
function createDatabase() {
  var newdb = new sqlite3.Database("./db/UnWasted.db", (err) => {
    if (err) {
      console.log("Getting error " + err);
      // eslint-disable-next-line no-undef
      exit(1);
    }
    createTables(newdb);
  });
}

//Creates the tables for the database
function createTables(newdb) {
  newdb.exec(`CREATE TABLE users (
    Id INTEGER PRIMARY KEY AUTOINCREMENT
    type TEXT NOT NULL,
    fullname TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone_no INTEGER,
    address TEXT,
    logo TEXT
  );`);
}

//Registers user to database
app.post("/register", (req, res) => {
  const fullname = req.body.fullname;
  const password = req.body.password;
  const email = req.body.email;
  const phone_no = req.body.phone_no;
  const address = req.body.address;
  const logo = req.body.logo;
  const type = req.body.type;
  db.run(
    `INSERT INTO users (fullname, password, email, phone_no, address, logo, type) VALUES ("${fullname}", "${password}", "${email}", "${phone_no}", "${address}", "${logo}", "${type}")`,
    (err) => {
      if (err) {
        console.log(err.message);
      }
    }
  );
  console.log(
    "Account registered: " + fullname + " " + password + " " + email,
    " ",
    phone_no,
    " "
  );
  res.redirect("/login");
});

//Checks login information and either redirects to login page or to home page depending on a successful login
app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.get(
    `SELECT * FROM Users WHERE email = "${email}" AND password = "${password}"`,
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
  res.status(200).redirect("/");
});

app.put("/profile", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.run(
    `UPDATE Users SET email = ${email}, password = ${password} WHERE `,
    (err) => {
      if (err) {
        console.log(err.message);
      }
    }
  );
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
