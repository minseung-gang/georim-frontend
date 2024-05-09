import mysql from "mysql2";
import { config } from "../config.js";

const { host, port, user, database, password } = config.db;

const pool = mysql.createPool({
  host,
  port,
  user,
  database,
  password,
});

export const db = pool.promise();
