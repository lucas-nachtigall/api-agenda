import express from "express";
import "dotenv/config";
const mysql = require("mysql2");

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

var app = express();

app.get("/", function (req: any, res: any) {
  const connection = mysql.createConnection(process.env.DATABASE_URL);

  connection.query(
    "SELECT * FROM `COMPROMISSO`",
    function (err: any, results: any, fields: any) {
      res.send(results);
    }
  );

  connection.end();
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
