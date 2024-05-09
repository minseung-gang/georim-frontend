import jwt from "jsonwebtoken";
import { config } from "../config.js";
import * as userRepository from "../data/auth.js";

// 액세스 토큰 생성
export function setAccessToken(id) {
  return jwt.sign({ id }, config.jwt.key.access, {
    expiresIn: config.jwt.expiresInSec.access,
  });
}
// 리프레시 토큰 생성
export function setRefreshToken() {
  return jwt.sign({}, config.jwt.key.refresh, {
    expiresIn: "7d",
  });
}

export function getRefreshToken(req) {
  const refreshToken = req.headers.cookie; // 쿠키 문자열 가져오기
  const refreshTokenValue = refreshToken ? refreshToken.split("=")[1] : null; // 쿠키 값 추출

  return refreshTokenValue;
}

export async function verifyAccessToken(token) {
  return jwt.verify(token, config.jwt.key.access, async (error, decoded) => {
    if (error) {
      return {
        ok: false,
        message: error.message, // jwt가 만료되었다면 'jwt expired'
      };
    } else {
      try {
        const user = await userRepository.findById(decoded.id);

        if (!user) {
          return {
            ok: false,
            message: "User not found",
          };
        } else {
          return {
            ok: true,
            id: user.id,
          };
        }
      } catch (error) {
        return {
          ok: false,
          message: error.message,
        };
      }
    }
  });
}
export async function verifyRefreshToken(token) {
  return jwt.verify(token, config.jwt.key.refresh, async (error, decoded) => {
    if (error) {
      return {
        ok: false,
        message: error.message, // jwt가 만료되었다면 'jwt expired'
      };
    } else {
      return {
        ok: true,
      };
    }
  });
}
