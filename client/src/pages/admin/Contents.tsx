import React, { useReducer, useEffect, useState } from "react";
import * as Styles from "../../styles/admin/content.styled";
import Layout from "../../component/admin/Layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { reducer, initialState } from "../../reducer/postReducer";
import { useRecoilState, useRecoilValue } from "recoil";
import { LoginState } from "../../recoil/LoginState";
import { getPostsByUsername, deletePostsById } from "../../apis/services/posts";
import Pagination from "../../component/admin/Pagination";
import { Select } from "../../component/molecule/Select";
import { SearchState } from "../../recoil/filterState";
import { AiOutlineRight } from "react-icons/ai";
import { sortData } from "../../util/filterPosts";

interface IDataType {
  id: number;
  name: string;
  type: string[];
  url: string;
  category: string;
  address: string;
  houseHold: string;
  lowFloor: string;
  highFloor: string;
  floorAreaRatio: number;
  buildingCoverRatio: number;
  lotArea: number;
  totalFloorArea: number;
  developmentDate: string;
}

function Contents() {
  const { username } = useRecoilValue(LoginState);
  const [state, dispatch] = useReducer(reducer, initialState);
  //dataList
  const [dataList, setDataList] = useState<IDataType[]>([]);
  const [filteredList, setFilteredList] = useState<IDataType[]>(dataList);
  const result = dataList.filter((post) => {
    return post.type.includes("근린");
  });
  console.log(result, "data");
  //searchfilter
  const [searchState, setSearchState] = useRecoilState(SearchState);
  //vertical ellipsis
  const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const firstPostIndex = (currentPage - 1) * postsPerPage;
  const lastPostIndex = firstPostIndex + postsPerPage;
  const currentPosts = filteredList.slice(firstPostIndex, lastPostIndex);

  const handleDeletePosts = async (id: number) => {
    try {
      const response = await deletePostsById(id);
      if (response && response.status == 204) {
        dispatch({ type: "RESET_ALL", payload: "" });
        setExpandedItemId(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 수직 생략부호 클릭 시 팝업용도로 사용
  const handleItemClick = (itemId: number) => {
    if (expandedItemId === itemId) {
      // 이미 확장된 아이템을 클릭하면 축소
      setExpandedItemId(null);
    } else {
      setExpandedItemId(itemId);
    }
  };

  // 카테고리와 컨텐츠에 따라 리스트를 필터링하는 함수
  const filterPostsByCategory = (posts: IDataType[]) => {
    const { category, content } = searchState;

    if (content !== "") {
      let filteredList;
      if (category == "아파트명") {
        filteredList = posts.filter((post) => {
          return post.name.includes(content);
        });
      }
      if (category == "주소") {
        filteredList = posts.filter((post) => {
          return post.address.includes(content);
        });
      }
      if (category == "분류") {
        filteredList = posts.filter((post) => {
          return post.type.includes(content);
        });
      }
      if (filteredList) {
        setFilteredList(filteredList);
      }
    } else {
      setFilteredList(dataList);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      filterPostsByCategory(dataList);
    }
  };

  const toggleCategory = (itemId: number) => {
    const sortedData = sortData(
      filteredList,
      "category",
      itemId === 1 ? "asc" : "desc"
    );
    setFilteredList(sortedData);
  };

  useEffect(() => {
    async function fetchUserPosts() {
      const res = await getPostsByUsername(username);
      setDataList(res);
      setFilteredList(res);
    }
    fetchUserPosts();
  }, [state]);

  const navigate = useNavigate();
  return (
    <Layout title="매물관리">
      <Styles.Wrapper>
        <div className="navi">
          <p className="navi_con">HOME</p>
          <AiOutlineRight />
          <p className="navi_con">컨텐츠관리</p>
          <AiOutlineRight />
          <p className="navi_con">매물관리</p>
        </div>
        <Styles.Content>
          <div className="content_info">
            <p className="total_posts">
              전체 게시물 <span className="num">{dataList.length}</span>개
            </p>
            <div className="util_container">
              <Styles.SearchField>
                <Select defaultValue="선택하세요">
                  <div style={{ position: "relative" }}>
                    <Select.Trigger />
                    <Select.List>
                      <Select.Option
                        value="아파트명"
                        onClick={() =>
                          setSearchState((prev) => ({
                            ...prev,
                            category: "아파트명",
                          }))
                        }
                      >
                        아파트명
                      </Select.Option>
                      <Select.Option
                        value="주소"
                        onClick={() =>
                          setSearchState((prev) => ({
                            ...prev,
                            category: "주소",
                          }))
                        }
                      >
                        주소
                      </Select.Option>
                      <Select.Option
                        value="분류"
                        onClick={() =>
                          setSearchState((prev) => ({
                            ...prev,
                            category: "분류",
                          }))
                        }
                      >
                        분류
                      </Select.Option>
                    </Select.List>
                  </div>
                </Select>
                <Styles.SerachForm>
                  <input
                    type="text"
                    onKeyDown={handleKeyPress}
                    onChange={(e) =>
                      setSearchState((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                  />
                  <Styles.SearchIcon
                    onClick={() => filterPostsByCategory(dataList)}
                  />
                </Styles.SerachForm>
              </Styles.SearchField>
              <button
                className="add_btn"
                type="button"
                onClick={() => navigate("/admin/posts/create")}
              >
                게시물 추가
              </button>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>번호</th>
                <th>이미지</th>
                <th>
                  카테고리
                  <div className="up_down_btn">
                    <Styles.ArrowTopIcon onClick={() => toggleCategory(0)} />{" "}
                    <Styles.ArrowBottomIcon onClick={() => toggleCategory(1)} />
                  </div>
                </th>
                <th>아파트명</th>
                <th>분류</th>
                <th>주소</th>
                <th>세대수</th>
                <th>규모</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredList.length > 0 &&
                currentPosts.map((item, idx) => {
                  const reversedIdx =
                    filteredList.length - (firstPostIndex + idx); // 역순으로 순번을 매김
                  const isExpanded = expandedItemId === idx;
                  const category =
                    item.category == "sales" ? "분양·입주" : "시행·개발";
                  const type = item.type.join(",");
                  return (
                    <tr key={idx}>
                      <td>{reversedIdx}</td>
                      <td>
                        <img
                          width={120}
                          height={80}
                          src={`${process.env.REACT_APP_SERVER_IP}/dir/image/${
                            item.url
                          }?${Date.now()}`}
                          alt="이미지"
                        />
                      </td>
                      <td>{category}</td>
                      <td>{item.name}</td>
                      <td>{type}</td>
                      <td>{item.address}</td>
                      <td>{item.houseHold}</td>
                      <td>
                        <p className="flex">
                          <span className="flex gp-0-2">
                            <span>지하</span>
                            {item.lowFloor}층
                          </span>
                          <span className="slash">/</span>
                          <span className="flex gp-0-2">
                            <span>지상</span>
                            {item.highFloor}층
                          </span>
                        </p>
                      </td>
                      <td>
                        <div className="options_container">
                          <Styles.OptionsIcon
                            onClick={() => handleItemClick(idx)}
                          />
                          {isExpanded && (
                            <div className="options">
                              <p
                                onClick={() =>
                                  navigate(`/admin/posts/edit/${item.id}`)
                                }
                              >
                                수정
                              </p>
                              <p onClick={() => handleDeletePosts(item.id)}>
                                삭제
                              </p>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            postsNum={filteredList.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </Styles.Content>
      </Styles.Wrapper>
    </Layout>
  );
}

export default Contents;
