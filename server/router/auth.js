import express from "express";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";
import { isAuth, refresh } from "../middleware/auth.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("username should be at least 5 characters"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("password should be at least 5 characters"),
  validate,
];

router.post("/login", validateCredential, authController.login);
router.post("/signup", validateCredential, authController.signup);
router.post("/logout", authController.logout);
router.post("/refresh", refresh);
router.get("/me", isAuth, authController.checkAuth);

export default router;
