import express from "express";
import "dotenv/config";
const mysql = require("mysql2/promise");

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
};

var app = express();

app.get("/", async function (req: any, res: any) {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);

  try {
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `COMPROMISSO`"
    );

    res.send(rows);
  } finally {
    connection.end();
  }
});

if (!module.parent) {
  app.listen(3000);
  console.log("Express started on port 3000");
}

export default app;
