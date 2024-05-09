import { db } from "../db/database.js";

const SELECT_JOIN = `SELECT apt.id, apt.userId, apt.url, apt.category, apt.name, apt.type, apt.address, apt.developmentDate, apt.houseHold, apt.lowFloor, apt.highFloor, apt.floorAreaRatio, apt.buildingCoverRatio, apt.lotArea, apt.totalFloorArea FROM apt_info as apt JOIN users as us ON apt.userId = us.id`;
const ORDER_DESC = "ORDER BY apt.id DESC";

export async function getAllByCategory(category) {
  console.log(category, "category");
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
  return db.execute(`${SELECT_JOIN} WHERE apt.id=?`, [id]).then((result) => {
    console.log("getById", result[0][0]);
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
  } = aptInfoData;

  return db
    .execute(
      "INSERT INTO apt_info (name, category, url, developmentDate, type, address, houseHold, lowFloor, highFloor, floorAreaRatio, buildingCoverRatio, lotArea, totalFloorArea, userId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
  } = aptInfoData;
  console.log(aptInfoData, "info", id, "id");
  return db.execute(
    `UPDATE apt_info 
     SET 
       name=?, 
       category=?, 
       url=?, 
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
       userId=? 
     WHERE 
       id=?`,
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
      id,
    ]
  );
}

export async function remove(id) {
  return db.execute("DELETE FROM apt_info WHERE id=?", [id]);
}
