import styled, {css, keyframes} from "styled-components";


const LoadingAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledDiv = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  border: 5px solid var(--color-white-1);
  border-top: 5px solid var(--color-primary);
  animation: ${LoadingAnimation} 0.5s linear infinite;
  margin-top: ${props => props.margintop};
`;


export default function BookLoader({marginTop='0'}) {
  return (
    <StyledDiv margintop={marginTop}></StyledDiv>
  )
}