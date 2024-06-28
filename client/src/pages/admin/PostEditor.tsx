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
  getPostsById,
  updatePosts,
} from "../../apis/services/posts";
import { Select } from "../../component/molecule/Select";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalsState } from "../../recoil/modal";
import { pyengState } from "../../recoil/provider";

function PostEditor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [promotionState, setPromotionState] = useRecoilState(pyengState);
  const showModal = useSetRecoilState(modalsState);
  const [isPopup, setIsPopup] = useState(false);
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    (async function async() {
      try {
        if (id) {
          const response = await getPostsById(parseInt(id));

          dispatch({ type: "UPDATE_ALL", payload: response });
          setFileName(response.url);
        }
      } catch (error) {
        console.error("Failed to fetch data.");
      }
    })();
  }, []);

  useEffect(() => {
    // recoil에 있는 데이터를 reducer state에 저장
    dispatch({ type: "ADD_PYENG", payload: promotionState.state });
  }, [id, promotionState.state]);

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      // pyeng 내부에 base64 url, image 파일을 삭제
      let promotionData = state.pyeng.map((item: any, idx: number) => {
        // 이미지 키를 제외한 객체 생성
        if (item.image) {
          const { url, image, ...filteredItem } = item;
          const fileType = item.image.name.split(".").pop();
          const fileName = `${Date.now() + idx}_promotion.${fileType}`;
          const promotionImg = new File([item.image], fileName, {
            type: item.image.type,
          });
          formData.append("promotionImg", promotionImg);
          return filteredItem;
        } else {
          return item;
        }
      });
      if (promotionData.length == 0) {
        promotionData = [];
      }

      // state 내부에 url image
      const { image, view, ...dataWithoutUrlAndImage } = state;

      const data = { ...dataWithoutUrlAndImage, pyeng: promotionData };

      if (state.image) {
        const fileType = state.image.name.split(".").pop();

        const fileName = id ? state.url : `${Date.now()}_posts.${fileType}`;

        const img = new File([state.image], fileName, {
          type: state.image.type,
        });
        formData.append("img", img);
      }

      if (state.status !== 0 && promotionState.state.length > 0) {
        promotionState.state.forEach((item) => {});
      }

      const response = id
        ? await updatePosts(formData, data, id)
        : await createPosts(formData, data);

      if (response?.status === 200 || response?.status === 201) {
        handleMoveToPage();
      }
    } catch (error) {
      alert("알 수 없는 오류가 발생했습니다. 개발자에게 문의해주세요.");
    }
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
  const handleMoveToPage = () => {
    dispatch({ type: "RESET_ALL", payload: "" });
    setPromotionState({ state: [] });
    navigate("/admin/posts");
  };
  const changeDispatchHandler = (type: string, payload: any) => {
    dispatch({ type, payload });
  };
  const deleteListHandler = (payload: any) => {
    if (id) {
      return dispatch({ type: "DELETE_PYENG_AND_SET_DELETED", payload });
    }
    return dispatch({ type: "DELETE_PYENG", payload });
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
                  defaultValue={
                    state.category === ""
                      ? "선택하세요"
                      : state.category === "sales"
                      ? "입주·분양"
                      : "시행·개발"
                  }
                >
                  <div style={{ position: "relative" }}>
                    <Select.Trigger />
                    <Select.List>
                      <Select.Option
                        value="입주·분양"
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_CATEGORY",
                            payload: "sales",
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
                            payload: "development",
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
                  value={state.name}
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
                  <label className="check_container gp-0-5">
                    <input
                      type="checkbox"
                      id="apartment"
                      checked={
                        typeof state.type == "object" &&
                        state.type.includes("아파트")
                      }
                      onChange={(e) => handleCheckChange(e, "아파트")}
                    />

                    <p>아파트</p>
                  </label>
                  <label className="check_container gp-0-5">
                    <input
                      type="checkbox"
                      id="officetel"
                      checked={state.type.includes("오피스텔")}
                      onChange={(e) => handleCheckChange(e, "오피스텔")}
                    />

                    <p>오피스텔</p>
                  </label>
                  <label className="check_container gp-0-5">
                    <input
                      type="checkbox"
                      id="community_facility"
                      checked={state.type.includes("근린생활시설")}
                      onChange={(e) => handleCheckChange(e, "근린생활시설")}
                    />

                    <p>근린생활시설</p>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="industry_center"
                      checked={state.type.includes("지식산업센터")}
                      onChange={(e) => handleCheckChange(e, "지식산업센터")}
                    />

                    <p>지식산업센터</p>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="townhouse"
                      checked={state.type.includes("연립주택")}
                      onChange={(e) => handleCheckChange(e, "연립주택")}
                    />

                    <p>연립주택</p>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="hotel"
                      checked={state.type.includes("숙박시설(호텔)")}
                      onChange={(e) => handleCheckChange(e, "숙박시설(호텔)")}
                    />

                    <p>숙박시설(호텔)</p>
                  </label>
                  <label className="check_container">
                    <input
                      type="checkbox"
                      id="accommodation"
                      checked={state.type.includes("생활형 숙박시설")}
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
                    {state.view ? (
                      <img
                        src={state.view}
                        alt="업로드 이미지"
                        className="upload_img"
                      />
                    ) : (
                      <span>이미지를 클릭해주세요.</span>
                    )}
                  </label>
                ) : (
                  <label className="label_form" htmlFor="image">
                    {state.image ? (
                      <img
                        src={state.view}
                        alt="업로드 이미지"
                        className="upload_img"
                      />
                    ) : (
                      <img
                        src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${state.url}`}
                        alt="업로드 이미지"
                        className="upload_img"
                      />
                    )}
                  </label>
                )}
                <input
                  type="file"
                  id="image"
                  name="img"
                  onChange={(e) =>
                    handleUpdateImage(
                      e,
                      dispatch,
                      "UPDATE_VIEW",
                      "UPDATE_IMAGE"
                    )
                  }
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
                  value={state.address}
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
                  value={state.houseHold}
                  onChange={(e) => handleInputChange(e, "UPDATE_HOUSE_HOLD")}
                />
              </div>
            </Styles.Container>
            <Styles.Container>
              <div className="input_title">
                <p>규모</p>
              </div>
              <div className="input_content">
                <div className="grid">
                  <div>
                    <p>지하</p>
                    <input
                      type="text"
                      value={state.lowFloor}
                      onChange={(e) => handleInputChange(e, "UPDATE_LOW_FLOOR")}
                    />
                    <p>층</p>
                  </div>
                  -
                  <div>
                    <p>지상</p>
                    <input
                      type="text"
                      value={state.highFloor}
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_HIGH_FLOOR")
                      }
                    />
                    <p>층</p>
                  </div>
                </div>
              </div>
            </Styles.Container>
            {state.category == "sales" && (
              <Styles.Container>
                <div className="input_title">
                  <p>프로모션 등록 여부</p>
                </div>
                <div className="input_content">
                  <div className="flex gp-0-20">
                    <label className="check_container">
                      <input
                        type="radio"
                        name="promotion"
                        defaultChecked={state.status == 0}
                        onClick={() => {
                          changeDispatchHandler("UPDATE_HAS_PROMOTION", false);
                          changeDispatchHandler("UPDATE_STATUS", 0);
                        }}
                      />
                      <p>NO</p>
                    </label>
                    <label className="check_container">
                      <input
                        type="radio"
                        name="promotion"
                        defaultChecked={state.status !== 0}
                        onClick={() => {
                          changeDispatchHandler("UPDATE_HAS_PROMOTION", true);
                          changeDispatchHandler("UPDATE_STATUS", 1);
                        }}
                      />
                      <p>YES</p>
                    </label>
                  </div>
                </div>
              </Styles.Container>
            )}
            {state.status !== 0 &&
              state.hasPromotion !== false &&
              state.category === "sales" && (
                <>
                  <Styles.Container>
                    <div className="input_title">
                      <p>분양 상태</p>
                    </div>
                    <div className="input_content">
                      <div className="flex gp-0-20">
                        <label className="check_container">
                          <input
                            type="radio"
                            name="status"
                            defaultChecked={state.status == 1}
                            onClick={() =>
                              changeDispatchHandler("UPDATE_STATUS", 1)
                            }
                          />
                          <p>준공 후 분양 중</p>
                        </label>
                        <label className="check_container">
                          <input
                            type="radio"
                            name="status"
                            defaultChecked={state.status == "2"}
                            onClick={() =>
                              changeDispatchHandler("UPDATE_STATUS", 2)
                            }
                          />
                          <p>분양 중</p>
                        </label>
                      </div>
                    </div>
                  </Styles.Container>
                  <Styles.Container>
                    <div className="input_title">
                      <p>모집공고 링크</p>
                    </div>
                    <div className="input_content">
                      <input
                        type="text"
                        value={state.fileLink}
                        onChange={(e) =>
                          changeDispatchHandler(
                            "UPDATE_FILELINK",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </Styles.Container>
                  <Styles.Container>
                    <div className="input_title">
                      <p>홈페이지 링크</p>
                    </div>
                    <div className="input_content">
                      <input
                        type="text"
                        placeholder="https://www..."
                        value={state.homepage}
                        onChange={(e) =>
                          changeDispatchHandler(
                            "UPDATE_HOMEPAGE",
                            e.target.value
                          )
                        }
                      />
                    </div>
                  </Styles.Container>
                  <Styles.Container>
                    <div className="input_title">
                      <p>홍보관 번호</p>
                    </div>
                    <div className="input_content">
                      <input
                        type="text"
                        value={state.phone}
                        onChange={(e) =>
                          changeDispatchHandler("UPDATE_PHONE", e.target.value)
                        }
                      />
                    </div>
                  </Styles.Container>
                  <Styles.Container>
                    <div className="input_title">
                      <p>분양 정보</p>
                    </div>
                    <div className="input_content">
                      <Styles.Tab>
                        <Styles.PlusIcon
                          onClick={() =>
                            showModal({
                              isOpen: true,
                              modalType: "promotion",
                              props: {},
                            })
                          }
                        />
                        <div className="tab_list">
                          {state.pyeng[0] !== undefined &&
                            state.pyeng.map((item: any, idx: number) => {
                              return (
                                <Styles.Sales key={idx}>
                                  <div className="container">
                                    <Styles.CloseIcon
                                      onClick={() => deleteListHandler(idx)}
                                    />
                                    {!id ? (
                                      <img
                                        src={item.url}
                                        alt={item.type}
                                        className="upload_img"
                                      />
                                    ) : item.image ? (
                                      <img
                                        src={item.url}
                                        alt={item.type}
                                        className="upload_img"
                                      />
                                    ) : (
                                      <img
                                        src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${item.url}`}
                                        alt={item.type}
                                        className="upload_img"
                                      />
                                    )}

                                    {item.type == "pyeng" ? (
                                      <div className="content_info">
                                        <div className="list">
                                          <p className="list_name">
                                            {item.name} 타입
                                          </p>
                                        </div>
                                        <div className="list">
                                          <p className="section_title">
                                            분양가 :
                                          </p>
                                          <div className="section_content">
                                            <p>
                                              {item.price[0]?.toLocaleString()}
                                              만원
                                            </p>
                                            ~
                                            <p>
                                              {item.price[1]?.toLocaleString()}
                                              만원
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="content_info">
                                        <div className="list">
                                          <p className="list_name">
                                            {item.name}
                                          </p>
                                        </div>
                                        <div className="list">
                                          <p className="section_title">
                                            호실당 :
                                          </p>
                                          <div className="section_content">
                                            <p>
                                              {item.pricePerRoom[0]?.toLocaleString()}
                                              만원
                                            </p>
                                            ~
                                            <p>
                                              {item.pricePerRoom[1]?.toLocaleString()}
                                              만원
                                            </p>
                                          </div>
                                        </div>
                                        <div className="list">
                                          <p className="section_title">
                                            평당가 :
                                          </p>
                                          <div className="section_content">
                                            <p>
                                              {item.areaPrice[0]?.toLocaleString()}
                                              만원
                                            </p>
                                            ~
                                            <p>
                                              {item.areaPrice[1]?.toLocaleString()}
                                              만원
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                </Styles.Sales>
                              );
                            })}
                        </div>
                      </Styles.Tab>
                    </div>
                  </Styles.Container>
                </>
              )}

            {state.category == "development" && (
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
                        typeof state.floorAreaRatio === "number"
                          ? state.floorAreaRatio !== 0
                            ? state.floorAreaRatio.toFixed(2)
                            : ""
                          : state.floorAreaRatio
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
                        typeof state.buildingCoverRatio === "number"
                          ? state.buildingCoverRatio !== 0
                            ? state.buildingCoverRatio.toFixed(2)
                            : ""
                          : state.buildingCoverRatio
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
                        typeof state.lotArea === "number"
                          ? state.lotArea !== 0
                            ? state.lotArea.toFixed(2)
                            : ""
                          : state.lotArea
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
                        typeof state.totalFloorArea === "number"
                          ? state.totalFloorArea !== 0
                            ? state.totalFloorArea.toFixed(2)
                            : ""
                          : state.totalFloorArea
                      }
                      onChange={(e) =>
                        handleInputChange(e, "UPDATE_TOTAL_FLOOR_AREA")
                      }
                    />
                  </div>
                </Styles.Container>
              </>
            )}
            <Styles.Container>
              <div className="input_title">
                <p>사업시기</p>
              </div>
              <div className="input_content">
                <input
                  type="text"
                  value={state.developmentDate ?? ""}
                  disabled
                  onChange={(e) =>
                    handleInputChange(e, "UPDATE_DEVELOPMENT_DATE")
                  }
                />
                <Styles.IconBox>
                  <Styles.CalendarIcon onClick={() => setIsPopup(!isPopup)} />
                  {isPopup && <CalendarModal onChange={handleDateChange} />}
                </Styles.IconBox>
              </div>
            </Styles.Container>
          </Styles.Form>
          <Styles.SubmitBtn>
            <button type="button" onClick={handleMoveToPage}>
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
