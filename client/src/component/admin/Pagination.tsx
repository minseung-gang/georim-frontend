import React from "react";
import styled from "styled-components";

interface IPaginationProps {
  postsNum: number;
  postsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}

export function Pagination({
  postsNum,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: IPaginationProps) {
  const pageList = [];
  const totalPages = Math.ceil(postsNum / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  if (totalPages === 1) {
    return null;
  }

  return (
    <Wrapper>
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        이전
      </button>

      {pageList.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button onClick={goToNextPage} disabled={currentPage === pageList.length}>
        이후
      </button>
    </Wrapper>
  );
}

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  gap: 0 10px;

  button {
    min-width: 25px;
    padding: 4px 8px;
    border-radius: 3px;
    font-weight: 600;

    &.active {
      background: ${({ theme }) => theme.admColor.gray1};
      color: white;
    }
  }
`;
