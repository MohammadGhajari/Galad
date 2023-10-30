import styled from "styled-components";
import {useSelector} from "react-redux";

const H1 = styled.h1`
  &:first-child {
    position: absolute;
    top: 40%;
    color: var(--color-grey-3);  
  }
  &:nth-child(2) {
    position: absolute;
    top: 46%;
    color: var(--color-grey-3);
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
  }
  @media (max-width: 400px) {
    font-size: 2.4rem;
  }
`;

export default function BeforeSearch () {



  return (
    <>
    <H1>What book are you looking for?🤔</H1>
    <H1>Just type it's name😉</H1>
    </>
  )
}