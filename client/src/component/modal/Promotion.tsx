import React, { useEffect, useReducer } from "react";
import * as Modal from "../../styles/modal/promotion.styles";
import { modalsState } from "../../recoil/modal";
import { useRecoilState, useSetRecoilState } from "recoil";
import { reducer } from "../../reducer/promotionReducer";
import { initialState } from "../../reducer/promotionReducer";
import { handleUpdateImage } from "../../util/checkImage";
import { pyengState } from "../../recoil/provider";

function Promotion() {
  const [showModal, changeStateModal] = useRecoilState(modalsState);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [promotionState, setPromotionState] = useRecoilState(pyengState);

  useEffect(() => {
    setPromotionState({ state: [] });
  }, []);

  const dispatchEventHandler = (type: string, payload: any) => {
    dispatch({ type, payload });
  };

  const closeEventHandler = () => {
    changeStateModal({
      isOpen: false,
      modalType: "promotion",
      props: {},
    });
  };

  const submitHandler = () => {
    if (state.type === "pyeng") {
      setPromotionState({
        state: [
          ...promotionState.state,
          {
            type: state.type,
            name: state.name,
            url: state.url,
            image: state.image,
            price: [state.minPrice, state.maxPrice],
          },
        ],
      });
    } else {
      setPromotionState({
        state: [
          ...promotionState.state,
          {
            type: state.type,
            name: state.name,
            url: state.url,
            image: state.image,
            pricePerRoom: [state.minPricePerRoom, state.maxPricePerRoom],
            areaPrice: [state.minAreaPrice, state.maxAreaPrice],
          },
        ],
      });
    }

    closeEventHandler();
  };

  return (
    <Modal.Wrapper>
      <div className="curtain" onClick={closeEventHandler} />
      <div className="inner">
        <div className="header">
          <p>분양가 정보 등록</p>
          <Modal.CloseIcon onClick={closeEventHandler} />
        </div>
        <div className="content">
          <div className="container">
            <p className="sec_tit">이미지</p>
            <label className="label_form" htmlFor="pro">
              {state.url ? (
                <img src={state.url} alt="첨부이미지" />
              ) : (
                <span>이미지를 올려주세요</span>
              )}
            </label>
            <input
              type="file"
              id="pro"
              name="pro"
              onChange={(e) =>
                handleUpdateImage(e, dispatch, "UPDATE_URL", "UPDATE_IMAGE")
              }
              hidden
            />
          </div>
          <div className="container">
            <p className="sec_tit">구분</p>
            <div className="flex gp-0-10">
              <label className="check_container">
                <input
                  type="radio"
                  name="promotion"
                  defaultChecked={state.type === "pyeng"}
                  onChange={() => dispatchEventHandler("UPDATE_TYPE", "pyeng")}
                />
                <p>평타입</p>
              </label>
              <label className="check_container">
                <input
                  type="radio"
                  name="promotion"
                  onChange={() =>
                    dispatchEventHandler("UPDATE_TYPE", "community")
                  }
                />
                <p>커뮤니티 시설</p>
              </label>
            </div>
          </div>
          <div className="container">
            <p className="sec_tit">이름</p>
            <input
              type="text"
              placeholder={
                state.type == "pyeng" ? "ex) 840A" : "ex) 근린생활시설"
              }
              onChange={(e) =>
                dispatchEventHandler("UPDATE_NAME", e.target.value)
              }
            />
          </div>
          {state.type === "pyeng" ? (
            <div className="container price">
              <p className="sec_tit">분양가</p>
              <div className="flex gp-0-20">
                <div className="flex gp-0-10">
                  <p>최저</p>
                  <div className="flex">
                    <input
                      type="number"
                      onChange={(e) =>
                        dispatchEventHandler("UPDATE_MIN_PRICE", e.target.value)
                      }
                    />
                    <p>만원</p>
                  </div>
                </div>
                -
                <div className="flex">
                  <p>최고</p>
                  <div className="flex">
                    <input
                      type="number"
                      onChange={(e) =>
                        dispatchEventHandler("UPDATE_MAX_PRICE", e.target.value)
                      }
                    />
                    <p>만원</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="comm_form">
              <div className="container price">
                <p className="sec_tit">호실당</p>
                <div className="flex gp-0-20">
                  <div className="flex gp-0-10">
                    <p>최저</p>
                    <div className="flex">
                      <input
                        type="number"
                        onChange={(e) =>
                          dispatchEventHandler(
                            "UPDATE_MIN_PRICE_PER_ROOM",
                            e.target.value
                          )
                        }
                      />
                      <p>만원</p>
                    </div>
                  </div>
                  -
                  <div className="flex">
                    <p>최고</p>
                    <div className="flex">
                      <input
                        type="number"
                        onChange={(e) =>
                          dispatchEventHandler(
                            "UPDATE_MAX_PRICE_PER_ROOM",
                            e.target.value
                          )
                        }
                      />
                      <p>만원</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container price">
                <p className="sec_tit">평당가</p>
                <div className="flex gp-0-20">
                  <div className="flex gp-0-10">
                    <p>최저</p>
                    <div className="flex">
                      <input
                        type="number"
                        onChange={(e) =>
                          dispatchEventHandler(
                            "UPDATE_MIN_AREA_PRICE",
                            e.target.value
                          )
                        }
                      />
                      <p>만원</p>
                    </div>
                  </div>
                  -
                  <div className="flex">
                    <p>최고</p>
                    <div className="flex">
                      <input
                        type="number"
                        onChange={(e) =>
                          dispatchEventHandler(
                            "UPDATE_MAX_AREA_PRICE",
                            e.target.value
                          )
                        }
                      />
                      <p>만원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="btn_container">
          <button onClick={closeEventHandler}>취소</button>
          <button onClick={submitHandler}>저장</button>
        </div>
      </div>
    </Modal.Wrapper>
  );
}

export default Promotion;
