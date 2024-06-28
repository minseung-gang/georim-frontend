import * as postRepository from "../data/posts.js";
import fs from "fs";
import path from "path";

export async function getPosts(req, res) {
  const username = req.query.username;
  const category = req.query.category;
  const promotion = req.query.promotion;

  let data;

  if (username) {
    data = await postRepository.getAllByUsername(username);
  } else if (category) {
    data = await postRepository.getAllByCategory(category);
  } else if (promotion) {
    // 프로모션 쿼리 처리
    data = await postRepository.getAllByPromotion(promotion);
  }
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

export async function getPromotions(req, res) {
  const promotions = await postRepository.getAllPromotions();
  if (promotions) {
    res.status(200).json(promotions);
  } else {
    res.status(404).json({ message: `Posts not found` });
  }
}

export async function getPromotion(req, res) {
  const id = req.params.id;
  const promotion = await postRepository.getPromotionById(id);
  if (promotion) {
    res.status(200).json(promotion);
  } else {
    res.status(404).json({ message: `Post id(${id}) not found` });
  }
}

export async function createPost(req, res, next) {
  const { request } = req.query;
  const { img, promotionImg } = req.files;

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
    status,
    homepage,
    phone,
    pyeng,
    fileLink,
  } = request;

  let updatePyeng = pyeng;

  // pyeng 배열의 각 객체에 promotionImg 파일의 정보를 추가
  if (status !== 0 && promotionImg) {
    updatePyeng = pyeng.map((item, index) => {
      if (promotionImg[index]) {
        // 해당 객체에 연결된 promotionImg 파일의 정보를 추가
        return { ...item, url: promotionImg[index].filename };
      } else {
        return item; // 프로모션 이미지가 없으면 기존의 item을 유지
      }
    });
  }

  const aptInfoData = {
    name,
    category: category,
    url: img[0].filename,
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
    status,
    homepage,
    phone,
    pyeng: updatePyeng !== undefined ? updatePyeng : [],
    fileLink,
  };

  const response = await postRepository.create(aptInfoData);

  res.status(201).json({ messgae: "ok", response });
}

export async function updatePost(req, res, next) {
  const id = req.params.id;
  const { img, promotionImg } = req.files;
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
    status,
    homepage,
    phone,
    pyeng,
    fileLink,
    isDeleted,
  } = request;

  // 프론트에서 pyeng의 데이터를 삭제했을 때 경로에 있는 이미지 삭제
  if (isDeleted) {
    const res = await postRepository.getPostPyengById(id);
    const currentPyeng = pyeng || [];
    const missingItems = res.pyeng.filter(
      (item) =>
        !currentPyeng ||
        !currentPyeng.some((pyengItem) => pyengItem.url === item.url)
    );

    const __dirname = path.resolve();

    // 각 missingItems의 url에 해당하는 파일을 삭제합니다.
    missingItems.forEach(async (item) => {
      const imagePath = `${__dirname}/dir/image/${item.url}`;
      fs.unlink(imagePath, (err) => {
        if (err) {
          console.error("이미지 파일 삭제 중 오류 발생:", err);
        }
      });
    });
  }

  let updatePyeng = pyeng || [];

  // pyeng 배열의 각 객체에 promotionImg 파일의 이름을 추가 > url: promotion.png
  if (status !== 0 && promotionImg) {
    let promotionIndex = 0;
    for (let i = 0; i < updatePyeng.length; i++) {
      const item = updatePyeng[i];
      if (!item.url && promotionIndex < promotionImg.length) {
        // 해당 객체에 연결된 promotionImg 파일의 정보를 추가
        updatePyeng[i].url = promotionImg[promotionIndex++].originalname;
      }
    }
  }

  const aptInfoData = {
    name,
    category: category,
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
    status,
    homepage,
    phone,
    pyeng: updatePyeng,
    fileLink,
  };

  const post = await postRepository.getById(id);

  if (!post) {
    return res.status(404).json({ message: `Post not found: ${id}` });
  }
  if (post.userId !== req.userId) {
    return res.sendStatus(403);
  }

  const updated = await postRepository.update(id, aptInfoData);
  return res.status(200).json(updated);
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
  console.log(post, "포스트");
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
  // pyeng 배열 내의 이미지 파일 삭제
  if (post.pyeng && post.pyeng.length > 0) {
    post.pyeng.forEach((item) => {
      const pyengImagePath = `${__dirname}/dir/image/${item.url}`;
      fs.unlink(pyengImagePath, (err) => {
        if (err) {
          console.error("포스트 내 pyeng 이미지 파일 삭제 중 오류 발생:", err);
        }
      });
    });
  }

  res.status(204).json({ message: "delete success!" });
}
