import { useContext, useEffect } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import styled from "styled-components";
import { SelectContext } from "../../molecule/Select";

export default function Trigger() {
  const context = useContext(SelectContext);

  if (context) {
    const { selected, setSelected, toggleOptionsVisibility } = context;

    return (
      <Wrapper className="trigger" onClick={toggleOptionsVisibility}>
        <TriggerText>{selected}</TriggerText>
        <TriggetIcon />
      </Wrapper>
    );
  }
  return null;
}

const Wrapper = styled.div``;
const TriggerText = styled.p`
  min-width: fit-content;
  font-size: 16px;

  font-weight: 500;
`;
const TriggetIcon = styled(MdOutlineArrowDropDown)`
  min-width: fit-content;
`;
