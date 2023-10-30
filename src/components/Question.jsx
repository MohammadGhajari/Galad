import styled, {css} from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.6rem;
  border-radius: var(--border-radius-sm);
  width: 100%;
  
`;

const StyledQuestion = styled.p`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--shadow-md);
  width: 100%;
  height: 4.8rem;
  transition: all 0.1s;
  font-size: 1.8rem;
  border-left: 5px solid var(--color-primary);
  border-top-right-radius: var(--border-radius-sm);
  border-bottom-right-radius: var(--border-radius-sm);
  & span {
    margin-left: 0.8rem;
    color: var(--color-grey-2)
  }
  & svg {
    color: var(--color-primary);
    margin-right: 1rem;
  }
  @media(max-width: 600px) {
    font-size: 90%;
  }
  @media(max-width: 400px) {
    font-size: 80%;
    height: 3.6rem;
  }
`;

const StyledAnswer = styled.p`
  width: 100%;
  font-size: 1.6rem;
  color: var(--color-grey-4);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  padding: ${(props) => (props.isopen === 'true' ? "1.2rem 1.8rem" : "0 1.8rem")};
  max-height: ${(props) => (props.isopen  === 'true' ? "15rem" : "0")};
  opacity: ${(props) => (props.isopen  === 'true' ? "1" : "0")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  @media(max-width: 600px) {
    font-size: 80%;
    font-weight: 400;
    line-height: 1.2;
  }
`;

export default function Question({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledLi>
      <StyledQuestion onClick={() => setIsOpen((isOpen) => !isOpen)}>
        <span>{item.q}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </StyledQuestion>
      <StyledAnswer isopen={isOpen + ''}>{item.a}</StyledAnswer>
    </StyledLi>
  );
}
