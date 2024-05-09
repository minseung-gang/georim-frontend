import dotenv from "dotenv";

dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    key: {
      access: required("JWT_ACCESS_TOKEN_KEY"),
      refresh: required("JWT_REFRESH_TOKEN_KEY"),
    },
    expiresInSec: {
      access: parseInt(required("JWT_ACCESS_EXPIRES_SEC")),
      refresh: parseInt(required("JWT_REFRESH_EXPIRES_SEC")),
    },
  },

  bcrypt: {
    saltRounds: parseInt(required("BCRYPT_SALT_ROUNDS", 400)),
  },
  host: {
    port: parseInt(required("HOST_PORT")),
  },
  db: {
    host: required("DB_HOST"),
    port: required("DB_PORT"),
    user: required("DB_USER"),
    database: required("DB_DATABASE"),
    password: required("DB_PASSWORD"),
  },
};
