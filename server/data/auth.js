import { db } from "../db/database.js";

export async function findByUsername(username) {
  return db
    .execute("SELECT * FROM users WHERE username=?", [username])
    .then((result) => {
      return result[0][0];
    });
}

export async function findById(id) {
  return db
    .execute("SELECT * FROM users WHERE id=?", [id])
    .then((result) => result[0][0]);
}

export async function createUser(user) {
  const { username, password } = user;
  db.execute("INSERT INTO users (username, password) VALUES (?,?)", [
    username,
    password,
  ]).then((result) => result[0].insertId);
}
