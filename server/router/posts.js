import express from "express";
import "express-async-errors";
import { body } from "express-validator";
import * as postController from "../controller/posts.js";
import { isAuth } from "../middleware/auth.js";
import { validate } from "../middleware/validator.js";
import multer from "multer";

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    // 파일을 디스크에 저장하기위한 제어기능
    destination: function (req, file, cb) {
      // 파일 업로드위치
      cb(null, "./dir/image");
    },
    filename: function async(req, file, cb) {
      console.log(file, "fileName");
      // 파일명
      cb(null, `${file.originalname}`);
    },
    limits: { fileSize: 1.5 * 1024 * 1024 },
  }),
});

// GET /post
// GET /posts?username=:username
router.get("/", isAuth, postController.getPosts);

// GET /posts/:id
router.get("/:id", isAuth, postController.getPost);

// POST /posts
router.post("/", isAuth, upload.single("img"), postController.createPost);

// PUT /posts/:id
router.put("/:id", isAuth, upload.single("img"), postController.updatePost);

// DELETE /posts/:id
router.delete("/:id", isAuth, postController.deletePost);

export default router;
