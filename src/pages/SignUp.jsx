import LoginForm from "../components/LoginForm.jsx";
import styled from "styled-components";
import Logo from "../components/logo.jsx";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 100vw;
  height: 100vh;
  background-color: var(--color-white-2);
`;
const StyledDiv = styled.div`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2) !important;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: relative;
`;
const StyledBack = styled.div`
  background: url('https://firebasestorage.googleapis.com/v0/b/galad-42e6f.appspot.com/o/fang-wei-lin-H1IRUS1vEFA-unsplash.jpg?alt=media&token=9d2b8c20-33b7-4623-acaa-66c2e4dabe8d') bottom;
  background-size: cover;
  display: flex;
  align-items: flex-start;

  grid-column: 1/5;
  grid-row: 1/3;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    width: 57.14%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    filter: brightness(10%);
  }

  @media (max-width: 1120px) {
    grid-column: 1/4;
    height: 100vh;
    &::before {
      width: 42.85%;
    }
  }
  @media (max-width: 880px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    justify-content: center;
    &::before {
      width: 100%;
    }
  }
`;


export default function SignUp () {
  document.title ='Sign Up';

  return (
    <Container>
      <StyledDiv>
        <StyledBack><Logo size={'6.4rem'}/></StyledBack>
        <LoginForm isLogin={false}/>
      </StyledDiv>
    </Container>
  )
}