import express from "express";
import cookieParser from "cookie-parser";
import http from "http";
import path from "path";
import cors from "cors";
import morgan from "morgan";
/* import helmet from "helmet"; */
import authRouter from "./router/auth.js";
import postsRouter from "./router/posts.js";
import { config } from "./config.js";

const __dirname = path.resolve();
const app = express();

app.use(express.json());
/* app.use(helmet()); */
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "build"), { cacheControl: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get("/dir/image/:imageName", function (req, res) {
  let imgName = req.params.imageName;
  res.sendFile(path.join(__dirname, "/dir/image", imgName));
});

app.use("/auth", authRouter);
app.use("/posts", postsRouter);
app.get("/test", (req, res, next) => {
  const refreshToken = req.cookies.token;
  console.log(req.cookies, " 쿠키1");
  console.log(refreshToken, "쿠키2");
  console.log(req.headers.cookie, "쿠키3");
  res.status(200).json({ message: refreshToken });
});
app.use((req, res, next) => {
  res.sendStatus(404);
});

app.get("*", (req, res) => {
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now(),
  });
  res.sendFile(path.join(__dirname, "/build/index.html"));
});

http.createServer(app).listen(config.host.port, () => {
  console.log(`app listening at ${config.host.port}`);
});
