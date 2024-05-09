import styled from "styled-components";

export const Trigger = styled.div<{ $active: boolean }>`
  & p {
    background: ${({ theme, $active }) =>
      $active ? theme.colors.blue4 : "white"};
    color: ${({ theme, $active }) => ($active ? "white" : {})};
    font-weight:${(props) => (props.$active ? 400 : 500)};
  }
  &:hover {
    & p {
      ${({ $active, theme }) =>
        !$active &&
        `background: #004d8e0d;
      color: ${theme.colors.blue4};
    `}
  }
`;

export const Panel = styled.div<{ value: boolean }>`
  display: ${(props) => (props.value ? "block" : "none")};
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
`;
