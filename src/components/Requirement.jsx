import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6.4rem;
  width: 50%;
  @media (max-width: 620px) {
    width: 70%;
  }
`;
const Title = styled.h1`
  color: #2e475d;
`;
const ReqsCont = styled.div`
  display: flex;
  gap: 3.2rem;
  border-top: 5px dotted var(--color-primary);
  position: relative;
  width: 100%;
  @media (max-width: 690px) {
    flex-direction: column;
  }
`;
const ReqCont = styled.div`
  position: absolute;
  width: 35%;
  &:nth-child(1) {
    left: 0;
    transform: translate(-50%, -15%);
  }
  &:nth-child(2) {
    left: 50%;
    transform: translate(-50%, -15%);
  }
  &:nth-child(3) {
    left: 100%;
    transform: translate(-50%, -15%);
  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  
  @media (max-width: 1120px) {
    font-size: 80%;
  }
  @media(max-width: 620px) {
    gap: 0.8rem;
  }
  
`;
const Circle = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  background-color: var(--color-primary-tint-1);
  color: var(--color-white-1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ReqTitle = styled.h2`
  color: var(--color-dark);
  @media(max-width: 620px) {
    font-size: 100%;
  }
`;
const Description = styled.p`
  text-align: center;
  font-weight: 400;
  color: var(--color-grey-2);
  @media(max-width: 620px) {
    font-size: 90%;
  }
  @media (max-width: 500px) {
    font-size: 80%;
    line-height: 1.4;
  }
`;


export default function Requirement() {
  return (
    <Container>
      <InnerContainer>
        <Title>Requirements</Title>
        <ReqsCont>
          <ReqCont>
            <Circle>1</Circle>
            <ReqTitle>Sign Up</ReqTitle>
            <Description>Join us immediately by creating an account</Description>
          </ReqCont>
          <ReqCont>
            <Circle>2</Circle>
            <ReqTitle>Log In</ReqTitle>
            <Description>Now you just need to confirm your login by logging into your account</Description>
          </ReqCont>
          <ReqCont>
            <Circle>3</Circle>
            <ReqTitle>Search Books</ReqTitle>
            <Description>By searching for the book you want, add it to your list</Description>
          </ReqCont>
        </ReqsCont>
      </InnerContainer>
    </Container>
  )
}