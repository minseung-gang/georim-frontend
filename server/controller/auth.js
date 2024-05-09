import bcrypt from "bcrypt";
import * as userRepository from "../data/auth.js";
import * as Token from "../utils/token.js";
import { config } from "../config.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

export async function signup(req, res) {
  const { username, password } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  console.log(hashed);
  const userId = await userRepository.createUser({
    username,
    password: hashed,
  });

  res.status(201).json({ username });
}

export async function login(req, res) {
  const { username, password } = req.body;

  const user = await userRepository.findByUsername(username);

  if (!user) {
    return res
      .status(401)
      .json({ ok: false, message: "Invalid user or password" });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res
      .status(401)
      .json({ ok: false, message: "Invalid user or password" });
  }

  const accessToken = Token.setAccessToken(user.id);

  const refreshToken = Token.setAccessToken();
  console.log(accessToken, "로그인 토큰");
  console.log(refreshToken, "로그인 리프레시");

  // refresh token 쿠키로 전달
  res.cookie("token", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    ok: true,
    token: accessToken,
    expiresIn: config.jwt.expiresInSec.access,
    username,
  });
}

export async function logout(req, res, next) {
  try {
    res.clearCookie("token");

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Logout error:", error);

    res.status(500).json({ ok: false });
  }
}
export async function checkAuth(req, res, next) {
  const user = await userRepository.findById(req.userId);
  const refreshToken = req.headers.cookie;
  console.log("user", user);
  console.log("refresh", refreshToken);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ token: req.token, username: user.username });
}
