import {FiSettings} from "react-icons/fi";
import styled, {keyframes} from "styled-components";
const rotateAnimation = keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  & svg {
    font-size: 30rem;
    color: var(--color-primary-shade-2);
    animation: ${rotateAnimation} 5s linear infinite;
  }
`;
export default function DefaultSettingPage () {
  return (
    <Container>
      <FiSettings/>
    </Container>
  )
}