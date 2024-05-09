import React, { useState } from "react";
import * as Con from "../../styles/home/contactus.styled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { headerStates } from "../../recoil/modal";
import { pushNotification } from "../../util/notification";

function ContactUs() {
  const navigate = useNavigate();
  const [index, change] = useState(0);
  const changeImageHandler = (idx: number) => {
    change(idx);
  };

  return (
    <Con.Wrapper $imgIdx={index}>
      <Con.Container>
        <Con.BroswerContent>
          <h3>
            하나의 프로젝트가
            <br /> 얼마나 많은 노력으로 만들어 지는지,
            <br /> 그리고 얼마나 큰 책임이 있는지 알고 있습니다.
          </h3>
          <Con.InqueryContainer>
            <Con.Button onClick={() => navigate("/contact?type=1")}>
              <span>개발 · 분양 · 입주문의</span> <Con.PlusIcon />
            </Con.Button>
            <Con.Button onClick={() => navigate("/contact?type=4")}>
              <span>기타문의</span>
              <Con.PlusIcon />
            </Con.Button>
          </Con.InqueryContainer>
        </Con.BroswerContent>
        <Con.MobileContent>
          <h3>
            하나의 프로젝트를
            <br />
            완성하기 위해 투입되는 <br />
            많은 노력과 책임을 알고 있습니다.
          </h3>
          <Con.MobileQnA>
            <Con.QnAList onClick={() => navigate("/contact?type=1")}>
              <p>개발분양입주문의</p>
              <Con.PlusIcon />
            </Con.QnAList>
            <Con.QnAList onClick={() => navigate("/contact?type=4")}>
              <p>기타문의</p>
              <Con.PlusIcon />
            </Con.QnAList>
            <Con.QnAList onClick={() => navigate("/contact/empInfo")}>
              <p>채용공고</p>
              <Con.PlusIcon />
            </Con.QnAList>
            <Con.QnAList
              onClick={() =>
                alert("공고와 관련된 문의는 채용 담당자에게 연락부탁드립니다.")
              }
            >
              <p>입사지원</p>
              <Con.PlusIcon />
            </Con.QnAList>
          </Con.MobileQnA>
        </Con.MobileContent>
      </Con.Container>
      <Con.PageSection>
        <div
          onMouseEnter={() => changeImageHandler(1)}
          onMouseLeave={() => changeImageHandler(0)}
          onClick={() => navigate("/contact/empInfo")}
        >
          <span>
            채용공고 <Con.PlusIcon />
          </span>
        </div>
        <div
          onMouseEnter={() => changeImageHandler(2)}
          onMouseLeave={() => changeImageHandler(0)}
          onClick={() =>
            pushNotification(
              "공고와 관련된 문의는 채용 담당자에게 연락부탁드립니다.",
              "warning"
            )
          }
        >
          <span>
            입사지원
            <Con.PlusIcon />
          </span>
        </div>
      </Con.PageSection>
    </Con.Wrapper>
  );
}

export default ContactUs;
