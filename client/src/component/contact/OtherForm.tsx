import React, { Dispatch } from "react";
import * as Contact from "../../styles/contact/contactus.styled";
import { State } from "../../reducer/contactInfoReducer";

interface DevelopFormProps {
  state: State;
  dispatch: Dispatch<any>;
}

function OtherForm({ state, dispatch }: DevelopFormProps) {
  return (
    <div className="flex-column vertical-gap-4">
      <div className="flex-column vertical-gap-1">
        <Contact.SectionTitle className="border-bottom py-1">
          담당자 정보 <Contact.Essential>*</Contact.Essential>
        </Contact.SectionTitle>
        <Contact.ContentSection>
          <Contact.Grid className="cols-2-1">
            <div className="flex-column vertical-gap-0">
              <Contact.Info>이름</Contact.Info>
              <Contact.InputField
                type="text"
                placeholder="문의하시는 성함과 직급을 입력해 주세요."
                value={state.otherForm.contactName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_OTHER_FORM_FIELD",
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
                value={state.otherForm.phoneNumber}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_OTHER_FORM_FIELD",
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
                value={state.otherForm.email}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_OTHER_FORM_FIELD",
                    payload: {
                      fieldName: "email",
                      value: e.target.value,
                    },
                  })
                }
              />
            </div>
          </Contact.Grid>
          <div className="flex-column vertical-gap-0">
            <Contact.Info>문의내용</Contact.Info>
            <Contact.TextArea
              placeholder="문의내용을 입력해 주세요."
              value={state.otherForm.inquiryDetails}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_OTHER_FORM_FIELD",
                  payload: {
                    fieldName: "inquiryDetails",
                    value: e.target.value,
                  },
                })
              }
              spellCheck="false"
            />
          </div>
        </Contact.ContentSection>
      </div>
    </div>
  );
}

export default OtherForm;
