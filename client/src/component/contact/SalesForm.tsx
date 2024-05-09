import React, { Dispatch, MouseEvent, forwardRef, useState } from "react";
import * as Contact from "../../styles/contact/contactus.styled";
import { State } from "../../reducer/contactInfoReducer";
import Tabs from "../molecule/Tabs";

interface SalesFormProps {
  state: State;
  dispatch: Dispatch<any>;
}

function SalesForm({ state, dispatch }: SalesFormProps) {
  const handleTriggerClick = (text: string) => {
    dispatch({
      type: "UPDATE_SALES_FORM_FIELD",
      payload: {
        fieldName: "target",
        value: text,
      },
    });
  };

  return (
    <div className="flex-column vertical-gap-4">
      <div className="flex-column vertical-gap-1">
        <Contact.SectionTitle className="border-bottom py-1">
          담당자 정보 <Contact.Essential>*</Contact.Essential>
        </Contact.SectionTitle>
        <Contact.ContentSection>
          <Contact.Grid className="cols-2-1">
            <div className="flex-column vertical-gap-0">
              <Contact.Info>회사명</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="문의하시는 회사명을 입력해 주세요."
                value={state.salesForm.companyName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SALES_FORM_FIELD",
                    payload: {
                      fieldName: "companyName",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex-column vertical-gap-0">
              <Contact.Info>담당자명 · 직급</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="문의하시는 성함과 직급을 입력해 주세요."
                value={state.salesForm.contactName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SALES_FORM_FIELD",
                    payload: {
                      fieldName: "contactName",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
          </Contact.Grid>
          <Contact.Grid className="cols-2-1">
            <div className="flex-column vertical-gap-0">
              <Contact.Info>전화번호</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="연락받으실 전화번호를 입력해 주세요."
                value={state.salesForm.phoneNumber}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SALES_FORM_FIELD",
                    payload: {
                      fieldName: "phoneNumber",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex-column vertical-gap-0">
              <Contact.Info>이메일</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="연락받으실 이메일 주소를 입력해 주세요."
                value={state.salesForm.email}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SALES_FORM_FIELD",
                    payload: {
                      fieldName: "email",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
          </Contact.Grid>
        </Contact.ContentSection>
      </div>
      <div className="flex-column vertical-gap-1">
        <Contact.SectionTitle className="border-bottom py-1">
          현장 정보 <Contact.Essential>*</Contact.Essential>
        </Contact.SectionTitle>
        <Contact.ContentSection>
          <Contact.Grid className="cols-1-1">
            <div className="flex-column vertical-gap-0">
              <Contact.Info>분양대상</Contact.Info>
              <Contact.CheckBox>
                <Contact.Label>
                  <input
                    type="radio"
                    hidden
                    name="check"
                    onClick={() => handleTriggerClick("아파트")}
                  />
                  <span className="checkmark circle">
                    <div className="checkmark" />
                  </span>

                  <p>아파트</p>
                </Contact.Label>
                <Contact.Label>
                  <input
                    type="radio"
                    hidden
                    name="check"
                    onClick={() => handleTriggerClick("오피스텔")}
                  />
                  <span className="checkmark circle">
                    <div className="checkmark" />
                  </span>
                  <p>오피스텔</p>
                </Contact.Label>
                <Contact.Label>
                  <input
                    type="radio"
                    hidden
                    name="check"
                    onClick={() => handleTriggerClick("근린생활시설")}
                  />
                  <span className="checkmark circle">
                    <div className="checkmark" />
                  </span>
                  <p>근린생활시설</p>
                </Contact.Label>
                <Contact.Label>
                  <input
                    type="radio"
                    hidden
                    name="check"
                    onClick={() => handleTriggerClick("지식산업센터")}
                  />
                  <span className="checkmark circle">
                    <div className="checkmark" />
                  </span>
                  <p>지식산업센터</p>
                </Contact.Label>
                <Contact.Label>
                  <input
                    type="radio"
                    hidden
                    name="check"
                    onClick={() => handleTriggerClick("숙박시설")}
                  />
                  <span className="checkmark circle">
                    <div className="checkmark" />
                  </span>
                  <p>숙박시설</p>
                </Contact.Label>
                <Contact.Label>
                  <input
                    type="radio"
                    hidden
                    name="check"
                    onClick={() => handleTriggerClick("기타")}
                  />
                  <span className="checkmark circle">
                    <div className="checkmark" />
                  </span>
                  <p>기타</p>
                </Contact.Label>
              </Contact.CheckBox>
            </div>
          </Contact.Grid>
          <Contact.Grid className="cols-2-1">
            <div className="flex-column vertical-gap-0">
              <Contact.Info>현장명</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="현장명을 입력해 주세요."
                value={state.salesForm.siteName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SALES_FORM_FIELD",
                    payload: {
                      fieldName: "siteName",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex-column vertical-gap-0">
              <Contact.Info>현장 주소</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="현장주소를 입력해주세요"
                value={state.salesForm.siteAddress}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_SALES_FORM_FIELD",
                    payload: {
                      fieldName: "siteAddress",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
          </Contact.Grid>
        </Contact.ContentSection>
      </div>
    </div>
  );
}

export default SalesForm;
