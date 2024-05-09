import styled from "styled-components";

export const DropDown = styled.div`
  display: grid;
  transition: grid-template-rows 500ms ease-in-out;
  grid-template-rows: 0fr;

  &.is-open {
    grid-template-rows: 1fr;
  }
`;

export const Content = styled.div`
  overflow: hidden;
`;

export const Trigger = styled.div<{ $isClicked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  ${({ theme, $isClicked }) =>
    $isClicked &&
    `
  & .gnb_text {
    color: ${theme.colors.blue2} ;
  }
  `}
`;

export const Li = styled.li`
  padding: 5px 52px;
  cursor: pointer;
  border-radius: 8px;
`;
