import React, { useReducer, useEffect, useState } from "react";
import Layout from "../../component/admin/Layout";
import * as Styles from "../../styles/admin/postEditor.styled";
import { handleUpdateImage } from "../../util/checkImage";
import { reducer, initialState } from "../../reducer/postReducer";
import CalendarModal from "../../component/admin/CalendarModal";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import {
  createPosts,
  getPostsByCategory,
  getPostsById,
  updatePosts,
} from "../../apis/services/posts";
import { Select } from "../../component/molecule/Select";

function PostEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isPopup, setIsPopup] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async function async() {
      try {
        if (id) {
          const response = await getPostsById(parseInt(id));
          dispatch({ type: "UPDATE_ALL", payload: response });
        }
      } catch (error) {
        console.error("Failed to fetch data.");
      }
    })();
  }, []);

  const {
    name,
    category,
    url,
    image,
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
  } = state;

  const data = {
    name,
    category,
    developmentDate,
    type: type.join(", "),
    address,
    houseHold,
    lowFloor,
    highFloor,
    floorAreaRatio,
    buildingCoverRatio,
    lotArea,
    totalFloorArea,
  };

  const handleCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    text: string
  ) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch({ type: "UPDATE_TYPE", payload: text });
    } else {
      dispatch({ type: "DELETE_TYPE", payload: text });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    dispatch({ type, payload: e.target.value });
  };

  const handleDateChange = (value: Date) => {
    const date = dayjs(value).format("YYYY.MM");
    dispatch({ type: "UPDATE_DEVELOPMENT_DATE", payload: date });
    setIsPopup(!isPopup);
  };

  const onSubmit = async () => {
    if (id) {
      const posts = await getPostsByCategory(category);
      const imageName = category == "시행·개발" ? "project" : "sales";
      const fileName = `${imageName}_${posts.length + 1}.png`;

      const img = new File([image], fileName, {
        type: "image/png",
      });
      const formData = new FormData();
      formData.append("img", img);
      const response = await updatePosts(formData, data, id);

      if (response?.status == 200) {
        dispatch({ type: "RESET_ALL", payload: "" }); //리듀서 초기화
        navigate("/admin/posts");
      } else {
        alert("알 수 없는 오류가 발생했습니다. 개발자에게 문의해주세요.");
      }
    } else {
      const posts = await getPostsByCategory(category);
      const imageName = category == "시행·개발" ? "project" : "sales";
      const fileName = `${imageName}_${posts.length + 1}.png`;
      const img = new File([image], fileName, {
        type: "image/png",
      });
      const formData = new FormData();
      formData.append("img", img);

      const response = await createPosts(formData, data);

      if (response?.status == 201) {
        dispatch({ type: "RESET_ALL", payload: "" }); //리듀서 초기화
        navigate("/admin/posts");
      } else {
        alert("알 수 없는 오류가 발생했습니다. 개발자에게 문의해주세요.");
      }
    }
  };

  return (
    <Layout title="매물등록">
      <Styles.Wrapper>
        <Styles.Inner>
          <Styles.Form>
            <Styles.Container>
              <div className="input_title">
                <p>카테고리</p>
              </div>
              <div className="input_content">
                <Select
                  defaultValue={category !== "" ? category : "선택하세요"}
                >
                  <div style={{ position: "relative" }}>
                    <Select.Trigger />
                    <Select.List>
                      <Select.Option
                        value="입주·분양"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_CATEGORY",
                            payload: "입주·분양",
                          })
                        }
                      >
                        <p>입주 · 분양</p>
                      </Select.Option>
                      <Select.Option
                        value="시행·개발"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_CATEGORY",
                            payload: "시행·개발",
                          })
                        }
                      >
                        <p>시행 · 개발</p>
                      </Select.Option>
                    </Select.List>
                  </div>
                </Select>
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>아파트명</p>
              </div>
              <div className="input_content">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => handleInputChange(e, "UPDATE_NAME")}
                />
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>분류</p>
              </div>
              <div className="input_content">
                <div className="check_form">
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="apartment"
                      checked={
                        typeof type == "object" && type.includes("아파트")
                      }
                      onChange={(e) => handleCheckChange(e, "아파트")}
                    />
                    <div>
                      <p>아파트</p>
                    </div>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="officetel"
                      checked={type.includes("오피스텔")}
                      onChange={(e) => handleCheckChange(e, "오피스텔")}
                    />
                    <div>
                      <p>오피스텔</p>
                    </div>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="community_facility"
                      checked={type.includes("근린생활시설")}
                      onChange={(e) => handleCheckChange(e, "근린생활시설")}
                    />
                    <div>
                      <p>근린생활시설</p>
                    </div>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="industry_center"
                      checked={type.includes("지식산업센터")}
                      onChange={(e) => handleCheckChange(e, "지식산업센터")}
                    />
                    <div>
                      <p>지식산업센터</p>
                    </div>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="townhouse"
                      checked={type.includes("연립주택")}
                      onChange={(e) => handleCheckChange(e, "연립주택")}
                    />
                    <div>
                      <p>연립주택</p>
                    </div>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="hotel"
                      checked={type.includes("숙박시설(호텔)")}
                      onChange={(e) => handleCheckChange(e, "숙박시설(호텔)")}
                    />
                    <div>
                      <p>숙박시설(호텔)</p>
                    </div>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="accommodation"
                      checked={type.includes("생활형 숙박시설")}
                      onChange={(e) => handleCheckChange(e, "생활형 숙박시설")}
                    />
                    <div>
                      <p>생활형 숙박시설</p>
                    </div>
                  </label>
                </div>
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>첨부이미지</p>
              </div>
              <div className="input_content">
                {!id ? (
                  <label className="label_form" htmlFor="image">
                    {url ? (
                      <img
                        src={url}
                        alt="업로드 이미지"
                        className="upload_img"
                      />
                    ) : (
                      <span>이미지를 클릭해주세요.</span>
                    )}
                  </label>
                ) : (
                  <label className="label_form" htmlFor="image">
                    {image ? (
                      <img
                        src={url}
                        alt="업로드 이미지"
                        className="upload_img"
                      />
                    ) : (
                      <img
                        src={`${process.env.REACT_APP_BASE_URL}/dir/image/${url}`}
                        alt="업로드 이미지"
                        className="upload_img"
                      />
                    )}
                  </label>
                )}
                <input
                  type="file"
                  id="image"
                  onChange={(e) => handleUpdateImage(e, dispatch)}
                  hidden
                />
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>주소</p>
              </div>
              <div className="input_content">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => handleInputChange(e, "UPDATE_ADDRESS")}
                />
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>세대수</p>
              </div>
              <div className="input_content">
                <input
                  type="text"
                  placeholder="ex) 42호실, 19호실"
                  value={houseHold}
                  onChange={(e) => handleInputChange(e, "UPDATE_HOUSE_HOLD")}
                />
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>규모</p>
              </div>
              <div className="input_content">
                <div className="flexBox">
                  <div>
                    <p>지하</p>
                    <input
                      type="text"
                      value={lowFloor}
                      onChange={(e) => handleInputChange(e, "UPDATE_LOW_FLOOR")}
                    />
                    <p>층</p>
                  </div>
                  -
                  <div>
                    <p>지상</p>
                    <input
                      type="text"
                      value={highFloor}
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_HIGH_FLOOR")
                      }
                    />
                    <p>층</p>
                  </div>
                </div>
              </div>
            </Styles.Container>
            {category !== "입주·분양" && (
              <>
                <Styles.Container>
                  <div className="input_title">
                    <p>용적률</p>
                  </div>
                  <div className="input_content">
                    <input
                      type="number"
                      placeholder="단위 - %"
                      value={
                        typeof floorAreaRatio === "number"
                          ? floorAreaRatio !== 0
                            ? floorAreaRatio.toFixed(2)
                            : ""
                          : floorAreaRatio
                      }
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_FLOOR_AREA_RATIO")
                      }
                    />
                  </div>
                </Styles.Container>
                <Styles.Container>
                  <div className="input_title">
                    <p>건폐율</p>
                  </div>
                  <div className="input_content">
                    <input
                      type="number"
                      placeholder="단위 - %"
                      value={
                        typeof buildingCoverRatio === "number"
                          ? buildingCoverRatio !== 0
                            ? buildingCoverRatio.toFixed(2)
                            : ""
                          : buildingCoverRatio
                      }
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_BUILDING_COVER_RATIO")
                      }
                    />
                  </div>
                </Styles.Container>
                <Styles.Container>
                  <div className="input_title">
                    <p>대지면적</p>
                  </div>
                  <div className="input_content">
                    <input
                      type="number"
                      placeholder="단위 - ㎡"
                      value={
                        typeof lotArea === "number"
                          ? lotArea !== 0
                            ? lotArea.toFixed(2)
                            : ""
                          : lotArea
                      }
                      onChange={(e) => handleInputChange(e, "UPDATE_LOT_AREA")}
                    />
                  </div>
                </Styles.Container>
                <Styles.Container>
                  <div className="input_title">
                    <p>연면적</p>
                  </div>
                  <div className="input_content">
                    <input
                      type="number"
                      placeholder="단위 - ㎡"
                      value={
                        typeof totalFloorArea === "number"
                          ? totalFloorArea !== 0
                            ? totalFloorArea.toFixed(2)
                            : ""
                          : totalFloorArea
                      }
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_TOTAL_FLOOR_AREA")
                      }
                    />
                  </div>
                </Styles.Container>
                <Styles.Container>
                  <div className="input_title">
                    <p>사업시기</p>
                  </div>
                  <div className="input_content">
                    <input
                      type="text"
                      value={developmentDate ?? ""}
                      disabled
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_DEVELOPMENT_DATE")
                      }
                    />
                    <Styles.IconBox>
                      <Styles.CalendarIcon
                        onClick={() => setIsPopup(!isPopup)}
                      />
                      {isPopup && <CalendarModal onChange={handleDateChange} />}
                    </Styles.IconBox>
                  </div>
                </Styles.Container>
              </>
            )}
          </Styles.Form>
          <Styles.SubmitBtn>
            <button type="button" onClick={() => navigate("/admin/posts")}>
              취소
            </button>
            <button onClick={onSubmit}>작성완료</button>
          </Styles.SubmitBtn>
        </Styles.Inner>
      </Styles.Wrapper>
    </Layout>
  );
}

export default PostEditor;
