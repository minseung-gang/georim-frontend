import React, { useState } from "react";
import * as Navi from "../styles/component/breadcrumb.styled";
import { Link } from "react-router-dom";

interface BreadcrumbProps {
  sections: string[];
  right?: boolean;
}

interface ModalProps {
  data: {
    name: string;
    url: string;
  }[];
}
function DropDownNavigation({ data }: ModalProps) {
  return (
    <Navi.Modal>
      <Navi.ModalInner>
        {data.map((item, idx) => {
          return (
            <Link to={item.url} key={idx}>
              <Navi.List>{item.name}</Navi.List>
            </Link>
          );
        })}
      </Navi.ModalInner>
    </Navi.Modal>
  );
}
function Breadcrumb({ sections, right }: BreadcrumbProps) {
  const [data, setData] = useState<{ name: string; url: string }[]>([]);
  const [checkState, setCheckState] = useState({
    main: false,
    sub: false,
  });
  const pageList = [
    {
      name: "ABOUT",
      url: "/about",
      subSections: [
        {
          name: "회사소개",
          url: "/about",
        },
        {
          name: "인사말",
          url: "/about/greeting",
        },
        {
          name: "지속가능경영",
          url: "/about/philosophy",
        },
        {
          name: "주요연혁",
          url: "/about/history",
        },
      ],
    },
    {
      name: "BUSINESS",
      url: "/business/develop",
      subSections: [
        {
          name: "개발사업",
          url: "/business/develop",
        },
        {
          name: "입주사업",
          url: "/business/sales",
        },
        {
          name: "분양사업",
          url: "/business/offer",
        },
      ],
    },
    {
      name: "PROJECTS",
      url: "/project/development",
      subSections: [
        {
          name: "시행·개발 실적",
          url: "/project/development",
        },
        {
          name: "입주·분양 실적",
          url: "/project/sales",
        },
      ],
    },
    {
      name: "NEWS",
      url: "/news/salesApt",
      subSections: [
        {
          name: "분양정보",
          url: "/news/salesApt",
        },
        {
          name: "보도자료",
          url: "/news",
        },
        {
          name: "홍보영상",
          url: "/news/promotion",
        },
      ],
    },
    {
      name: "CONTACT",
      url: "/contact",
      subSections: [
        {
          name: "문의하기",
          url: "/contact",
        },
        {
          name: "채용정보",
          url: "/contact/empInfo",
        },
        {
          name: "오시는길",
          url: "/contact/directions",
        },
      ],
    },
  ];

  const mainSectionsHandler = () => {
    const sectionNames = pageList.map((item) => ({
      name: item.name,
      url: item.url,
    }));
    setData(sectionNames);
    setCheckState((prev) => ({ sub: false, main: !checkState.main }));
  };
  const subSectionsHandler = (currentSection: string) => {
    const filteredItem = pageList.find((item) => item.name === currentSection);
    const sectionData =
      filteredItem?.subSections.map((item) => ({
        name: item.name,
        url: item.url,
      })) ?? [];
    setData(sectionData);
    setCheckState((prev) => ({ main: false, sub: !checkState.sub }));
  };
  return (
    <Navi.Wrapper className="breadcrumb" $right={right}>
      <Navi.Text>
        <a href="/">
          <Navi.SubDirectory>HOME</Navi.SubDirectory>
        </a>
      </Navi.Text>

      <Navi.Text onClick={mainSectionsHandler}>
        <Navi.SubDirectory1>{sections[0]}</Navi.SubDirectory1>
        <Navi.PlusIcon />
        {checkState.main && <DropDownNavigation data={data} />}
      </Navi.Text>

      <Navi.Text onClick={() => subSectionsHandler(sections[0])}>
        <Navi.SubDirectory2>{sections[1]}</Navi.SubDirectory2>
        <Navi.PlusIcon />
        {checkState.sub && <DropDownNavigation data={data} />}
      </Navi.Text>
    </Navi.Wrapper>
  );
}

export default Breadcrumb;
