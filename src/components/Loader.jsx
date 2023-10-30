import styled, {css, keyframes} from "styled-components";


const LoadingAnimation = keyframes`
  0% {
    transform: translateX(-500%);
    opacity: 0;
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(500%);
    opacity: 0;
  }
`;

const StyledDiv = styled.div`
  width: 4rem;
  height: 0.2rem;
  animation: ${LoadingAnimation} 1s linear infinite;
  box-shadow: 0 0 50px 10px var(--color-primary);
  background-color: var(--color-primary);
  border-radius: 100%;
  ${(props) => css`margin-top: ${props.margintop};`}
`;


export default function Loader({marginTop='0'}) {
  return (
    <StyledDiv margintop={marginTop}></StyledDiv>
  )
}