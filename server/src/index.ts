import express from "express";
import { Client, Pool } from "pg";

const app = express();
const port = 3000; //TODO: Move to env
const pool = new Pool({
    user: "postgres",
    password: "password123123",
    host: "localhost",
    port: 5432,
    database: "deadlock-items"
})

console.log(await pool.query("SELECT NOW()"));

app.listen(port, () => {
    console.log("Listening on port:", port);
})