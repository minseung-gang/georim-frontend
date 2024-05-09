import * as postRepository from "../data/posts.js";
import fs from "fs";
import path from "path";

export async function getPosts(req, res) {
  const username = req.query.username;
  const category = req.query.category;

  const data = await (username
    ? postRepository.getAllByUsername(username)
    : postRepository.getAllByCategory(category));

  res.status(200).json(data);
}

export async function getPost(req, res, next) {
  const id = req.params.id;
  const post = await postRepository.getById(id);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: `Post id(${id}) not found` });
  }
}

export async function createPost(req, res, next) {
  const { request } = req.query;
  const filePath = req.file.filename;

  const {
    name,
    category,
    developmentDate,
    type,
    address,
    houseHold,
    lowFloor,
    highFloor,
    floorAreaRatio,
    buildingCoverRatio,
    lotArea,
    totalFloorArea,
  } = request;

  const aptInfoData = {
    name,
    category,
    url: filePath,
    developmentDate,
    type,
    address,
    houseHold,
    lowFloor,
    highFloor,
    floorAreaRatio,
    buildingCoverRatio,
    lotArea,
    totalFloorArea,
    userId: req.userId,
  };

  const response = await postRepository.create(aptInfoData);
  console.log("완료", response);

  res.status(201).json({ messgae: "ok", response });
}

export async function updatePost(req, res, next) {
  const id = req.params.id;
  const { request } = req.query;
  const {
    name,
    category,
    developmentDate,
    type,
    address,
    houseHold,
    lowFloor,
    highFloor,
    floorAreaRatio,
    buildingCoverRatio,
    lotArea,
    totalFloorArea,
  } = request;
  const filePath = req.file.filename;
  console.log("filePath", req.file.path);
  const aptInfoData = {
    name,
    category,
    url: filePath,
    developmentDate,
    type,
    address,
    houseHold,
    lowFloor,
    highFloor,
    floorAreaRatio,
    buildingCoverRatio,
    lotArea,
    totalFloorArea,
    userId: req.userId,
  };
  const post = await postRepository.getById(id);
  console.log("post", post.userId, "req", req.userId);
  if (!post) {
    return res.status(404).json({ message: `Post not found: ${id}` });
  }
  if (post.userId !== req.userId) {
    return res.sendStatus(403);
  }
  const updated = await postRepository.update(id, aptInfoData);
  res.status(200).json(updated);
}

export async function deletePost(req, res, next) {
  const id = req.params.id;
  const post = await postRepository.getById(id);
  const __dirname = path.resolve();
  if (!post) {
    return res.status(404).json({ message: `Post not found: ${id}` });
  }
  if (post.userId !== req.userId) {
    return res.sendStatus(403).json({ message: "상품을 찾을 수 없습니다." });
  }
  // 이미지 파일 경로
  const imagePath = `${__dirname}/dir/image/${post.url}`;

  //db에서 데이터 삭제
  const deleted = await postRepository.remove(id);
  // 로컬경로에서 이미지 파일 삭제
  if (imagePath && deleted) {
    fs.unlink(imagePath, (err) => {
      if (err) {
        console.error("이미지 파일 삭제 중 오류 발생:", err);
      }
    });
  }

  res.status(204).json({ message: "delete success!" });
}
