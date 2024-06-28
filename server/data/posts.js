import { db } from "../db/database.js";

const SELECT_JOIN = `SELECT apt.id, apt.userId, apt.url, apt.category, apt.name, apt.type, apt.address, apt.developmentDate, apt.houseHold, apt.lowFloor, apt.highFloor, apt.floorAreaRatio, apt.buildingCoverRatio, apt.lotArea, apt.totalFloorArea, apt.status, apt.fileLink, apt.homepage, apt.phone, apt.pyeng FROM apt_info as apt JOIN users as us ON apt.userId = us.id`;
const SELECT_JOIN_PROMOTIONS = `SELECT apt.id, apt.userId, apt.url, apt.category, apt.name, apt.type, apt.address, apt.developmentDate, apt.houseHold, apt.lowFloor, apt.highFloor, apt.floorAreaRatio, apt.buildingCoverRatio, apt.lotArea, apt.totalFloorArea, apt.status, apt.fileLink, apt.homepage, apt.phone, apt.pyeng, apt.map FROM apt_info AS apt JOIN users AS us ON apt.userId = us.id`;
const ORDER_DESC = "ORDER BY apt.id DESC";

export async function getAllPromotions() {
  return db
    .execute(
      `${SELECT_JOIN_PROMOTIONS} WHERE apt.status <> 0 AND apt.category = 'sales'`
    )
    .then((result) => {
      return result[0];
    });
}
export async function getPromotionById(id) {
  return db
    .execute(
      `${SELECT_JOIN_PROMOTIONS} WHERE apt.category = 'sales' AND apt.id = ? AND apt.status <> 0 ${ORDER_DESC}`,
      [id]
    )
    .then((result) => result[0][0]);
}
export async function getAllByCategory(category) {
  console.log(category, "카테고리");
  return db
    .execute(`${SELECT_JOIN} WHERE apt.category = ? ${ORDER_DESC}`, [category])
    .then((result) => {
      console.log(result[0]), "결과";
      return result[0];
    });
}

export async function getAllByUsername(username) {
  return db
    .execute(`${SELECT_JOIN} WHERE username=? ${ORDER_DESC}`, [username])
    .then((result) => result[0]);
}

export async function getById(id) {
  return db
    .execute(`${SELECT_JOIN} WHERE apt.id=?`, [id])
    .then((result) => result[0][0]);
}

export async function getPostPyengById(id) {
  return db
    .execute(`SELECT pyeng FROM apt_info WHERE id=?`, [id])
    .then((result) => {
      console.log("결과");
      return result[0][0];
    });
}
export async function create(aptInfoData) {
  const {
    name,
    category,
    url,
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
    userId,
    status,
    homepage,
    phone,
    pyeng,
    fileLink,
  } = aptInfoData;
  console.log(aptInfoData, "db create");
  return db
    .execute(
      "INSERT INTO apt_info (name, category, url, developmentDate, type, address, houseHold, lowFloor, highFloor, floorAreaRatio, buildingCoverRatio, lotArea, totalFloorArea, userId, status,  homepage, phone, pyeng, fileLink) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        category,
        url,
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
        userId,
        status,
        homepage,
        phone,
        pyeng,
        fileLink,
      ]
    )
    .then((result) => {
      console.log("result", result[0].insertId);
      return getById(result[0].insertId);
    });
}

export async function update(id, aptInfoData) {
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
    userId,
    status,
    homepage,
    phone,
    pyeng,
    fileLink,
  } = aptInfoData;
  console.log("디비", aptInfoData);
  return db.execute(
    `UPDATE apt_info 
       SET 
         name=?, 
         category=?, 
         developmentDate=?, 
         type=?, 
         address=?, 
         houseHold=?, 
         lowFloor=?, 
         highFloor=?, 
         floorAreaRatio=?, 
         buildingCoverRatio=?, 
         lotArea=?, 
         totalFloorArea=?, 
         userId=?, 
         status=?, 
         homepage=?, 
         phone=?, 
         pyeng=?, 
         fileLink=? 
       WHERE 
         id=?`,
    [
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
      userId,
      status,
      homepage,
      phone,
      pyeng,
      fileLink,
      id,
    ]
  );
}

export async function remove(id) {
  return db.execute("DELETE FROM apt_info WHERE id=?", [id]);
}
