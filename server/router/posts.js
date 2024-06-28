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
      // 파일 업로드 위치
      cb(null, "./dir/image");
    },
    filename: function (req, file, cb) {
      // 파일명
      cb(null, file.originalname);
    },
  }),
});

router.get("/promotion", postController.getPromotions);
router.get("/promotion/:id", postController.getPromotion);
// GET /post
// GET /posts?username=:username
router.get("/", postController.getPosts);

// GET /posts/:id
router.get("/:id", postController.getPost);

// GET /posts/promotion

// POST /posts
router.post(
  "/",
  isAuth,
  upload.fields([{ name: "img" }, { name: "promotionImg" }]),
  postController.createPost
);

// PUT /posts/:id
router.put(
  "/:id",
  isAuth,
  upload.fields([{ name: "img" }, { name: "promotionImg" }]),
  postController.updatePost
);

// DELETE /posts/:id
router.delete("/:id", isAuth, postController.deletePost);

export default router;
