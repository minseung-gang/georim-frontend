import React, { useState, useEffect, useRef, useReducer } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import Layout from "../../component/Layout";
import Breadcrumb from "../../component/Breadcrumb";
import Tabs from "../../component/molecule/Tabs";
import { headerStates } from "../../recoil/modal";
import * as Contact from "../../styles/contact/contactus.styled";
import SalesForm from "../../component/contact/SalesForm";
import MovingInForm from "../../component/contact/MovingInForm";
import DevelopForm from "../../component/contact/DevelopForm";
import OtherForm from "../../component/contact/OtherForm";
import contactInfoReducer from "../../reducer/contactInfoReducer";
import { initialState } from "../../reducer/contactInfoReducer";
import { pushNotification } from "../../util/notification";
import { useThrottle } from "../../hook/useThrottle";

function ContactUsForm() {
  const [state, setState] = useRecoilState(headerStates);
  const [reducerData, dispatch] = useReducer(contactInfoReducer, initialState);
  const { privacyAccepted, currentTab } = reducerData;
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const tabIndex = Number(searchParams.get("type"));

  useEffect(() => {
    window.scrollTo(0, 0);
    setState((prev) => ({ ...prev, headerDefault: false }));
  }, []);

  const EMAIL_SEVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
  const EMAIL_PUBLICK_KEY = process.env.REACT_APP_EMAIL_PUBLICK_KEY as string;
  const EAMIL_OTHER_FORM_ID = process.env
    .REACT_APP_EAMIL_OTHER_FORM_ID as string;
  const EMAIL_SALES_FORM_ID = process.env
    .REACT_APP_EMAIL_SALES_FORM_ID as string;

  const getInquiryType = (currentTab: string) => {
    switch (currentTab) {
      case "salesForm":
        return "분양 대행 문의";
      case "movingInForm":
        return "입주 대행 문의";
      case "developForm":
        return "개발 대행 문의";
      case "otherForm":
        return "기타 문의";
      default:
        return "";
    }
  };
  const formId = (() => {
    switch (currentTab) {
      case "salesForm":
      case "movingInForm":
      case "developForm":
        return EMAIL_SALES_FORM_ID;
      case "otherForm":
        return EAMIL_OTHER_FORM_ID;
      default:
        throw new Error(`Invalid currentTab: ${currentTab}`);
    }
  })();

  const sendEmail = () => {
    const templates = {
      company_name:
        (reducerData[currentTab as keyof typeof reducerData] as any)
          ?.companyName || "해당사항없음",
      user_name: (reducerData[currentTab as keyof typeof reducerData] as any)
        ?.contactName,
      user_phone: (reducerData[currentTab as keyof typeof reducerData] as any)
        ?.phoneNumber,
      user_email: (reducerData[currentTab as keyof typeof reducerData] as any)
        ?.email,
      site_name:
        (reducerData[currentTab as keyof typeof reducerData] as any)
          ?.siteName || "해당사항없음",
      site_address:
        (reducerData[currentTab as keyof typeof reducerData] as any)
          ?.siteAddress || "해당사항없음",
      target_audience:
        (reducerData[currentTab as keyof typeof reducerData] as any)?.target ||
        "해당사항없음",
      inquiry_type: getInquiryType(reducerData.currentTab),
      inquiry_content: reducerData.otherForm.inquiryDetails,
    };

    emailjs
      .send(EMAIL_SEVICE_ID, formId, templates, EMAIL_PUBLICK_KEY)
      .then((result) => {
        pushNotification("문의사항을 접수했습니다.", "success");
        changeTabHandler(currentTab); //해당 탭 inputField 초기화
        ////체크버튼 초기화
        clickCheckLabelHandler("UPDATE_AGREE_STATE");
        const checkboxes = document.querySelectorAll<HTMLInputElement>(
          'input[name="check"]'
        );
        checkboxes.forEach((checkbox) => {
          checkbox.checked = false; // 체크 해제
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("이메일 전송 오류:", error);
        setIsLoading(false);
      });
  };

  // 문의하기 버튼 클릭시 실행할 함수
  const submitHandler = () => {
    if (isLoading) return;
    const currentTabData = reducerData[currentTab as keyof typeof reducerData];
    const dataArray = Object.values(currentTabData);
    let hasEmptyField = false;

    dataArray.forEach((item) => {
      if (item === "") {
        hasEmptyField = true;
      }
    });

    if (hasEmptyField) {
      pushNotification("문의유형의 모든 정보를 기입해주세요.", "warning");

      return;
    } else if (!privacyAccepted) {
      pushNotification("개인정보 수집 및 이용에 동의해주세요.", "warning");

      return;
    }
    setIsLoading(true);
    sendEmail();
  };

  //문의하기버튼 연속클릭 방지
  const throttle = useThrottle();
  const debouncedSubmitHandler = throttle(submitHandler, 1500);

  //탭 클릭 시 관련된 reducer의 state 초기화 및 현재 클릭된 탭 정보 업데이트
  const changeTabHandler = (fieldName: string) => {
    resetForm("RESET_FORM_FIELD");
    dispatch({ type: "UPDATE_CURRENT_TAB", payload: { value: fieldName } });
  };
  const resetForm = (type: string) => {
    dispatch({
      type,
      payload: {
        fieldName: "",
        value: "",
      },
    });
  };

  // 개인정보 수집 checkbox 상태 업데이트
  const clickCheckLabelHandler = (type: string) => {
    dispatch({
      type,
      payload: {
        value: reducerData.privacyAccepted,
      },
    });
  };
  return (
    <Layout>
      <Contact.Wrapper>
        <Breadcrumb sections={["CONTACT", "문의하기"]} />
        <Contact.Inner>
          <Contact.TitleSection>
            <Contact.PageTitle>문의하기</Contact.PageTitle>
            <Contact.PageSubTitle>
              문의사항을 남겨주시면 성심성의를 다해 신속한 답변을 드리겠습니다.
            </Contact.PageSubTitle>
          </Contact.TitleSection>
          <Contact.Content>
            <div className="flex-column vertical-gap-4">
              <Tabs value={tabIndex ? tabIndex - 1 : 0}>
                <div className="flex-column vertical-gap-3">
                  <div className="flex-column vertical-gap-1">
                    <Contact.SectionTitle>문의유형</Contact.SectionTitle>
                    <Contact.TabBox>
                      <Tabs.Trigger value={0}>
                        <Contact.TriggerText
                          className="type_container"
                          onClick={() => changeTabHandler("salesForm")}
                        >
                          분양 대행 {isBrowser && <span>문의</span>}
                        </Contact.TriggerText>
                      </Tabs.Trigger>
                      <Tabs.Trigger value={1}>
                        <Contact.TriggerText
                          className="type_container"
                          onClick={() => changeTabHandler("movingInForm")}
                        >
                          입주 대행 {isBrowser && <span>문의</span>}
                        </Contact.TriggerText>
                      </Tabs.Trigger>
                      <Tabs.Trigger value={2}>
                        <Contact.TriggerText
                          className="type_container"
                          onClick={() => changeTabHandler("developForm")}
                        >
                          개발 대행 {isBrowser && <span>문의</span>}
                        </Contact.TriggerText>
                      </Tabs.Trigger>
                      <Tabs.Trigger value={3}>
                        <Contact.TriggerText
                          className="type_container"
                          onClick={() => changeTabHandler("otherForm")}
                        >
                          기타 문의
                        </Contact.TriggerText>
                      </Tabs.Trigger>
                    </Contact.TabBox>
                  </div>
                  <Tabs.Panel value={0}>
                    <SalesForm state={reducerData} dispatch={dispatch} />
                  </Tabs.Panel>
                  <Tabs.Panel value={1}>
                    <MovingInForm state={reducerData} dispatch={dispatch} />
                  </Tabs.Panel>
                  <Tabs.Panel value={2}>
                    <DevelopForm state={reducerData} dispatch={dispatch} />
                  </Tabs.Panel>
                  <Tabs.Panel value={3}>
                    <OtherForm state={reducerData} dispatch={dispatch} />
                  </Tabs.Panel>
                </div>
              </Tabs>

              <Contact.PrivacyCheck className="flex-column vertical-gap-2">
                <h3>개인정보 수집 및 이용동의 (필수)</h3>
                <div className="flex-column vertical-gap-1">
                  <dl>
                    <dt>
                      (주)거림은 아래의 목적으로 개인 정보를 수집하고 있습니다.
                    </dt>
                    <dd>
                      <Contact.PrivacyList>
                        <Contact.PrivacyDetail>
                          <span>1.</span> 목적: 개발, 분양, 입주 문의: 개발,
                          분양 및 입주, 기타문의 접수내용 확인과 답변 처리
                        </Contact.PrivacyDetail>
                        <Contact.PrivacyDetail>
                          <span>2.</span> 항목: 신청인 이름, 업체명, 연락처,
                          이메일, 문의내용, 접속 IP 정보
                        </Contact.PrivacyDetail>
                        <Contact.PrivacyDetail>
                          <span>3.</span> 처리 및 보유기간: 정보 보존기간
                          3년(이용자의 요청에 의해 삭제될 수 있음)
                        </Contact.PrivacyDetail>
                      </Contact.PrivacyList>
                    </dd>
                  </dl>
                  <Contact.Label>
                    <input
                      type="checkbox"
                      hidden
                      id="checkbox"
                      checked={reducerData.privacyAccepted}
                      onChange={() =>
                        clickCheckLabelHandler("UPDATE_AGREE_STATE")
                      }
                    />
                    <span className="checkmark">
                      <FaCheck />
                    </span>
                    <p>개인정보 수집 및 이용에 동의합니다. </p>
                  </Contact.Label>
                </div>
              </Contact.PrivacyCheck>
            </div>
          </Contact.Content>
          <Contact.BtnContainer className="content-center">
            <Contact.SubmitBtn onClick={debouncedSubmitHandler}>
              {isLoading ? "전송 중" : "문의하기"}
            </Contact.SubmitBtn>
          </Contact.BtnContainer>
        </Contact.Inner>
      </Contact.Wrapper>
    </Layout>
  );
}

export default ContactUsForm;
