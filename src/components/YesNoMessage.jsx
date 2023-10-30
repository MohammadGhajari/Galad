import styled, {css} from "styled-components";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";
import {useSelector} from "react-redux";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
  color: var(--color-grey-2);
  
`;
const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-2);
`;
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.6rem;
`;
const Container = styled.div`
  z-index: 1001;
  position: absolute;
  background-color: var(--color-white-2);
  box-shadow: var(--shadow-me-lg);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  top: ${props => props.top || '60%'};
  left: ${props => props.left || '25%'};;
  border-radius: var(--border-radius-sm);
  padding: 0.8rem;
  width: 40rem;
  @media (max-width: 1040px) {
    transform: translate(-50%, 0);
    left: ${props => props.left ? '-100%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  @media (max-width: 670px) {
    left: ${props => props.left ? '-50%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `} 
  }
  @media (max-width: 500px) {
    width: 80vw;
    left: ${props => props.left ? '-10%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  @media (max-width: 430px) {
    left: ${props => props.left ? '0%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  @media (max-width: 400px) {
    left: ${props => props.left ? '10%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  @media (max-width: 390px) {
    left: ${props => props.left ? '10%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  @media (max-width: 370px) {
    width: 90%;
    left: ${props => props.left ? '20%' : '50%'};
    ${props => props.left && css`
      width: 150%;
    `}
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
      width: 80%;
    `}
  }
  @media (max-width: 360px) {
    left: ${props => props.left ? '15%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  @media (max-width: 350px) {
    left: ${props => props.left ? '20%' : '50%'};
    ${props => props.src === 'dis' && css`
      top: 50%;
      left: 50%;
    `}
  }
  
`;
const Button = styled.button`
  padding: 0.4rem 1.4rem;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-white-2);
  color: var(--color-grey-2);
  border: none;
  box-shadow: var(--shadow-md);
  width: 15%;

  &:hover {
    background-color: ${props => props.bcolor};
    color: ${props => props.isdark === 'true' ? '#ccc': 'var(--color-white-1)'};
    border-color: ${props => props.bcolor};
  }
`;
const CloseBtn = styled.button`
  border-radius: var(--border-radius-sm);
  padding: 0.6rem;
  border: none;
  color: ${props => props.isdark === 'true' ? '#555': 'var(--color-grey-1)'};
  
  &:hover {
    background-color: red;
    color: ${props => props.isdark === 'true' ? '#ccc': 'var(--color-white-1)'};
  }
`;
const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000; 
`;

export default function YesNoMessage({message, yesFunc, noFunc, top, left, src}) {
  const {isDarkMode} = useSelector(state => state.general);

  return (
    <>
      <Container top={top} left={left} src={src}>
        <Header>
          <p>{message}</p>
          <CloseBtn isdark={`${isDarkMode}`} onClick={() => noFunc(false)}><AiOutlineClose/></CloseBtn>
        </Header>
        <Message>
          <p>Are you sure want to {message}?</p>
        </Message>
        <Footer>
          <Button isdark={`${isDarkMode}`} bcolor={'red'} onClick={yesFunc}>Yes</Button>
          <Button isdark={`${isDarkMode}`} bcolor={'#089d03'} onClick={() => noFunc(false)}>No</Button>
        </Footer>
      </Container>
      <Overlay onClick={() => noFunc(false)}></Overlay>
    </>
  )
}