import {VscTypeHierarchy} from "react-icons/vsc";
import {MdOutlineWorkspacePremium} from "react-icons/md";
import styled from "styled-components";
import {useSelector} from "react-redux";

const StyledAccTypeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 5.4rem;
  & span {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-grey-2);
    & svg {
      font-size: 2.4rem;
      color: var(--color-primary-shade-2);
    }
  }
  
  @media (max-width: 780px) {
    grid-column: 1/2;
    grid-row: 1/2;
    justify-content: center;
    align-items: center;
    margin-right: 3.6rem;
    & span {
      font-size: 3.2rem;
      & svg {
        font-size: 3.2rem;
      }
    }
  }
  @media (max-width: 350px) {
    & span {
      font-size: 2.6rem;
    }
  }
`;

export default function AccTypeCont () {

  return (
    <StyledAccTypeCont>
      <span><VscTypeHierarchy/>Account Type: <strong>Free</strong></span>
    </StyledAccTypeCont>
  )
}