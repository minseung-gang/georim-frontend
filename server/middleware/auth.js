import jwt from "jsonwebtoken";
import * as userRepository from "../data/auth.js";
import { config } from "../config.js";
import * as Token from "../utils/token.js";

export const isAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!(authHeader && authHeader.startsWith("Bearer"))) {
    // 토큰이 없을 때 리다이렉트
    return res.status(401).send({
      ok: false,
      message: "토큰이 없어요",
    });
  }

  const token = authHeader.split(" ")[1];

  // 토큰이 있을 때 검증
  const user = await Token.verifyAccessToken(token);

  req.userId = user.id; // req.customData
  next();
};

export async function refresh(req, res, next) {
  const { username } = req.query;

  const user = await userRepository.findByUsername(username);
  const refreshToken = req.headers.cookie;

  if (req.headers.cookie) {
    // access토큰이 만료되거나 새로고침되어 없고
    // refresh token은 만료되지 않은 경우 => 새로운 access token을 발급

    const newAccessToken = Token.setAccessToken(user.id);
    const refreshToken = Token.setRefreshToken();

    // 새로 발급한 access token과 원래 있던 refresh token 모두 클라이언트에게 반환합니다.
    res.cookie("token", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).send({
      ok: true,
      accessToken: newAccessToken,
    });
  } else {
    // refresh token이 헤더에 없는 경우
    res.status(400).send({
      ok: false,
      message: "Access token and refresh token are need for refresh!",
    });
  }
}
